import { Router } from "express";
import FavoriteRoutes from "./favorite.routes";

const RouteSetup = (app) => {
  const router = Router();

  router.use("/favorite", FavoriteRoutes);

  app.use("/api", router);
};

export default RouteSetup;
