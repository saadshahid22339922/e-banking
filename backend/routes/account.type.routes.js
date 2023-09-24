import { Router } from "express";
import { serverErrorResponse } from "../utils/response";
import { AccountTypeService } from "../services";
const router = Router();

// All Records
router.get("/", async (req, res) => {
  try {
    let data = await AccountTypeService.getAll();
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    let data = await AccountTypeService.create(req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let data = await AccountTypeService.update(req.params, req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await AccountTypeService.removeRecord(req.params);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

export default router;
