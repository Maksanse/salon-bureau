import React from "react";
import {connect, styled} from "frontity";
import {useMediaQuery} from "react-responsive";
import MainPic from "../assets/ogi_drive_main.jpeg";
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import FondBureau from '../assets/realisation_arcelor.jpg';

const ParaBanner = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return (
        <HeroDiv>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        {
                            image: FondBureau,
                            speed: -20,
                            opacity: [0.7, 1],

                        },
                        {
                            translateY: [-20, 20],
                            scale: [1.2, 1.5, "easeOutCubic"],
                            opacity: [0.5, 1],
                            children: (
                                <TextOver>
                                    <Heading isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                                        <strong>Absolument</strong> tout sur le mobilier de<br/><strong>bureau</strong>
                                    </Heading>
                                </TextOver>
                            ),
                        },

                    ]}
                    style={{
                        aspectRatio: '2 / 1' ,
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '83vh'
                    }}
                />
            </ParallaxProvider>
        </HeroDiv>
    );
};

const HeroDiv = styled.div`
    padding: 0;
    background-color: #110B11;
    height: 83vh;
    position: relative;
    overflow: hidden;
     
   

`

const TextOver = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
 
`
const Heading = styled.div`
    font-size: 3.500rem;
                    
    @media (min-width: 1824px) {
      font-size: 3.5rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 3.2rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 2rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 1.8rem;
    }
    @media (min-width : 401px) and (max-width: 600px) {
      font-size: 1.7rem;
    }
    @media (max-width: 400px) {
      font-size: 1.6rem;
    }
    font-weight: lighter;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
   
`

export default connect(ParaBanner);