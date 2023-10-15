import express from "express";
import { getResources } from "../controllers/resourceController";

const router = express.Router();

router.get("/", getResources);

export default router;
