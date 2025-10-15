export type TInvoiceItem = {
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
};

export type TInvoice = {
  title: string;
  invoiceNumber: string;
  date: Date;
  from: {
    companyName: string;
    address: string;
    email: string;
    phone: string;
  };
  to: {
    clientName: string;
    address: string;
    email: string;
    phone: string;
  };
  items: TInvoiceItem[];
  subtotal: number;
  taxRate: number;
  totalAmount: number;
  notes?: string;
  signatureUrl?: string; 
  templateId: string; 
};
