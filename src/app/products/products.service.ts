import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productbody:string)
  {
    const productURL:string='http://localhost:3000/products';
    return this.httpClient.post(productURL, productbody);
  }
  viewProduct(productid:any)
  {
    const productURL:string='http://localhost:3000/products/'+productid;
    return this.httpClient.get(productURL);
  }
  updateProduct(productid:any)
  {
    const productURL:string='http://localhost:3000/products/'+productid;
    return this.httpClient.put(productURL, productid);
  }
  deleteProduct(productid:any)
  {
    const productURL:string='http://localhost:3000/products/'+productid;
    return this.httpClient.delete(productid);
  }
  searchCategoryProduct(categoryID:any)
  {
    const productURL:string='http://localhost:3000/products/category='+categoryID;
    return this.httpClient.get(productURL);
  }
  searchDateProduct(productid:any)
  {
    const productURL:string='http://localhost:3000/products/date='+productid;
    return this.httpClient.get(productURL);
  }
}
