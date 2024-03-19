import { HStack, IconButton, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './sidebar'
import { Link } from 'react-router-dom'
import { TiThMenu } from 'react-icons/ti';

export default function HeaderLeft() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <React.Fragment>
            <HStack spacing={3}>
                <IconButton
                    variant="unstyled"
                    icon={<TiThMenu size='30px' color='#fff' />}
                    aria-label="open menu"
                    onClick={onOpen}
                />
                <Link to='/'>
                    <span className="text-[#fff] md:text-4xl text-2xl font-semibold">Lizmotors</span>
                </Link>
            </HStack>
            <Sidebar
                show={isOpen}
                toggleSideBar={onClose}
            />
        </React.Fragment>
    )
}
