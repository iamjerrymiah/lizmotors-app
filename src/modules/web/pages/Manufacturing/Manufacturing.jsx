import Banner from 'common/Banner/Banner'
import MenuTab from 'common/MenuTab/MenuTab'
import PageMainContainer from 'common/PageMain/PageMain'
import React from 'react'
import { DefaultTabRows } from '../Planning/component/PRD'
import manufacturing from 'assets/manufacturing.jpg'

export default function Manufacturing() {
    return (
        <PageMainContainer title='Manufacturing' description='Manufacturing'>
            <Banner
                img={manufacturing}
                title='MANUFACTURING'
                overview="Manufacturing cars involve materials such as steel, glass, plastic, rubber, textiles, and electronics, and knowledge of logistics and materials planning, tool and test design, robotics, manufacturing systems, final assembly tests, packaging, and shipping."  
            />
            <MenuTab 
                tabHead={[ 'MATERIAL', 'PRODUCTION' ]}
                tabPanel={[
                    (<DefaultTabRows />),
                    (<DefaultTabRows />)
                ]}
            />
        </PageMainContainer>
    )
}
