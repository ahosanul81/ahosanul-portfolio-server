import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";

const getAllProjectsFromDB = async () => {
  const projects = await ProjectModel.find().select(
    "projectName idea homePageImg liveLink"
  );
  return projects;
};

const addProjectIntoDB = async (
  projectHomePageImg: any,
  projectData: TProject
) => {
  const { projectName, features, clientSite, backendSite, liveLink }: any =
    projectData;
  try {
    const isExistProject = await ProjectModel.findOne({ liveLink });
    if (projectHomePageImg) {
      const projectHomePageImgUrl = await sendImageToCloudinary(
        projectName,
        projectHomePageImg.path
      );
      projectData.homePageImg = projectHomePageImgUrl?.secure_url;
    }
    if (!projectHomePageImg) {
      projectData.homePageImg = "";
    }
    if (isExistProject) {
      throw new Error(`${liveLink} this project has already added`);
    }
    const formatedFeatures = features.split("#").slice(1);

    const formatedProjectData = {
      projectName: projectData.projectName,
      idea: projectData.idea,
      homePageImg: projectData.homePageImg,
      technologies: projectData.technologies,
      features: formatedFeatures,
      githubRepo: { clientSite, backendSite },
      liveLink: projectData.liveLink,
      developerNotes: projectData.developerNotes,
      description: projectData.description,
    };

    const result = await ProjectModel.create(formatedProjectData);
    return result;
  } catch (error) {
    console.log(error);
  }
};
const singleProjectDetailFromDB = async (projectId: string) => {
  try {
    const isExistsBlog = await ProjectModel.findById(projectId);

    if (!isExistsBlog) {
      throw new Error("This projectId is not exist");
    }

    return isExistsBlog;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const projectServices = {
  getAllProjectsFromDB,
  addProjectIntoDB,
  singleProjectDetailFromDB,
};
