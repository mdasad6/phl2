import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { ProductType } from "../types/Product.type";
import { ParseBody } from "../utility/parseBody";

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
    const products = readProduct();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Successfully", data: { products } }));
  }
  //get signal product
  else if (method === "GET" && id !== null) {
    const products = readProduct();
    const product = products.find((product: ProductType) => product.id === id);
    if (!product) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product is not found",
        }),
      );
      return;
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Successfully", data: { product } }));
  }
  // post or create product
  else if (method === "POST" && url === "/products") {
    const body = await ParseBody(req);
    const products = readProduct();
    const newProduct = {
      id: Date.now(),
      ...body,
    };
    products.push(newProduct);
    insertProduct(products);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product Created Successfully",
        data: { products },
      }),
    );
  }
  // Put or Patch Method
  else if (method === "PUT" && id !== null) {
    const body = await ParseBody(req);
    const products = readProduct();
    const index = products.findIndex(
      (product: ProductType) => product.id === id,
    );
    if (index < 0) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product is not found",
        }),
      );
      return;
    }

    products[index] = { id: products[index].id, ...body };
    insertProduct(products);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product Updated Successfully",
        data: products[index],
      }),
    );
  }
  // Delete Method
  else if (method === "DELETE" && id !== null) {
    const products = readProduct();
    const index = products.findIndex(
      (product: ProductType) => product.id === id,
    );
    if (index < 0) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Product is not found",
        }),
      );
      return;
    }
    products.splice(index, 1);
    insertProduct(products);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product Deleted Successfully",
      }),
    );
  }
};
