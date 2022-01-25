import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome to the backend for Darling-Pretty-Photography");
});
app.use(routes);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});

export default app;
