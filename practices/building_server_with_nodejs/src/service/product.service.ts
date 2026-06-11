import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "./src/database/data.json");

export const readProduct = () => {
  // console.log(filePath);
  const products = fs.readFileSync(filePath, "utf-8"); // file-system
  return JSON.parse(products);
};

export const insertProduct = (payload: any) => {
  return fs.writeFileSync(filePath, JSON.stringify(payload));
};
