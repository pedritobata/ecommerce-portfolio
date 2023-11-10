import { PaginatedListResponseDTO } from "@/shared/types/dto";
import ProductDTO from "@/shared/types/productDTO";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaginatedListResponseDTO<ProductDTO>>
) {
    
}
