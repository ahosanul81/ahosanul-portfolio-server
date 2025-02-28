import catchAsync from "../../utils/catchAsync";
import { blogServices } from "./blog.service";

const addBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.addBlogIntoDB(req.file, req.body);
  res.status(200).json({
    success: true,
    status: 200,
    message: "Successfully added a blog",
    data: result,
  });
});
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await blogServices.getAllBlogFromDB();

  res.status(200).json({
    success: true,
    status: 200,
    message: "Successfully fetched all blog",
    data: result,
  });
});
const singleBlogDetail = catchAsync(async (req, res) => {
  const { blogId } = req.params;

  const result = await blogServices.singleBlogDetailFromDB(blogId);

  res.status(200).json({
    success: true,
    status: 200,
    message: `Successfully fetched blog details`,
    data: result,
  });
});
export const blogController = { addBlogs, getAllBlogs, singleBlogDetail };
