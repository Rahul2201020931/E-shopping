import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });

}







//Route for user login
const loginUser = async (req, res) => {


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

}

export { loginUser, registerUser, adminLogin };