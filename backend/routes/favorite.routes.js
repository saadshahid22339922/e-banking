import { Router } from "express";
import { serverErrorResponse } from "../utils/response";
import FavoriteService from "../services/favorite.service";
const router = Router();

// All Records
router.get("/", async (req, res) => {
  try {
    let data = await FavoriteService.getAllFavorites();
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    let data = await FavoriteService.createFavorites(req);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

export default router;
