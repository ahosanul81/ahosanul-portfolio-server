import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { BlogModel } from "./blog.model";

const addBlogIntoDB = async (imageFile: any, blogData: TBlog) => {
  try {
    if (imageFile) {
      const imageName = blogData.title;
      const path = imageFile?.path;
      const imageUrl = await sendImageToCloudinary(imageName, path);
      blogData.image = imageUrl?.secure_url;
    }
    if (!imageFile) {
      blogData.image = "";
    }

    const result = await BlogModel.create(blogData);
    return result;
  } catch (error) {
    console.log(error);
  }
};
const getAllBlogFromDB = async () => {
  try {
    const result = await BlogModel.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};
const singleBlogDetailFromDB = async (blogId: string) => {
  console.log(blogId);

  try {
    const isExistsBlog = await BlogModel.findById(blogId);

    if (!isExistsBlog) {
      throw new Error("This blog is not exist");
    }

    return isExistsBlog;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const blogServices = {
  addBlogIntoDB,
  getAllBlogFromDB,
  singleBlogDetailFromDB,
};
