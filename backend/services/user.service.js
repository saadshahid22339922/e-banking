import { Transaction, User } from "../models";
import crypto from "crypto";
import { successResponse } from "../utils/response";

const getAll = async () => {
  try {
    const res = await User.find({}).populate("role").populate("account_type");
    return successResponse({ message: "users.found.ok", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const create = async ({ name, email, password, account_type, role }) => {
  try {
    let isExist = await User.findOne({
      email,
    });
    if (isExist)
      return successResponse({
        status: 400,
        message: "email.already.in.use",
        data: null,
      });

    let res = await User.create({
      name,
      email,
      password,
      account_type,
      role,
      acc_no: crypto.randomInt(10 ** 7, 10 ** 8 - 1),
    });
    return successResponse({ message: "users.created", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const login = async ({ email, password }) => {
  try {
    let res = await User.findOne({
      email,
      password,
    });
    if (!res)
      return successResponse({
        status: 400,
        message: "invalid.credentials",
        data: null,
      });
    return successResponse({ message: "users.created", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const update = async ({ id }, body) => {
  try {
    let res = await User.updateOne({ _id: id }, body);
    return successResponse({ message: "users.updated", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const removeRecord = async ({ id }) => {
  try {
    let res = await User.deleteOne({ _id: id });
    return successResponse({ message: "users.deleted", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const depositAmount = async ({ amount }, { id }, file) => {
  try {
    let res = await User.findOneAndUpdate(
      { _id: id },
      { $inc: { balance: amount } },
      { new: true }
    );

    await Transaction.create({
      send_acc: id,
      reciever_acc: id,
      amount,
      cheque_image: file.path,
      transaction_type: "DEPOSIT",
    });
    return successResponse({ message: "amount.deposited", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const withDrawAmount = async ({ amount }, { id }) => {
  try {
    let res = await User.findOneAndUpdate(
      { _id: id },
      { $inc: { balance: amount * -1 } },
      { new: true }
    );

    await Transaction.create({
      send_acc: id,
      reciever_acc: id,
      amount: amount * -1,
      transaction_type: "WITHDRAW",
      cheque_image: "",
    });
    return successResponse({ message: "amount.withdraw", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const transfer = async ({ amount, sender_id, reciever_id }) => {
  try {
    let res = await User.findOneAndUpdate(
      { _id: sender_id },
      { $inc: { balance: amount * -1 } },
      { new: true }
    );

    await User.findOneAndUpdate(
      { _id: reciever_id },
      { $inc: { balance: amount } },
      { new: true }
    );

    await Transaction.create({
      send_acc: sender_id,
      reciever_acc: reciever_id,
      amount: amount * -1,
      transaction_type: "TRANSFER",
      cheque_image: "",
    });
    return successResponse({ message: "amount.deposited", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  getAll,
  create,
  update,
  login,
  removeRecord,
  depositAmount,
  withDrawAmount,
  transfer,
};
