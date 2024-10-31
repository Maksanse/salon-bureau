import React from "react"
import {connect, keyframes, styled} from "frontity"
import BannerBg from "../assets/banner.jpg"
import Image from "@frontity/components/image";
import {InView} from "react-intersection-observer";


const Banner = () => {



    return (
        <FadeBanner>


            <InView threshold={.7}>
                {({ inView, ref }) => (
                    <Over ref={ref} inView={inView}>
                        <TextOver>
                            <h2>SALON</h2>
                            <p>Spécialiste du mobilier professionel</p>
                        </TextOver>
                        <ButtonOver>
                            <a href="#"> Nous découvrir </a>
                        </ButtonOver>
                    </Over>
                )}
            </InView>
        </FadeBanner>
    )}

export default connect(Banner)


const fadeColor = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;


const FadeBanner = styled.div`
  animation: ${fadeColor} .9s cubic-bezier(.5, 0, 0, 1);
  position: relative;
  width: 100%;
  text-align: left;
  height: 80vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, transparent, rgba(255, 255, 255, .99));
  } 
`;

const Over = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 0px;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: absolute; 
  top: 80%; 
  left: 0;
  
  @media (max-width: 600px) {
    flex-flow: row wrap;
    gap: 0.7rem;
  }


  transform: translateY(-50%);
  transition: 1s cubic-bezier(.5, 0, 0, 1);
  opacity: ${({inView}) => (inView ? "1":"0")};
  
`

const TextOver = styled.div` 
  width: 70%;
  padding-left: .5rem;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    white-space: null;
    text-align: left;
    font-weight: lighter;
    font-size: 4rem;
    @media (min-width: 1824px) {
        font-size: 4rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
        font-size: 3.2rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
        font-size: 2.5rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
        font-size: 2rem;
    }
    @media (min-width: 401px) and (max-width: 600px) {
        font-size: 1.5rem;
    }
    @media  (max-width: 400px) {
        font-size: 1.375rem;
    }
    font-family: Helvetica Neue;
    letter-spacing: 0;
    margin: 0;
    
    @media (max-width: 799px) {
        -webkit-line-clamp: 2;
    }
  }
  
  h2 {
    white-space: nowrap;
    font-size: 4.375rem;
    @media (min-width: 1824px) {
        font-size: 4.375rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
        font-size: 3.75rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
        font-size: 3rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
        font-size: 2.5rem;
    }
    @media (min-width: 401px) and (max-width: 600px) {
        font-size: 2.1875rem;
    }
    @media  (max-width: 400px) {
        font-size: 1.7rem;
    }
    
    letter-spacing: 0;
    margin: 0;
  }
  
`;

const ButtonOver = styled.div`
  
  justify-self: flex-end;
  align-self: center;
  padding-left: .5rem;

  
  
  a {
    text-decoration: none;
    white-space: nowrap;
    margin: auto;
    margin-right: 1.75em;
    background: transparent;
    backface-visibility: hidden;
    border-style: solid;
    border-width: .125rem;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: 1.750rem;
    
    @media (min-width: 1824px) {
        font-size: 1.750rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
        font-size: 1.500rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
        font-size: 1.250rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
        font-size: 0.9rem;
    }
    @media (min-width: 401px) and (max-width: 600px) {
        font-size: 0.7rem;
    }
    @media  (max-width: 400px) {
        font-size: 0.550rem;
    }
    
    padding: 1rem 1.250rem;
    
    @media (min-width: 800px) {
        padding: 1rem 1.250rem;
    }
    
    @media (min-width: 601px) and (max-width: 799px) {
        padding: .750rem 1rem;
    }
    
    @media (min-width: 401px) and (max-width: 600px) {
        padding: 0.600rem 0.850rem;
    }
    
    @media (max-width: 400px) {
        padding: 0.500rem 0.750rem;
    }
    
    position: relative;
    transform: translateZ(0) scale(1);
    transition: transform .2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

  &:not(:disabled):hover {
    transform: scale(1.05);
    color: #fff;
  }
  
  &:not(:disabled):hover:active {
    transform: scale(1.05) translateY(.125rem);
  }

  &:focus {
    outline: 0 solid transparent;
  }

  &:focus:before {
    content: "";
    left: calc(-1*.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1*.375rem);
    transition: border-radius;
    user-select: none;
  }

  &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }

  &:focus:not(:focus-visible):before {
    border-width: 0;
  }

  &:not(:disabled):active {
    transform: translateY(.125rem);
  }
`;


