import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  send_acc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reciever_acc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  amount: {
    type: Number,
    required: true,
  },
  transaction_type: {
    type: String,
    required: true,
  },
  cheque_image: {
    type: String,
  },
});

export default mongoose.model("Transaction", transactionSchema);
