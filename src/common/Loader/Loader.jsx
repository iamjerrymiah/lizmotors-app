import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function Loader() {
  return (
    <Box
        width='100%'
        height='100%'
        display='flex'
        alignItems='center'
        justifyContent='center'
        position='fixed'
        backgroundColor='#fff'
        top={0}
        left={0}
        zIndex='3000'
    >
        <Spinner
            thickness='10px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#87CEEB'
            width='100px'
            height='100px'
        />
    </Box>
    )
}
