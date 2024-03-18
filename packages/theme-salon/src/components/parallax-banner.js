import React from "react";
import {connect, styled} from "frontity";
import {ParallaxBanner} from 'react-scroll-parallax';

const ParaBanner = () => {
    return (
        <>
            <ParallaxBanner
                layers={[{ image: '../assets/background-banner.jpg', speed: -15 }]}
                
            />
            <TextOver>
                <TitleOver>Hello World!</TitleOver>
            </TextOver>
        </>
    );
};

const TextOver = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleOver = styled.h1`
  font-size: 8rem;
  color: white;
  font-weight: 300;
`;

export default connect(ParaBanner);