import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";

const router = Router();
router.get("/health", (request: Request, response: Response) => {
  return response.json({ ok: true });
});

//User Routes
router.post("/users", new CreateUserController().handle);
router.post("/users/auth", new AuthUserController().handle);
router.get("/users/me", isAuthenticated, new DetailUserController().handle);

export { router };
