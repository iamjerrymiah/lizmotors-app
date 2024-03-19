import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack } from '@chakra-ui/react'

function HorizontalTab({
    tabHead = [],
    tabPanel = []
}) {
    return (
        <Tabs isLazy>
            <Stack direction='row' spacing={4}>
                <TabList
                    backgroundColor='#fff'
                    flexDirection='column'
                    boxShadow='0px 4px 20px rgba(0, 0, 0, 0.15)'
                    width={['100px', '300px']}
                    height={{
                    base: '190px',
                    md: '270px',
                    lg: '230px'
                }}>
                    {tabHead
                        ?.map((head, index) => (
                            <Tab
                                my={['', '15px']}
                                fontSize={['9.5px', '12px', '14px']}
                                color="#686969"
                                _selected={{
                                bg: '#FFFFFF',
                                borderLeft: '3px solid #009FA9'
                            }}
                                key={index}>
                                {head}
                            </Tab>

                        ))}
                </TabList>

                <TabPanels>
                    {tabPanel
                        ?.map((panel, index) => (
                            <TabPanel key={index}>
                                {panel}
                            </TabPanel>
                        ))}
                </TabPanels>
            </Stack>
        </Tabs>
    )
}

export default HorizontalTab