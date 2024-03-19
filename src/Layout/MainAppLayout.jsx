import React from "react"
import Header from "./components/Header"
import { Box } from "@chakra-ui/react"


const ChildrenWrapper = ({ children }) => (
    <Box mt={['55px', '55px', '55px', '58px']}>
        {children}
    </Box>
)

export function MainAppLayout(props) {

    return(
        <React.Fragment>
            <Header />
            <ChildrenWrapper>
                {props.children}
            </ChildrenWrapper>
        </React.Fragment>
    )
}