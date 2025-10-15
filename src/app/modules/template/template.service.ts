import { templateModel } from "./template.model";


const getTemplateDb = async () => {
  const result = await templateModel.find();
  return result;
};
const getSingleTemplateDb = async (id: any) => {
  const result = await templateModel.findOne(
    { _id: id }
  );
  return result;
};

const createTemplateDb = async (payload: any) => {
  const result = await templateModel.create(payload);
  return result;
};

export const templateService = {
  getTemplateDb,
  getSingleTemplateDb,
  createTemplateDb,
};
