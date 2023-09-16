import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  acc_no: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  balance: {
    type: Number,
    default: 0,
  },
  account_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccountType",
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});

export default mongoose.model("User", userSchema);
