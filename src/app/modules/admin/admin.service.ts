import mongoose from "mongoose";

const getAdminInfoFromDB = async () => {
  const adminCollection = mongoose.connection.db?.collection("admin");
  const adminInfo = await adminCollection?.find().toArray();
  return adminInfo;
};

export const adminServices = { getAdminInfoFromDB };
