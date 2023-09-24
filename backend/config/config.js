export default {
  mongodb:
    process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/e-banking",
};
