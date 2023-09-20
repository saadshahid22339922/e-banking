const setStoage = (body, cb = null) => {
  try {
    let user = JSON.stringify(body);
    localStorage.setItem("e-banking", user);
    localStorage.setItem("e-banking-id", user._id);
    if (cb) cb("/auth/user");
    else return true;
  } catch (error) {
    return null;
  }
};

const getStorage = (cb = null) => {
  try {
    let user = localStorage.getItem("e-banking");
    // if (!user) cb();
    return JSON.parse(user);
  } catch (error) {
    return null;
  }
};

const getStorageId = (cb = null) => {
  try {
    let user = localStorage.getItem("e-banking-id");
    // if (!user) cb();
    return JSON.parse(user);
  } catch (error) {
    return null;
  }
};

const getToken = (cb) => {
  try {
    let user = getStorage(cb);
    return user.token;
  } catch (error) {
    cb();
  }
};

const logout = (cb) => {
  try {
    localStorage.removeItem("e-banking");
    localStorage.removeItem("e-banking-id");
    cb("/");
  } catch (error) {
    return false;
  }
};

const STORAGE = { setStoage, getStorage, logout, getToken, getStorageId };

export default STORAGE;
