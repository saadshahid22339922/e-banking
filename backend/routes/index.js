import { Router } from "express";
import RoleRoutes from "./role.routes";
import TransactionRoutes from "./transaction.routes";
import AccountTypeRoutes from "./account.type.routes";
import UserRoutes from "./user.routes";

const RouteSetup = (app) => {
  const router = Router();

  router.use("/role", RoleRoutes);
  router.use("/transaction", TransactionRoutes);
  router.use("/account-type", AccountTypeRoutes);
  router.use("/user", UserRoutes);

  app.use("/api", router);
};

export default RouteSetup;
