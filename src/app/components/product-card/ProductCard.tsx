'use client'
import Link from 'next/link';
import React, { use, useEffect ,useState} from 'react';
import { useRouter } from 'next/navigation'

export default function ProductCard(props:any) {
  const router=useRouter();
    var prod=props.product
    const[selectedProduct,setselectedProduct]=useState({});
    const selectprod=()=>{
      console.log("Selecting prod",prod);
      setselectedProduct(prod);
    }
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/1')
    },[])
    
  return (
    <div>
      <button onClick={()=>{
        router.push(`/products/${prod.id}`,{
          scroll:false
        });
      }}>Details</button>
      <button onClick={()=>{
         router.push('/products?title='+prod.title,{
          scroll:true
        })
      }}>
        samePage navigation
      </button>
      <Link href={'/products/'+prod.id}>
         <div onClick={selectprod}>
              <img src={prod.image} width={50}/>
              {
                prod.title
              }
         </div>
         </Link>
    </div>
  )
}

// class 8 code
// import React from 'react'

// export default function ProductCard(props:any) {
//     var prod=props.product
//   return (
//     <div>From ProductCard
//          <div>
//               <img src={prod.image} width={50}/>
//               {
//                 prod.title
//               }
//          </div>
//     </div>
//   )
// }
