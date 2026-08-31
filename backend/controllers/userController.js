import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });

}

const googleClient = new OAuth2Client();







//Route for user login
const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }
        if (!user.password) {
            return res.json({ success: false, message: "Please sign in with Google" });
        }
        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid password" });
        }
        // Create token
        const token = createToken(user._id);
        return res.json({ success: true, message: "User logged in successfully", token });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error logging in user" });
    }


}

// Route for Google Sign-In. Existing accounts are linked by verified email;
// new accounts receive an optional Google identity without changing old records.
const googleLogin = async (req, res) => {
    try {
        const { credential } = req.body;
        const clientId = process.env.GOOGLE_CLIENT_ID;

        if (!credential || !clientId) {
            return res.status(400).json({ success: false, message: "Google Sign-In is not configured" });
        }

        const ticket = await googleClient.verifyIdToken({ idToken: credential, audience: clientId });
        const payload = ticket.getPayload();

        if (!payload?.email || !payload.email_verified || !payload.sub) {
            return res.status(401).json({ success: false, message: "Google could not verify this account" });
        }

        const email = payload.email.toLowerCase();
        let user = await userModel.findOne({ $or: [{ googleId: payload.sub }, { email }] });

        if (user) {
            // Link an existing verified-email account once, preserving its password and cart.
            if (!user.googleId) {
                user.googleId = payload.sub;
                await user.save();
            } else if (user.googleId !== payload.sub) {
                return res.status(409).json({ success: false, message: "This email is already linked to a different Google account" });
            }
        } else {
            user = await userModel.create({
                name: payload.name || email.split('@')[0],
                email,
                googleId: payload.sub,
            });
        }

        return res.json({ success: true, message: "User logged in with Google", token: createToken(user._id) });
    } catch (error) {
        return res.status(401).json({ success: false, message: "Google sign-in failed" });
    }
}

//Route for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check if user already exists
        const exists=await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        if(!validator.isEmail(email)){
            return res.json({ success: false, message: "Invalid email address" });
        }
        if(!validator.isLength(password, { min: 8 })){
            return res.json({ success: false, message: "Password must be at least 8 characters long" });
        }
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Create the user
        const newUser = new userModel({ name, email, password: hashedPassword });
        const user= await newUser.save();
        const token = createToken(user._id);
        return res.status(201).json({ success: true, message: "User registered successfully", token });

    } catch (error) {
        res.status(500).json({ success: false, message: "Error registering user" });
    }
}

//Route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.json({ success: true, message: "Admin logged in successfully", token });
        } else {
            return res.json({ success: false, message: "Invalid admin credentials" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error logging in admin" });
    }

}

export { loginUser, googleLogin, registerUser, adminLogin };
