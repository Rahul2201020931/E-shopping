import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const adminAuth = (req, res, next) => {
    try {
        const token = req.headers;
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decoded.id !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: "Invalid token" });
        }
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default adminAuth;