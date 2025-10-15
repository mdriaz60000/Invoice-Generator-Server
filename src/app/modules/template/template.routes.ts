import express from "express";
import { templateController } from "./template.controller";


const router = express.Router();

router.get("/", templateController.getTemplate);
router.get("/:id", templateController.getSingleTemplate);
router.post("/", templateController.createTemplate);

export const templateRoutes = router;



