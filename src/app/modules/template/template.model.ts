import { Schema, model } from "mongoose";
import { TTemplate } from "./template.interface";

const templateSchema = new Schema<TTemplate>(
  {
  name: { type: String, required: true }, 
  type: { type: String, required: true }, 
  previewUrl: { type: String },           
  layout: { type: Object },               
}, 
{ timestamps: true }
);

export const templateModel = model("template", templateSchema);
