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

const getDetailUser = async (id) => {
  let res = await FETCH.get({ url: `${ROUTES.USER}/${id}`, auth: false });
  return res;
};

const logout = async (cb) => {
  STORAGE.logout(cb);
};

const deposit = async (id, body, cb) => {
  let res = await FETCH.post({
    url: `${ROUTES.USER}/deposit/${id}`,
    body,
    isFormData: true,
    auth: false,
  });
  return res;
};

const withdraw = async (id, body, cb) => {
  let res = await FETCH.post({
    url: `${ROUTES.USER}/withdraw/${id}`,
    body,
    auth: false,
  });
  return res;
};

const transfer = async (body, cb) => {
  let res = await FETCH.post({
    url: `${ROUTES.USER}/transfer`,
    body,
    auth: false,
  });
  return res;
};

const getStats = async (id, cb) => {
  const role = STORAGE.getStorage();
  let res = await FETCH.get({
    url:
      role?.role?.role_enum === "EMPLOYEE"
        ? `${ROUTES.USER}/employee-stats/${id}`
        : `${ROUTES.USER}/customer-stats/${id}`,
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
  getDetailUser,
  getStats,
};
export default AUTH_API;
