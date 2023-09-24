import { Router } from "express";
import { serverErrorResponse } from "../utils/response";
import { TransactionService } from "../services";
const router = Router();

// All Records
router.get("/employee", async (req, res) => {
  try {
    let data = await TransactionService.getAllforEmployee();
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let data = await TransactionService.getAll(req.params);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    let data = await TransactionService.create(req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let data = await TransactionService.update(req.params, req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await TransactionService.removeRecord(req.params);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

export default router;
