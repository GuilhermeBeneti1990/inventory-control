import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();
router.get("/health", (request: Request, response: Response) => {
  return response.json({ ok: true });
});

//User Routes
router.post("/users", new CreateUserController().handle);
router.post("/users/auth", new AuthUserController().handle);

export { router };
