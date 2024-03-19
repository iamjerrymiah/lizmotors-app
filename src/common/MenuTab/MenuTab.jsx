import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'


function MenuTab({ 
    tabHead = [],
    tabPanel = [],
    tabCallback,
    center,
    custom,
    defaultIndex,
 }) {
    return (
        <Tabs isLazy variant='unstyled' defaultIndex={0} isFitted={!custom}>
            {center ? 
                <Center>
                    <TabList px={0} pb={[2, 2, 0]}>
                        {tabHead?.map((head, index) => (
                            <Tab
                                fontSize='14px'
                                fontWeight={400}
                                borderRadius='4px'
                                margin={['0 3px', '0 8px']}
                                _selected={{ bgColor: '#000080' }}
                                key={index}
                                minW={['120px', '160px']}
                                onClick={e => tabCallback && tabCallback(e.target.innerText)}
                            >
                                {head}
                            </Tab>
                        ))}
                    </TabList>
                </Center> : 
                <TabList overflowX={[ 'scroll', 'hidden' ]} className='scroll-custom' px={0} pb={[2, 2, 0]}>
                    {tabHead?.map((head, index) => (
                        <Tab
                            key={index}
                            fontSize={['12px', '14px', '14px']}
                            fontWeight={600}
                            _selected={{ fontWeight: 600, bgColor: '#000080', color: '#fff' }}
                            border={custom ? '' : ''}
                            borderRadius='4px'
                            onClick={e => tabCallback && tabCallback(e.target.innerText)}
                            minW={custom ? ['50%', '160px', '250px'] : ['100px']}
                        >
                            {head}
                        </Tab>
                    ))}
                </TabList>
            }

            <TabPanels>
                {tabPanel?.map((panel, index) => (
                    <TabPanel key={index} px={0} pt={[0, 0, 0]}>
                        {panel}
                    </TabPanel>
                ))}
            </TabPanels>
            
        </Tabs>
    )
}

export default MenuTab