import express from "express";
import bookController from "../controllers/bookController";
const controller = new bookController();

const router = express.Router();

router.get("/", controller.getAllBooks);
router.get("/:id", controller.getBookById);
router.post("/", controller.createBook);

export default router;
