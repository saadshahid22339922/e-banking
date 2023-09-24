import mongoose from "mongoose";

const accountTypeSchema = new mongoose.Schema({
  account_type: {
    type: String,
  },
});

export default mongoose.model("AccountType", accountTypeSchema);
