
import { Image } from '@chakra-ui/react';

const Thumbnail = ({ car }) => {
    return (
        <div
          className={`relative h-28 min-w-[180px] cursor-pointer 
          transition duration-200 ease-out md:h-36 md:min-w-[200px] md:hover:scale-105`}
        >
          <Image
            src={car.src}
            className="rounded-sm object-cover md:rounded"
            objectFit='cover'
            h='150px'
          />
        </div>
      )
}

export default Thumbnail