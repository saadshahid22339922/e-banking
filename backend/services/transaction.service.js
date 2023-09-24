import { Transaction } from "../models";
import { successResponse } from "../utils/response";

const getAll = async ({ id }) => {
  try {
    const res = await Transaction.find({
      $or: [{ send_acc: id }, { reciever_acc: id }],
    })
      .populate("send_acc")
      .populate("reciever_acc");
    return successResponse({ message: "transactions.found.ok", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const getAllforEmployee = async () => {
  try {
    const res = await Transaction.find({})
      .populate("send_acc")
      .populate("reciever_acc");
    return successResponse({ message: "transactions.found.ok", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const create = async ({ body }) => {
  try {
    let res = await Transaction.create({
      person: {
        ...body,
      },
    });
    return successResponse({ message: "transaction.created", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const update = async ({ id }, body) => {
  try {
    let res = await Transaction.updateOne({ _id: id }, body);
    return successResponse({ message: "transaction.updated", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const removeRecord = async ({ id }) => {
  try {
    let res = await Transaction.deleteOne({ _id: id });
    return successResponse({ message: "transaction.deleted", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  getAll,
  create,
  update,
  removeRecord,
  getAllforEmployee,
};
