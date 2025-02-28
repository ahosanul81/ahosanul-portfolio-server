import mongoose, { Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>({
  projectName: { type: String, required: true },
  idea: { type: String },
  homePageImg: { type: String },
  technologies: { type: [String], required: true },
  features: { type: [String] },
  githubRepo: {
    clientSite: { type: String, required: true },
    backendSite: { type: String, required: true },
  },
  liveLink: { type: String, required: true },
  developerNotes: { type: String },
  description: { type: String },
});

export const ProjectModel = mongoose.model("Project", projectSchema);
