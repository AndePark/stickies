
import { fetchData } from "./api";

export function getProducts() {
  return fetchData("products");
}

export function getProductById(id){
    return fetchData(`products/${id}`)
    
}