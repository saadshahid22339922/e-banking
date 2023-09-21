import { Router } from "express";
import { serverErrorResponse } from "../utils/response";
import { UserService } from "../services";
import multer from "multer";
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the destination folder where uploaded files will be saved
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // Specify how the uploaded file should be named
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

// All Records
router.get("/", async (req, res) => {
  try {
    let data = await UserService.getAll();
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let data = await UserService.getUserById(req.params);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    let data = await UserService.create(req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.post("/login", async (req, res) => {
  try {
    let data = await UserService.login(req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let data = await UserService.update(req.params, req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await UserService.removeRecord(req.params);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.post("/deposit/:id", upload.single("file"), async (req, res) => {
  try {
    let data = await UserService.depositAmount(req.body, req.params, req.file);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.post("/withdraw/:id", async (req, res) => {
  try {
    let data = await UserService.withDrawAmount(req.body, req.params);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

router.post("/transfer", async (req, res) => {
  try {
    let data = await UserService.transfer(req.body);
    res.status(data.status).send(data);
  } catch (error) {
    return serverErrorResponse(res, error);
  }
});

export default router;
