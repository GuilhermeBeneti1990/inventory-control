import { prismaClient } from "../../prisma";

interface ListProductByCategoryIdRequest {
  category_id: string;
}

class ListProductByCategoryService {
  async execute({ category_id }: ListProductByCategoryIdRequest) {
    const productsByCategory = await prismaClient.product.findMany({
      where: {
        category_id,
      },
    });

    return productsByCategory;
  }
}

export { ListProductByCategoryService };
