import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const adminAuth = (req, res, next) => {
    try {
        const token = req.headers.token || req.headers.authorization?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decoded.email !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }
        next();
    } catch (error) {
        console.error('Auth error:', error.message);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default adminAuth;