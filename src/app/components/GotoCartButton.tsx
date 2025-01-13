'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function GotoCartButton() {
    const router=useRouter();
  return (
    <div>
        <button onClick={()=>
            {
                router.push('/carts')
            }
        }>
        Go to Cart
        </button>
    </div>
  )
}
