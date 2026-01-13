import express, { Request, Response, NextFunction, response } from "express";
import "express-async-errors";
import { router } from "./routes";
import "dotenv/config";

const app = express();
const PORT = 3333;
app.use(express.json());
app.use(router);

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
