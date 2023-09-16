import ROUTES from "../config/routes";
import FETCH from "../utils/fetch";

const getAll = async (cb) => {
  let res = await FETCH.get({
    url: `${ROUTES.TRANSACTION}/6504354946404677a77586aa`,
    auth: false,
  });
  return res;
};

const TRANSACTION_API = {
  getAll,
};
export default TRANSACTION_API;
