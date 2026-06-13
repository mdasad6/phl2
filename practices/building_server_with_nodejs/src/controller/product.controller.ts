import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { ProductType } from "../types/Product.type";
import { ParseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendResponse";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split("/");
  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  // console.log(id);

  // get all products
  if (url === "/products" && method === "GET") {
    try {
      const products = readProduct();

      return sendResponse(res, 200, "Successfully", products);
    } catch (error) {
      return sendResponse(res, 500, "Something Went Wrong");
    }
  }
  //get signal product
  else if (method === "GET" && id !== null) {
    try {
      const products = readProduct();
      const product = products.find(
        (product: ProductType) => product.id === id,
      );

      if (!product) {
        return sendResponse(res, 404, "Product is not found");
      }

      return sendResponse(res, 200, "Successfully", product);
    } catch (error) {
      return sendResponse(res, 500, "Something Went Wrong");
    }
  }
  // post or create product
  else if (method === "POST" && url === "/products") {
    try {
      const body = await ParseBody(req);
      const products = readProduct();
      const newProduct = {
        id: Date.now(),
        ...body,
      };
      products.push(newProduct);
      insertProduct(products);

      return sendResponse(res, 200, "Product Created Successfully", products);
    } catch (error) {
      return sendResponse(res, 500, "Something Went Wrong");
    }
  }
  // Put or Patch Method
  else if (method === "PUT" && id !== null) {
    try {
      const body = await ParseBody(req);
      const products = readProduct();
      const index = products.findIndex(
        (product: ProductType) => product.id === id,
      );
      if (index < 0) {
        return sendResponse(res, 404, "Product is not found");
      }

      products[index] = { id: products[index].id, ...body };
      insertProduct(products);

      return sendResponse(
        res,
        200,
        "Product Updated Successfully",
        products[index],
      );
    } catch (error) {
      return sendResponse(res, 500, "Something Went Wrong");
    }
  }
  // Delete Method
  else if (method === "DELETE" && id !== null) {
    try {
      const products = readProduct();
      const index = products.findIndex(
        (product: ProductType) => product.id === id,
      );

      if (index < 0) {
        return sendResponse(res, 404, "Product is not found");
      }

      products.splice(index, 1);
      insertProduct(products);

      return sendResponse(res, 200, "Product Deleted Successfully");
    } catch (error) {
      return sendResponse(res, 500, "Something Went Wrong");
    }
  }
};
