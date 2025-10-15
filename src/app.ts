import express, { Application, Request, Response } from "express";

import config from "./app/config";
import { templateRoutes } from "./app/modules/template/template.routes";
import { InvoiceRoutes } from "./app/modules/invoice/invoice.routes";
import { notFoundUrlError } from "./app/middleware/notFound";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";

const app: Application = express();

app.use(express.json());

app.use("/api/template", templateRoutes);
app.use("/api/invoice", InvoiceRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send(`Server Running on port ${config.port}`);
});

app.use(notFoundUrlError);
app.use(globalErrorHandler);

export default app;