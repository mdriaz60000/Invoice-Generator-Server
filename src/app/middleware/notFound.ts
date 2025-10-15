import { NextFunction, Request, Response } from "express";
export const notFoundUrlError = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
      message:"Requested URL was not found",
      success:false,
      status:404,
      url: req.url
    })
  }