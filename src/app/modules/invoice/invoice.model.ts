import { model, Schema } from "mongoose";
import { TInvoice } from "./invoice.interface";
import { v4 as uuidv4 } from "uuid";

const invoiceSchema = new Schema<TInvoice>(
  {
    title: { type: String, required: true },
    invoiceNumber: { type: String, required: true, unique: true, default: () => `INV-${uuidv4().slice(0, 8).toUpperCase()}` },
    date: { type: Date, required: true },
    from: {
      companyName: { type: String, required: true },
      address: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    to: {
      clientName: { type: String, required: true },
      address: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    items: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        unitPrice: { type: Number, required: true },
        total: { type: Number, required: true },
      },
    ],
    subtotal: { type: Number, required: true },
    taxRate: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    notes: { type: String },
    signatureUrl: { type: String },
    templateId: { type: String, required: true },
  },
  { timestamps: true }
);

export const invoiceModel = model<TInvoice>("Invoice", invoiceSchema);
