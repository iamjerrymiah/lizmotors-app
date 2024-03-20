import { SimpleGrid } from '@chakra-ui/react'
import HoverableDiv from 'common/HoverableDiv/HoverableDiv'


export default function AllB2C({ data }) {

    return (
        <section>
            <SimpleGrid columns={[ 1, 1, 3 ]} spacing={4} mt={[ 4, 4, 24, 4 ]}>
                {data.map((d, i) => (
                    <HoverableDiv 
                        src={d.src}
                        detail={d.detail}
                        key={i}
                    />
                ))}

            </SimpleGrid>
        </section>
    )
}



  

