import { Image } from "@chakra-ui/react"

const Banner = ({b2b, img, title, overview}) => {

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-12 mb-[20px]">
        <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
            <Image 
                src={img}
                objectFit="cover"
                w='100%'
                h={[ '55%', '65%', '70%', '100%' ]}
            />
        </div>
        <h1 
        className="text-2xl lg:text-7xl md:text-4xl font-bold text-[#fff]">
            {title}</h1>
        <p 
        className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-[#fff]">
            {overview}</p>

    </div>
  )
}

export default Banner