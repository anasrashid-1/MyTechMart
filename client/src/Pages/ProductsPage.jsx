import React from 'react'
import { products } from '../products'

import { Center, Wrap, WrapItem } from '@chakra-ui/react'

const ProductsPage = () => {
  return (
    <Wrap spacing={"30px"} justify={"center"} minHeight={"100vh"}>
        {products.map((product) => (
            <WrapItem key={product._id}>
                <Center w={"250px"} h={"550px"}>
                    {product.name}
                    {console.log(product.name)}
                </Center>
            </WrapItem>
        ))}
    </Wrap>
  )
}

export default ProductsPage
