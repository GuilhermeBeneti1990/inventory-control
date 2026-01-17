import express, { Request, Response, NextFunction, response } from "express";
import "express-async-errors";
import { router } from "./routes";
import "dotenv/config";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import path from "path";

const app = express();
const PORT = 3333;
app.use(express.json());
app.use(cors());
app.use("v1", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json({
        error: error.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.get("/terms", (request: Request, response: Response) => {
  return response.json({
    message: "Service Terms",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
