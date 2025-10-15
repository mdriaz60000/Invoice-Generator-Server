import { NextFunction, Request, Response } from "express";
import { InvoiceService } from "./invoice.service";

const getAllGeneratedInvoice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await InvoiceService.getAllGeneratedInvoiceDb();
    res.status(200).json({
      success: true,
      message: "Invoices fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleGeneratedInvoice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await InvoiceService.getSingleGeneratedInvoiceDb(id);
    res.status(200).json({
      success: true,
      message: "Invoice fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createGeneratedInvoice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await InvoiceService.createGeneratedInvoiceDb(req.body);
    res.status(201).json({
      success: true,
      message: "Invoice created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteGeneratedInvoice = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await InvoiceService.deleteGeneratedInvoiceDb(id);
    res.status(200).json({
      success: true,
      message: "Invoice deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const invoiceController = {
 getAllGeneratedInvoice,
 getSingleGeneratedInvoice,
 createGeneratedInvoice,
 deleteGeneratedInvoice
};
