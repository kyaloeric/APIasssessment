import express, {
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from "express";

import dotenv from "dotenv";
import cors from "cors";
import note_router from "./routes/noteRouter";

dotenv.config();

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.use("/note", note_router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: err.message,
  });
});

app.get("/", (req, res) => {
  res.send({ status: "Ok", message: "Api!" });
});

app.get("*", (req, res) => {
  res.status(404).send({ message: "Page not found" });
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});