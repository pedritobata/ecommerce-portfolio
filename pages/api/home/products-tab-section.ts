import { homePageProductsTabSectionHandler } from "@/backend/http-handlers/home";
import { GenericResponseError } from "@/backend/shared/types/error";
import { PaginatedListResponseDTO } from "@/shared/types/dto";
import ProductDTO from "@/shared/types/productDTO";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    PaginatedListResponseDTO<ProductDTO>[] | GenericResponseError
  >
) {
  if (req.method === "GET") {
    try {
      const result = await homePageProductsTabSectionHandler(req.query);

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        message:
          (err as Error).message || "Could not get products for tab section",
      });
    }
  } else {
    res.status(500).json({
      message: "This API cannot mutate products",
    });
  }
}
