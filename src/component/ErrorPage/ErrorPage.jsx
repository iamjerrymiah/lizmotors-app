import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <VStack minH='95vh' alignItems='center' justifyContent='center' spacing={4}>
            <Text as='h1' fontWeight={800} fontSize={['40px', '80px']}>404: Oops</Text>
            <Text fontSize={['16px', '25px']} m='0px'>Page does not exist</Text>
            <Link to='/'>
                <Button>Go Home</Button>
            </Link>
        </VStack>
    )
}
