import { AccountType } from "../models";
import { successResponse } from "../utils/response";

const getAll = async () => {
  try {
    const res = await AccountType.find({});
    return successResponse({ message: "account.type.found.ok", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const create = async ({ account_type }) => {
  try {
    let res = await AccountType.create({
      account_type,
    });
    return successResponse({ message: "account.type.created", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const update = async ({ id }, body) => {
  try {
    let res = await AccountType.updateOne({ _id: id }, body);
    return successResponse({ message: "account.type.updated", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const removeRecord = async ({ id }) => {
  try {
    let res = await AccountType.deleteOne({ _id: id });
    return successResponse({ message: "account.type.deleted", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  getAll,
  create,
  update,
  removeRecord,
};
