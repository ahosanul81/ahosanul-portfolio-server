import catchAsync from "../../utils/catchAsync";
import { adminServices } from "./admin.service";

const getAdminInfo = catchAsync(async (req, res) => {
  const result = await adminServices.getAdminInfoFromDB();
  res.status(200).json({
    success: true,
    status: 200,
    message: "Fetched admin info Successfully",
    data: result,
  });
});
export const adminControllers = { getAdminInfo };
