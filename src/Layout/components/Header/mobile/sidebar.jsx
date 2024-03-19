import React from 'react'
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from "@chakra-ui/react";
import { headerLinks } from '../desktop/center';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const PageLink = styled(Link)`
    padding: 10px;
    transition: .2s ease-in-out;
    color: #fff;
    &:hover {
        color: #87ceeb;
    }
`

const NavLinks = ({ items = [], toggleSideBar }) => {
    return (
        <React.Fragment>
            <VStack spacing={4} fontWeight={600}>
                {items.map(({ title, url }, index) =>
                    <PageLink
                        to={url}
                        key={index}
                    >
                        {title}
                    </PageLink>
                )}
            </VStack>
        </React.Fragment>
    )
}


const Content = ({  toggleSideBar }) => {
    return (
        <VStack h='90%' py={10} justify='space-between'>
            <Link to='/'>
                <span className="text-[#fff] md:text-4xl text-2xl font-semibold">Lizmotors</span>
            </Link>
            <NavLinks
                items={headerLinks}
                toggleSideBar={toggleSideBar}
            />
        </VStack>
    )
};


export default function Sidebar({show, toggleSideBar}) {
    return (
        <Drawer isOpen={show} onClose={toggleSideBar} placement="left" size='full'>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody bgColor='#000080'>
                <Content
                    toggleSideBar={toggleSideBar}
                />
            </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
