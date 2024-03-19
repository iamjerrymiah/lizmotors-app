import Banner from 'common/Banner/Banner'
import PageMainContainer from 'common/PageMain/PageMain'
import React from 'react'
import { DefaultTabRows } from '../Planning/component/PRD'
import sales from 'assets/sales.jpg'
import MenuTab from 'common/MenuTab/MenuTab'

export default function Sales() {
    return (
        <PageMainContainer title='Sales/Marketing' description='Sales/Marketing'>
            <Banner
                img={sales}
                title='SALES/MARKETING'
                overview="The automotive industry is undergoing several changes. The impact of global demand and low-cost competitors can be felt by automotive manufacturers, down to the tier three suppliers. The need to press on amidst uncertainties has never been stronger."  
            />
            <MenuTab 
                tabHead={[ 'ONLINE', 'DEALERSHIP' ]}
                tabPanel={[
                    (<DefaultTabRows />),
                    (<DefaultTabRows />)
                ]}
            />
        </PageMainContainer>
    )
}
