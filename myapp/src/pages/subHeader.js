import bannerImage from "../Assets/food-banner.png"
import { Box } from "@chakra-ui/react"

export default function SubHeader(params) {


    return (
        <>
            <Box className="main-banner">
                <Box className="sub-banner" >
                    <Box className= "banner-content"> Welcome <span style ={{color:"black", fontWeight:"700"}}>Kana</span> , You are at the right place to have a delicious homely cooked food. You are one click away from your favourite dishes.</Box>
                    
                </Box>
                <Box display="flex" justifyContent="center">
                    <img src={bannerImage} alt="banner-image" className="banner-image" />
                </Box>
            </Box>

        </>
    )

}