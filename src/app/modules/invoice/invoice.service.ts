import { templateModel } from "../template/template.model";
import { invoiceModel } from "./invoice.model";
import { v4 as uuidv4 } from "uuid";

const getAllGeneratedInvoiceDb = async () => {
  const result = await invoiceModel.find();
  return result;
};
const getSingleGeneratedInvoiceDb = async (id: string) => {
  
  const result = await invoiceModel.findById(id);
  if (!result) {
    throw new Error("Invoice not found");
  }
  const template = await templateModel.findById(result.templateId);

  return { ...result.toObject(), template };
};

const createGeneratedInvoiceDb = async (payload: any) => {

  const invoiceNumber = `INV-${uuidv4().slice(0, 8).toUpperCase()}`; 

  const itemsWithTotal = payload.items.map((item: any) => ({
    ...item,
    total: item.quantity * item.unitPrice,
  }));

  
  const subtotal = itemsWithTotal.reduce(
    (acc: number, item: any) => acc + item.total,
    0
  );

  const taxAmount = (subtotal * payload.taxRate) / 100;
  const totalAmount = subtotal + taxAmount;

  const invoiceData = {
    ...payload,
    items: itemsWithTotal,
    subtotal,
    totalAmount,
  };

  const result = await invoiceModel.create(invoiceData);
  return result;
};

const deleteGeneratedInvoiceDb = async (id: any) => {
  const result = await invoiceModel.findByIdAndDelete(id);
  return result;
};

export const InvoiceService = {
 getAllGeneratedInvoiceDb,
 getSingleGeneratedInvoiceDb,
 createGeneratedInvoiceDb,
 deleteGeneratedInvoiceDb
};
