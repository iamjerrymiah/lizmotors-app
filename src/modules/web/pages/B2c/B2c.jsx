import React from 'react'
import banner from 'assets/homeImg.jpg'
import PageMainContainer from 'common/PageMain/PageMain'
import MenuTab from 'common/MenuTab/MenuTab'
import Banner from 'common/Banner/Banner'
import AllB2C from './component/AllB2C'

import online1 from 'assets/online1.jpeg'
import online2 from 'assets/homeImage.png'
import online3 from 'assets/online3.jpeg'
import interview1 from 'assets/interview1.jpeg'
import interview2 from 'assets/planning.jpg'
import interview3 from 'assets/interview3.jpeg'
import publicData1 from 'assets/publicData1.jpeg'
import publicData2 from 'assets/desihning.jpg'
import publicData3 from 'assets/publicData3.jpeg'
import health1 from 'assets/manufacturing.jpg'
import health2 from 'assets/health2.jpeg'
import health3 from 'assets/health3.jpeg'

const online = "The business-to-consumer (B2C) model is a widespread form of commerce, where businesses sell products or services directly to individuals. The structure underpins everyday transactions, from buying groceries to online shopping."
const onlineData = [
    {src: online2, detail: online},
    {src: online1, detail: online},
    {src: online3, detail: online},
]
const interview = "B2C stands for business-to-consumer and is a business model that involves selling products or services directly to consumers. These consumers are typically individuals or groups."
const interviewData = [
    {src: interview2, detail: interview},
    {src: interview1, detail: interview},
    {src: interview3, detail: interview},
]
const publics = "B2C stands for business to consumer. There is no in-between in this form of marketing. The aim of having a B2C dataset is to be able to contact potential customers directly. Most often, B2C data is used for online retail, so is sometimes referred to as retail eCommerce."
const publicData = [
    {src: publicData2, detail: publics},
    {src: publicData1, detail: publics},
    {src: publicData3, detail: publics},
]
const health = "B2C is a strategy where a business makes a commercial transaction with the end customer, e.g. a telemonitoring center with a patient. The activities performed in the B2C model for telemonitoring patients with chronic diseases are different, as are the stakeholders, the structure, and the governance."
const healthData = [
    {src: health1, detail: health},
    {src: health2, detail: health},
    {src: health3, detail: health},
]

export default function B2c() {
    return (
        <PageMainContainer title='B2C' description='B2C'>
            <Banner
                img={banner}
                title='BUSINESS TO COSUMER'
                overview='The term business-to-consumer (B2C) refers to the process of selling products and services directly between a business and consumers who are the end-users of its products or services. An example of B2C includes retail sales, as the items sold are directly targeted and consumed by one individual person.'    
            />
            <MenuTab 
                tabHead={[ 'ONLINE', 'INTERVIEW', 'DATA', 'HEALTH' ]}
                tabPanel={[
                    (<AllB2C data={onlineData}/>),
                    (<AllB2C data={interviewData} />),
                    (<AllB2C data={publicData} />),
                    (<AllB2C data={healthData} />),
                ]}
            />
        </PageMainContainer>
    )
}
