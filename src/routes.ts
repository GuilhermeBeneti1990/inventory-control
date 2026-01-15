import { Router, Request, Response } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { EditProductController } from "./controllers/product/EditProductController";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { ListProductController } from "./controllers/product/ListProductController";
import { RemoveProductController } from "./controllers/product/RemoveProductController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

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

//Product Routes
router.post(
  "/products",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.put(
  "/products/edit",
  isAuthenticated,
  upload.single("file"),
  new EditProductController().handle
);
router.get(
  "/products",
  isAuthenticated,
  new ListProductByCategoryController().handle
);
router.get("/products", isAuthenticated, new ListProductController().handle);
router.delete(
  "/products/remove",
  isAuthenticated,
  new RemoveProductController().handle
);

export { router };
