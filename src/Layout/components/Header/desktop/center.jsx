import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { spaceBetweenAndCenter } from './style'
import styled from "styled-components";

const Container = styled.div`
    ${spaceBetweenAndCenter};
    width: 45%;
    font-size: 16px;
    font-weight: 400;
    padding-top: 6px;
    color: #fff;
`;
const Link = styled(RouterLink)`
    padding: 10px;
    font-weight: 500;
    font-size: 15px;
    transition: .2s ease-in-out;
    min-width: max-content;
    &:hover {
        color: #87CEEB
    }
`

export const headerLinks = [
    {
        title: "RESEARCH",
        url: "/research",
    },
    {
        title: "PLANNING",
        url: "/planning",
    },
    {
        title: "DESIGNING",
        url: "/designing",
    },
    {
        title: "MANUFACTURING",
        url: "/manufacturing",
    },
    {
        title: "SALES/MARKETING",
        url: "/sales",
    },
]

export default function HeaderCenter() {

    return (
        <React.Fragment>
            <Container>
                {headerLinks.map((link, index) =>
                    <Link
                        to={link.url}
                        key={index}
                    >
                        {link.title}
                    </Link>
                )}
            </Container>
        </React.Fragment>
    )
}
