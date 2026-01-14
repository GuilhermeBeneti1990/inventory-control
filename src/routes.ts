import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";

const router = Router();
router.get("/health", (request: Request, response: Response) => {
  return response.json({ ok: true });
});

//User Routes
router.post("/users", new CreateUserController().handle);
router.post("/users/auth", new AuthUserController().handle);
router.get("/users/me", isAuthenticated, new DetailUserController().handle);
router.delete("/users/remove", new RemoveUserController().handle);

//Category Routes
router.post(
  "/categories",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.put(
  "/categories/edit",
  isAuthenticated,
  new EditCategoryController().handle
);
router.get("/categories", isAuthenticated, new ListCategoryController().handle);
router.delete(
  "/categories/remove",
  isAuthenticated,
  new RemoveCategoryController().handle
);

export { router };
