import mongoose, { model, Schema } from "mongoose";

const blogSchema = new Schema<TBlog>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  category: { type: String, required: true },
});

export const BlogModel = mongoose.model("Blog", blogSchema);
