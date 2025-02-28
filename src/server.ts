import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://ahosanul-portfolio:stRIEpjKAJmluPVS@cluster0.jhmpwvf.mongodb.net/ahosanul-portfolio?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(5000, () => {
      console.log(`Example app listening on port 5000`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
