import React from 'react'
import { ProductsService } from '../services/products-service';
import ProductCard from '../components/product-card/ProductCard';

export default async function ProductList() {
    var products=await ProductsService.getProducts();
  return (
    <div>ProductList {
        products.map((p:any)=>{
          return(
           <ProductCard key={p.id} product={p}/>
            )
        })
      }</div>
  )
}
