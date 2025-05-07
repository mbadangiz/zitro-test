import { IN_Response } from "@/core/types/interfaces";

export async function getData(): Promise<IN_Response> {
  const res = await fetch("http://localhost:3000/product.json");
  return res.json();
}
