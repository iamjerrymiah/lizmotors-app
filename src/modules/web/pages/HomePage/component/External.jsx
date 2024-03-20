import Row from 'common/Row'
import React from 'react'
import { Link } from 'react-router-dom'
import { carInlookData, carLuxuryData, carOutlookData } from 'utils/data'


export default function External() {
    return (
        <section className='md:space-y-20'>
            <Link to='/research/b2c'>
                <button className="w-[100%] rounded bg-[#808080] text-[#fff] py-3 mb-3 md:mt-3 m-0">
                    Business-to-customer(B2C)
                </button>
            </Link>
            <Rows />
        </section>
    )
}


export function Rows(){
    return(
        <>
            <Row title="Inlook" carData={carInlookData} />
            <Row title="Outlook" carData={carOutlookData} />
            <Row title="Luxury" carData={carLuxuryData} />
        </>
    )
}