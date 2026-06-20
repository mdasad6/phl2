import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import config from "./config";
import { pool } from "./db";
import { userRoute } from "./modules/user/user.route";

export const app: Application = express();
const port = config.port;

app.use(express.json()); //middleware json data request accept
// app.use(express.text()); //middleware text data request accept
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoute);
