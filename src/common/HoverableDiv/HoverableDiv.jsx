import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";


export default function HoverableDiv ({ src, detail }) {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

        <Image
            src={src}
            className="rounded-sm object-cover md:rounded"
            objectFit='cover'
            cursor='pointer'
            w='100%'
            h={[ '150px', '200px' ]}
        />
        {isHovering && <HoverText detail={detail}/>}
      </div>
    );
  };


  export const HoverText = ({ detail }) => {
    return (
        <Box fontSize='12px' color={[ '#fff', '#000' ]}>{detail}</Box>
    );
  };