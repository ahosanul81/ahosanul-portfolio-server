import express from "express";
import { adminControllers } from "./admin.controller";
const adminRoute = express.Router();

adminRoute.get("/", adminControllers.getAdminInfo);
export default adminRoute;
