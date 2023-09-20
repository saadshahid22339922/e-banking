import ROUTES from "../config/routes";
import FETCH from "../utils/fetch";

const getAll = async (id, cb) => {
  let res = await FETCH.get({
    url: `${ROUTES.TRANSACTION}/${id}`,
    auth: false,
  });
  return res;
};

const TRANSACTION_API = {
  getAll,
};
export default TRANSACTION_API;
