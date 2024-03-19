import React from 'react'
import Row from 'common/Row'
import { carInlookData, carLuxuryData, carOutlookData } from 'utils/data'

export default function Internal() {
    return (
        <section className='md:space-y-20'>
            <Row title="Luxury" carData={carLuxuryData} />
            <Row title="Inlook" carData={carInlookData} />
            <Row title="Outlook" carData={carOutlookData} />
        </section>
    )
}
