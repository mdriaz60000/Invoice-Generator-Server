import { NextFunction, Request, Response } from "express";
import { templateService } from "./template.service";


const getTemplate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await templateService.getTemplateDb();
    res.status(200).json({
      success: true,
      message: "template get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleTemplate = async (req: Request, res: Response, next: NextFunction) => {
  try {
     const {id} = req.params
    const result = await templateService.getSingleTemplateDb(id);
    res.status(200).json({
      success: true,
      message: "Single template get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createTemplate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await templateService.createTemplateDb(req.body);
    res.status(201).json({
      success: true,
      message: "template created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const templateController = {
    getTemplate,
    getSingleTemplate,
    createTemplate,
};
