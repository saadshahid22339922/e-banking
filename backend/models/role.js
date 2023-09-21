import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  role: {
    type: String,
  },
  role_enum: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Role", roleSchema);
