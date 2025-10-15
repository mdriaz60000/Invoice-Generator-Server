import express from "express";
import { invoiceController } from "./invoice.controller";

const router = express.Router();

router.get("/generate/", invoiceController.getAllGeneratedInvoice);
router.get("/generate/:id", invoiceController.getSingleGeneratedInvoice);
router.post("/generate", invoiceController.createGeneratedInvoice);
router.delete("/generate/:id", invoiceController.deleteGeneratedInvoice);

export const InvoiceRoutes = router;
