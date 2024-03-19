import PageMainContainer from 'common/PageMain/PageMain'
import React from 'react'
import { DefaultTabRows } from '../Planning/component/PRD'
import MenuTab from 'common/MenuTab/MenuTab'
import Banner from 'common/Banner/Banner'
import designing from 'assets/desihning.jpg'

export default function Designing() {
    return (
        <PageMainContainer title='Designing' description='Designing'>
            <Banner
                img={designing}
                title='DESIGNING'
                overview="Small models will be made in 2D and 3D forms to test the car's design. Engineers will test for aerodynamics, safety, hot and cold weather, fuel economy, electrical functionality, cost analysis, and more. Once the design and engineering specs have been approved, then the manufacturing process can begin."  
            />
            <MenuTab 
                tabHead={[ 'HARDWARE', 'SOFTWARE' ]}
                tabPanel={[
                    (<DefaultTabRows />),
                    (<DefaultTabRows />)
                ]}
            />
        </PageMainContainer>
    )
}
