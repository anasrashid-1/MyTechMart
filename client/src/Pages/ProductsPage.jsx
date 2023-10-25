import React from 'react'
import { products } from '../products'

import { Text,Center, Wrap, WrapItem } from '@chakra-ui/react'

const ProductsPage = () => {
  return (
    <Wrap spacing={"30px"} justify={"center"} minHeight={"100vh"}>
        {products.map((product) => (
            <WrapItem key={product._id}>
                <Center w={"250px"} h={"550px"}>
                    <img src={product.image}/>
                    {/* <Text>{product.name}</Text> */}
                </Center>
            </WrapItem>
        ))}
    </Wrap>
  )
}

export default ProductsPage
