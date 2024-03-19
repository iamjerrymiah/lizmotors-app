import Banner from 'common/Banner/Banner'
import planning from 'assets/planning.jpg'
import React from 'react'
import PageMainContainer from 'common/PageMain/PageMain'
import MenuTab from 'common/MenuTab/MenuTab'
import Internal from '../HomePage/component/Internal'
import PRD from './component/PRD'

export default function Planning() {
    return (
        <PageMainContainer title='Planning' description='Planning'>
            <Banner
                img={planning}
                title='PLANNING'
                overview="A product requirements document (PRD) defines the requirements of a particular product, including the product's purpose, features, functionality, and behavior. It serves as a guide for business and technical teams to help build, launch, or market the product"  
            />
            <MenuTab 
                tabHead={[ 'PRD', 'SPECS' ]}
                tabPanel={[
                    (<PRD />),
                    (<Internal />)
                ]}
            />
        </PageMainContainer>
    )
}
