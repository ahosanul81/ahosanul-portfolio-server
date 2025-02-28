import express, { NextFunction, Request, Response } from "express";
import { blogController } from "./blog.controller";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
const blogRouter = express.Router();
blogRouter.post(
  "/add-blog",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.blogData);
    next();
  },
  blogController.addBlogs
);
blogRouter.get("/", blogController.getAllBlogs);
blogRouter.get("/:blogId", blogController.singleBlogDetail);
export default blogRouter;
