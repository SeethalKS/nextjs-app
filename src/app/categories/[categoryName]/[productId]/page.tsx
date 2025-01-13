import React from 'react'

export default function CategoriesProducts(props:any) {
    console.log(props)
    const color=props.searchParams.color;
  return (
    <div>Categories Products Color:{color}</div>
  )
}
