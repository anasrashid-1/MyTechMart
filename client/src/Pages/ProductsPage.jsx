import React from 'react'
import { products } from '../products'

import {Center, Wrap, WrapItem } from '@chakra-ui/react'
import ProductCard from '../Components/ProductCard'

const ProductsPage = () => {
  return (
    <Wrap spacing={"20px"} justify={"center"} minHeight={"100vh"}>
        {products.map((product) => (
            <WrapItem key={product._id}>
                <Center w={"250px"} h={"550px"} >
                   <ProductCard product = {product}/>
                </Center>
            </WrapItem>
        ))}
    </Wrap>
  )
}

export default ProductsPage
