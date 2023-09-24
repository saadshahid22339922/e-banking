import ROUTES from "../config/routes";
import FETCH from "../utils/fetch";
import LocalStorage from "../utils/local.storage";

const getAll = async (id, cb) => {
  const role = LocalStorage.getStorage();
  let res = await FETCH.get({
    url:
      role?.role?.role_enum === "EMPLOYEE"
        ? `${ROUTES.TRANSACTION}/employee`
        : `${ROUTES.TRANSACTION}/${id}`,
    auth: false,
  });
  return res;
};

const TRANSACTION_API = {
  getAll,
};
export default TRANSACTION_API;
