import { Router } from "express";
import { serverErrorResponse } from "../utils/response";
import { RoleService } from "../services";
const router = Router();

// All Records
router.get("/", async (req, res) => {
  try {
    let data = await RoleService.getAll();
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    let data = await RoleService.create(req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let data = await RoleService.update(req.params, req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await RoleService.removeRecord(req.params);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

export default router;
