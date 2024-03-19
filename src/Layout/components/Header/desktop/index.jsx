import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { DesktopOnly } from 'styling/breakpoints';
import { Container } from 'styling/layout';
import HeaderLeft from './left';
import HeaderCenter from './center';
import HeaderRight from './right';


const HeaderStyle = ({children}) => (
    <Flex 
        h='full' 
        w='full' 
        alignItems='center' 
        justifyContent='space-between' 
        py='20px' 
        px={['0px', '20px', '30px', '30px']}
    >
        {children}
    </Flex>
)
const Wrapper = ({ children }) => (
    <Box
        bgColor='#000080'
        pos='fixed'
        top='0px'
        w='full'
        boxShadow='0px 5px 25px rgba(19,85,109,0.4)'
    >
        {children}
    </Box>
)

function DesktopHeader() {

    return (
        <DesktopOnly>
            <Wrapper>
                <Container>
                    <HeaderStyle>
                        <HeaderLeft />
                        <HeaderCenter />
                        <HeaderRight />
                    </HeaderStyle>
                </Container>
            </Wrapper>
        </DesktopOnly>
    )
}

export default DesktopHeader