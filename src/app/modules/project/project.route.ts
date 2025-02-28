import express, { NextFunction, Request, Response } from "express";
import { projectController } from "./project.controller";
import { upload } from "../../utils/sendImageToCloudinary";

const projectRouter = express.Router();
projectRouter.get("/", projectController.getAllProjects);
projectRouter.post(
  "/add-project",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.projectData);
    next();
  },
  projectController.addProjects
);
projectRouter.get("/:projectId", projectController.singleProjectDetail);
export default projectRouter;
