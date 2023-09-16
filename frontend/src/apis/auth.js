import ROUTES from "../config/routes";
import FETCH from "../utils/fetch";
import STORAGE from "../utils/local.storage";

const login = async (body, cb) => {
  let res = await FETCH.post({
    url: `${ROUTES.USER}/login`,
    body,
    auth: false,
  });
  if (res) STORAGE.setStoage(res.data, cb);
  return res;
};

const signUp = async (body, cb) => {
  let res = await FETCH.post({ url: ROUTES.USER, body, auth: false });
  return res;
};

const getUsers = async () => {
  let res = await FETCH.get({ url: ROUTES.USER, auth: false });
  return res;
};

const logout = async (cb) => {
  STORAGE.logout(cb);
};

const deposit = async (body, cb) => {
  let res = await FETCH.post({
    url: `${ROUTES.USER}/deposit/6504354946404677a77586aa`,
    body,
    auth: false,
    isFormData: true,
  });
  return res;
};

const withdraw = async (body, cb) => {
  let res = await FETCH.post({
    url: `${ROUTES.USER}/withdraw/6504354946404677a77586aa`,
    body,
    auth: false,
  });
  return res;
};

const transfer = async (body, cb) => {
  let res = await FETCH.post({
    url: `${ROUTES.USER}/transfer/6504354946404677a77586aa`,
    body,
    auth: false,
  });
  return res;
};

const AUTH_API = {
  login,
  signUp,
  logout,
  getUsers,
  deposit,
  withdraw,
  transfer,
};
export default AUTH_API;
