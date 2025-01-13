import Link from 'next/link'
import React from 'react'

export default function Cart() {
  return (
    <div>Cart
       <Link href="/products#recommended">Go to recommended Section</Link>
    </div>
  )
}
