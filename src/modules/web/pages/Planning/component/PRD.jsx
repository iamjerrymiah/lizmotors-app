import React from 'react'
import Row from 'common/Row'
import { carInlookData, carLuxuryData, carOutlookData } from 'utils/data'

export default function PRD() {
    return (
        <section className='md:space-y-20'>
            <Row title="Inlook" carData={carInlookData} />
            <Row title="Outlook" carData={carOutlookData} />
            <Row title="Luxury" carData={carLuxuryData} />
        </section>
    )
}

export function DefaultTabRows(){
    return(
        <section className='md:space-y-20'>
            <Row title="Inlook" carData={carInlookData} />
            <Row title="Outlook" carData={carOutlookData} />
            <Row title="Luxury" carData={carLuxuryData} />
        </section>
    )
}
