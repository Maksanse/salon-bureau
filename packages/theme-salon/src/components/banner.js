import React from "react"
import {connect, keyframes, styled} from "frontity"
import BannerBg from "../assets/banner.jpg"
import Image from "@frontity/components/image";
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";


const Banner = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return (
        <FadeBanner>


            <InView threshold={.7}>
                {({ inView, ref }) => (
                    <Over ref={ref} inView={inView} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <TextOver isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <h2>SALON.</h2>
                            <p>Spécialiste du mobilier professionelle</p>
                        </TextOver>
                        <ButtonOver isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
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
  gap: ${(props) => (props.isSmall || props.isMobile ? ".7rem": "0")};
  flex-flow: ${(props) => (props.isMobile || props.isSmall ? "row wrap" : "row nowrap")};
  justify-content: space-between;
  position: absolute; 
  top: 80%; 
  left: 0;


  transform: translateY(-50%);
  transition: 1s cubic-bezier(.5, 0, 0, 1);
  opacity: ${({inView}) => (inView ? "1":"0")};
  
`

const TextOver = styled.div` 
  width: 70%;
  padding-left: .5rem;

  p {
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.isLaptop || props.isSmall || props.isMobile ? "2" : "1")};
    white-space: ${(props) => (props.isLaptop || props.isSmall || props.isMobile ? null : null)};
    text-align: left;
    font-weight: lighter;
    font-size: ${(props) => (
    props.isBigScreen ? "4rem" :
    props.isDekstop ? "3.2rem" :
    props.isMedium ? "2.5rem" :
    props.isLaptop ? "2rem" :
    props.isSmall ? "1.5rem" :
    props.isMobile ? "1.375rem" :
    "4rem")};
    font-family: Helvetica Neue;
    letter-spacing: 0;
    margin: 0;
  }
  
  h2 {
    white-space: nowrap;
    font-size: ${(props) => (
    props.isBigScreen ? "4.375rem" :
    props.isDekstop ? "3.75rem" :
    props.isMedium ? "3rem" :
    props.isLaptop ? "2.5rem" :
    props.isSmall ? "2.1875rem" :
    props.isMobile ? "1.7rem" :
    "4.375rem")};
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
    font-size: ${(props) => (
    props.isBigScreen ? "1.750rem" :
    props.isDekstop ? "1.500rem" :
    props.isMedium ? "1.250rem" :
    props.isLaptop  ? ".9rem" :
    props.isSmall ? ".7rem" :
    props.isMobile ? ".550rem" :
    "1.750rem")};
    padding: ${(props) => (props.isBigScreen || props.isDekstop || props.isMedium ? "1rem 1.250rem" : props.isLaptop ? ".750rem 1rem" : props.isSmall ? ".6rem .850rem" : props.isMobile ? ".5rem .750rem" : "1rem 1.250rem")};
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


