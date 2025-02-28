import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import multer from "multer";
import fs from "fs";
export const sendImageToCloudinary = async (
  imageName: string,
  path: string
): Promise<UploadApiResponse | void> => {
  // Configuration
  cloudinary.config({
    cloud_name: "dgs2ywdd6",
    api_key: "926875478541658",
    api_secret: "GLepioc8wousbFfiMhnvm4H2lyM", // Click 'View API Keys' above to copy your API secret
  });
  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(path, {
      public_id: imageName,
    })
    .catch((error: any) => {
      console.log(error);
    });
  // Remove the file after upload
  fs.unlink(path, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("file is deleted");
    }
  });

  return uploadResult;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
