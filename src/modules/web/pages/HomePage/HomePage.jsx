import MenuTab from 'common/MenuTab/MenuTab'
import PageMainContainer from 'common/PageMain/PageMain'
import React from 'react'
import External from './component/External'
import Internal from './component/Internal'
import Banner from 'common/Banner/Banner'
import banner from 'assets/homeImg.jpg'

export default function HomePage() {
    return (
        <PageMainContainer title='Research' description='Research'>
            <Banner
                img={banner}
                title='RESEARCH'
                overview='Automotive market research supports organizations with the insight and data to conceptualize, manufacture, and customize vehicles to the desires and perceptions of their customers. Research also guides the development of new advertisements, messaging, and marketing materials'    
            />
            <MenuTab 
                tabHead={[ 'EXTERNAL', 'INTERNAL' ]}
                tabPanel={[
                    (<External />),
                    (<Internal />)
                ]}
            />
        </PageMainContainer>
    )
}
