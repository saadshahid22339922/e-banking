import { Role } from "../models";
import { successResponse } from "../utils/response";

const getAll = async () => {
  try {
    const res = await Role.find({});
    return successResponse({ message: "roles.found.ok", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const create = async ({ role, role_enum }) => {
  try {
    let res = await Role.create({
      role,
      role_enum,
    });
    return successResponse({ message: "roles.created", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const update = async ({ id }, body) => {
  try {
    let res = await Role.updateOne({ _id: id }, body);
    return successResponse({ message: "roles.updated", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

const removeRecord = async ({ id }) => {
  try {
    let res = await Role.deleteOne({ _id: id });
    return successResponse({ message: "roles.deleted", data: res });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default { getAll, create, update, removeRecord };
