import catchAsync from "../../utils/catchAsync";
import { projectServices } from "./project.service";

const getAllProjects = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProjectsFromDB();
  res.status(200).json({
    success: true,
    status: 200,
    message: "Successfully fetched all projects",
    data: result,
  });
});
const addProjects = catchAsync(async (req, res) => {
  console.log(req.file);

  const result = await projectServices.addProjectIntoDB(req.file, req.body);
  res.status(200).json({
    success: true,
    status: 200,
    message: "Successfully added a project",
    data: result,
  });
});
const singleProjectDetail = catchAsync(async (req, res) => {
  const { projectId } = req.params;

  const result = await projectServices.singleProjectDetailFromDB(projectId);

  res.status(200).json({
    success: true,
    status: 200,
    message: `Successfully fetched project details`,
    data: result,
  });
});

export const projectController = {
  getAllProjects,
  addProjects,
  singleProjectDetail,
};
