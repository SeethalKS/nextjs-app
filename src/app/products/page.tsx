import React, { Suspense } from 'react'

import GotoCartButton from '../components/GotoCartButton';
import Link from 'next/link';
import ProductList from '../components/ProductList';
import { Metadata } from 'next';
import { cookies,headers} from 'next/headers'

// async function getProducts(){
//   var productsResp=await fetch("https://fakestoreapi.com/products");
//   var products=await productsResp.json();
//   return products;
// }--removed from class topic 9
export const metadata: Metadata = {
  title: "Product list page",
};
export default async function Products(props:any) {
  console.log("Products page executed",props);
  
const cookielist = await cookies();
const tokencookie = cookielist.get('authToken');
console.log("Token cookie",tokencookie,tokencookie?.value);

const headerslist= await headers();
const referer = headerslist.get('referer');
console.log("referers",referer);
console.log(headerslist.get('User-Agent'));
console.log(headerslist.get('Host'));


  return (
    <div>This is Products page
      <h3>Product List</h3>
      <GotoCartButton />
      <Link href="#recommended">Go to recommended Section</Link>
      <div>
        <Suspense fallback={<span style={{color:'red'}}>Loading.....</span>}>
          <ProductList />
        </Suspense>
      </div>
      <h3 id="recommended">Recommended Section</h3>
    </div>

  )
}
