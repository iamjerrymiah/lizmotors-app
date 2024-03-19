import React from 'react'
import { LeftStyle } from './style'
import { Link } from 'react-router-dom'

export default function HeaderLeft() {
    return (
        <LeftStyle>
            <Link to='/'>
                <span className="text-[#fff] md:text-4xl text-2xl font-semibold">Lizmotors</span>
            </Link>
        </LeftStyle>
    )
}
