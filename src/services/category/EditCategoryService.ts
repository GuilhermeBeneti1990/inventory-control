import { prismaClient } from "../../prisma";
import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";

class EditCategoryService {
  async execute({ name, category_id }: EditCategoryRequest) {
    if (category_id === " " || name === " " || !category_id || !name) {
      throw new Error("Invalid arguments to edit category!");
    }

    const categoryEdited = await prismaClient.category.update({
      where: {
        id: category_id,
      },
      data: {
        name,
      },
    });

    return categoryEdited;
  }
}

export { EditCategoryService };
