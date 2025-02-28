import express, { Application } from "express";
import cors from "cors";
import blogRouter from "./app/modules/blog/blog.route";
import projectRouter from "./app/modules/project/project.route";
import adminRoute from "./app/modules/admin/admin.route";
const app: Application = express();

// parser
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

// applicatio routes
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/admin", adminRoute);

app.get("/", (req, res) => {
  res.send("Ahosanul portfolio");
});

export default app;
