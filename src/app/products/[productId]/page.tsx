
import { ProductsService } from '@/app/services/products-service';
import { Metadata } from 'next';
import React from 'react'

// export const metadata: Metadata = {
//   title: "Product detail page",
// };
export async function generateMetadata(props:any) {
  console.log("generateMetadata",props);
  const productId=props.params.productId;
  var product;
  if(productId)
  {
    product=await ProductsService.getProductsById(productId);
    return{
      title:product.title
    }
  }
  return{
    title:"Prod detail page"
  }
}
export default async function ProductDetail(props:any) {
  console.log(props)
  const productId=props.params.productId;
  var product;
  if(productId)
        {
            product=await ProductsService.getProductsById(productId);
        }
  return (
    <div>
      {product.title}
      <img src={product.image}></img>
      </div>
  )
}

