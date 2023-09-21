import ROUTES from "../config/routes";
import FETCH from "../utils/fetch";

const getAll = async (cb) => {
  let res = await FETCH.get({
    url: `${ROUTES.ACCOUNT_TYPE}`,
    auth: false,
  });
  return res;
};

const ACCOUNT_TYPE_API = {
  getAll,
};
export default ACCOUNT_TYPE_API;
