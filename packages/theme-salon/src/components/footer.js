import React, {useEffect} from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link";
import Image from "@frontity/components/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTiktok, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {InView} from "react-intersection-observer"
import LogoFooter from "../assets/Vector.svg"
import {useMediaQuery} from "react-responsive";
import ReactCountryFlag from "react-country-flag"


const Footer = ({state, libraries}) => {

    /*useEffect(() => {
        async function fetchPages() {
            const response = await libraries.source.api.get({
                endpoint: "pages",
            });
            const pageData = await libraries.source.populate({
                response,
                state,
            });
        }
        fetchPages();
    }, []);*/

    const contactPage = state.source.page[17];

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return(
        <InView threshold={.1}>
            {({ inView, ref }) => (
            <FooterStyled ref={ref} inView={inView}>
                <Wrapper>
                    <WrapperTop isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <WrapperSets>
                        <WrapperInline>

                            <LinksList isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                                <LinkTitle isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}><span> BUREAUX </span></LinkTitle>
                                <ul>
                                    <li>
                                        <Link link="/">Tout les bureaux</Link>
                                    </li>
                                    <li>
                                        <Link link ="/blog">Nos collections</Link>
                                    </li>
                                    <li>
                                        <Link link="/a-propos">Nouveautés</Link>
                                    </li>
                                </ul>
                            </LinksList>


                            <LinksList isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                                <LinkTitle isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}><span> NOTRE UNIVERS </span></LinkTitle>
                                <ul>
                                    <li>
                                        <Link link="/">Le Mobilier</Link>
                                    </li>
                                    <li>
                                        <Link link ="/blog">L'Expertise</Link>
                                    </li>
                                    <li>
                                        <Link link="/a-propos">Notre histoire</Link>
                                    </li>
                                </ul>
                            </LinksList>

                        </WrapperInline>
                        <WrapperInline>
                            <LinksList isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                                <LinkTitle isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}><span> SERVICES </span></LinkTitle>
                                <ul>
                                    <li>
                                        <Link link="/contact">Conception</Link>
                                    </li>
                                    <li>
                                        <Link link ="/blog">Installation</Link>
                                    </li>
                                    <li>
                                        <Link link="/a-propos">Suivi</Link>
                                    </li>
                                </ul>
                            </LinksList>


                            <LinksList isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                                <LinkTitle isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}><span> L'ENTREPRISE </span></LinkTitle>
                                <ul>
                                    <li>
                                        <Link link="/contact">A propos</Link>
                                    </li>
                                    <li>
                                        <Link link="/">Link</Link>
                                    </li>
                                    <li>
                                        <Link link="/a-propos">Nos partenaires</Link>
                                    </li>
                                </ul>
                            </LinksList>
                        </WrapperInline>
                        </WrapperSets>
                        {isLaptop || isSmall || isMobile? null : (
                        <Logo isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <Image src={LogoFooter} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}/>
                        </Logo>
                        )}
                    </WrapperTop>
                    <WrapperBottom>
                        <SocialList>

                            <ul>
                            <li>
                                <SocialLinks link="#">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </SocialLinks>
                            </li>
                            <li>
                                <SocialLinks link="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </SocialLinks>
                            </li>
                            <li>
                                <SocialLinks link="#">
                                    <FontAwesomeIcon icon={faTiktok} />
                                </SocialLinks>
                            </li>
                            <li>
                                <SocialLinks link="#">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </SocialLinks>
                            </li>
                            </ul>
                        </SocialList>
                        <Legality isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>

                                <ul>
                                    <li>
                                        <Link>Utilisation des cookies</Link>
                                    </li>
                                    <li>
                                        <Link link="/mentions-legales/">Mentions Légales</Link>
                                    </li>
                                    <li>
                                        <Link>Données personnelles</Link>
                                    </li>
                                </ul>
                                {(isMobile || isSmall || isLaptop) && (

                                        <Image src={LogoFooter} width="25%"/>

                                )}
                                {(isMobile || isSmall || isLaptop) && (
                                    <CreditsBis>

                                        <ReactCountryFlag countryCode="FR" title="Drapeau français"/>
                                        &nbsp;
                                        <i>2024 - Salon Bureau ©</i>
                                    </CreditsBis>
                                )}
                        </Legality>
                        {(isMobile || isSmall || isLaptop) ? null : (
                        <Credits>


                                <>
                                    <ReactCountryFlag countryCode="FR" title="Drapeau français"/>
                                    &nbsp;
                                    <i>2024 - Salon Bureau ©</i>
                                </>

                        </Credits>)}
                    </WrapperBottom>
                </Wrapper>
            </FooterStyled>
                )}
        </InView>
    )
}

export default connect(Footer)


const FooterStyled = styled.div`
  width: 100%;
  background-color: #42494e;
  transform: translateY(${({ inView }) => (inView ? "0" : "70px")});
  transition: 1s cubic-bezier(.5, 0, 0, 1);
  opacity: ${({inView}) => (inView ? "1":"0")};
`;

const Wrapper = styled.div`
  z-index: 1;   
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const WrapperTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  nav {
    width: 20%;
  }
`;

const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding-top: 20px;
  align-items: center;
`;

const WrapperInline = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 4rem;
`

const WrapperSets = styled.div`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const LinksList = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: left;
  padding: .5rem;
    
  ul {
    display: flex;
    margin-top: 0;
    flex-flow: column nowrap;
    align-items: flex-start;
    padding-left: 0;
    list-style:none;
  }
  
  li {
    line-height: 1.7;    
  }
  
  a {
    color: #fff;
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
    font-weight: 200;
    font-size:${(props) => (props.isBigScreen ? "1.5em" : props.isDekstop ? "1.3em" : props.isMedium ? "1.2em" : props.isLaptop ? "1em" : props.isSmall ? ".9em" : props.isMobile ? ".8em" : "1.5em")};
    white-space: nowrap;

    &:hover {
      opacity: .5;
    }
  }
`;

const LinkTitle = styled.h3`
  
  font-size: ${(props) => (props.isBigScreen ? "1.5em" : props.isDekstop ? "1.3em" : props.isMedium ? "1.1em" : props.isLaptop ? ".9em" : props.isSmall ? ".7em" : props.isMobile ? ".6em" : "1.5em")};
  span {
    color: #fff;
    white-space: nowrap;
    font-weight: lighter;
    text-transform: uppercase;
  }
`;

const SocialList = styled.div`
  
  ul {
    list-style-type: disc;
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    padding-left: 1rem;
  }
  
  li {
    display: inline-block;
    margin: 1rem 1rem;
  }
`;

const SocialLinks = styled(Link)`
  text-align: center;
  padding: 10px;
  position: relative; 
  display: block;
  width: 30px;
  height: 30px;
  line-height: 33px;
  background: #42494e;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  font-size: 20px;
  color: #FFF;
  transition: .5s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #C6C6C6;
    transition: .5s;
    transform: scale(.9);
    z-index: -1;
  }  
  
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 5px #C6C6C6;
  }
  
  &:hover {
    color: #C6C6C6;
    box-shadow: 0 0 5px #C6C6C6;
    text-shadow: 0 0 5px #C6C6C6;
  }  
`;

const Credits = styled.div`   
  white-space: nowrap;
  text-align: left;
  margin-right: 1rem;   
  font-family: HelveticaNeue;
  font-weight: 100;
  font-size: 1.2rem; 
  color: lightgrey;
`;

const Legality = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items:center;
  text-align: center;
  justify-content: space-evenly;


  
  a {
    padding: 0;
    flex-basis: 33%;
    color: #fff;
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
    font-weight: 300;
    font-size: ${(props) => (props.isBigScreen || props.isDekstop || props.isMedium ? "1.3rem" : props.isLaptop ? "1.2rem" : props.isSmall ? "1rem" : props.isMobile ? ".9rem" : "1.3rem")};
    white-space: pre-wrap;
    display: inline;

    &:hover {
      opacity: .5;
    }
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: ${(props) => (props.isBigScreen ? "50px" : props.isDekstop ? "40px" : props.isMedium ? "30px" : props.isLaptop ? "20px" : props.isSmall ? "10px" : props.isMobile ? "7px" : "50px")};
    flex-flow: ${(props) => props.isMobile || props.isSmall || props.isLaptop ? "column nowrap" : "row wrap"};
    justify-content: start;
    padding-left: 10px;
    
  }
  
  li {
    justify-content: start;
    padding: 0 1em 0;
  }
  

  
  img {
    padding: 1rem;
    text-align: center;
  }
 
`;

const Logo = styled.div`
  flex: 20% 0 0;
  text-align: center;
  display: ${(props) => (props.isMobile && "none")};

  
  img {
    width: ${(props) => (props.isBigScreen || props.isDekstop ? "50%" : props.isMedium ? "80%" : "70%")};
    text-align: center;
    padding-top: 2rem;
  } 
`;

const CreditsBis = styled.div`
    margin: 2rem 2rem 0 2rem;
    i {
      color: lightgrey;
      font-weight: 100;
      
    }
`

