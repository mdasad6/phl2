import type { ServerResponse } from "http";
import type { ProductType } from "../types/Product.type";

export const sendResponse = (
  res: ServerResponse,
  statusCode: number,
  message: string,
  data?: ProductType,
) => {
  const Response = {
    message,
    data,
  };
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(JSON.stringify(Response));
};
