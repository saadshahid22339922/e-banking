import ROUTES from "../config/routes";
import FETCH from "../utils/fetch";

const getAll = async (cb) => {
  let res = await FETCH.get({
    url: `${ROUTES.ROLE}`,
    auth: false,
  });
  return res;
};

const ROLE_API = {
  getAll,
};
export default ROLE_API;
