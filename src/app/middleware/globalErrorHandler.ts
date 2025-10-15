import { NextFunction, Request, Response } from "express";
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
     res.status(500).json({
        message: "Internal Server Error",
        success:false,
        error: err,
        stack:err.stack || "No stack trace available"
    })
}
