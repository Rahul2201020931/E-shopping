import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // Password remains required for email/password registrations, but Google-only
    // accounts do not store one.
    password: { type: String, default: null },
    googleId: { type: String, unique: true, sparse: true },
    isAdmin: { type: Boolean, default: false },
    cartData: { type: Object, default:{}},

  },
  { minimize: false }
);  

const userModel = mongoose.models.user || mongoose.model("User", userSchema);
export default userModel;
