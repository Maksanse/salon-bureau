import React, {useEffect} from "react"
import {connect, styled, } from "frontity"
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import Image from "@frontity/components/image"
import Link from "@frontity/components/link";
import ProfileImg from '../assets/fille.jpg';


const More = ({state}) => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return (
        <InView threshold={.2}>
            {({ inView, ref }) => (
                <Cell ref={ref} inView={inView} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                    <TextCell isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>

                        Tous nos produits sont disponibles en plusieurs déclinaisons ou sous différentes formes, et peuvent même être modulables.
                        <br/>

                        Pour les professionnels, nous offrons également un service de conception sur mesure pour des installations très personnalisées.
                        <br/>

                        <strong>Marie</strong>, notre commerciale, est à votre disposition pour répondre à toutes vos questions concernant nos produits, vous fournir des devis, et concevoir des solutions adaptées à vos besoins.

                    </TextCell>
                    <FlexCell>
                        <ContactList>
                            <strong>CONTACTEZ NOTRE COMMERCIALE DÈS MAINTENANT !</strong>
                            <ul>

                                <li><Link link="/contact">Formulaire de contact</Link></li>
                                <li><i>000000000</i></li>
                                <li><i>m-juznic@salon-info.fr</i></li>
                            </ul>
                        </ContactList>
                    </FlexCell>
                    <FlexCell>
                        <Image src={ProfileImg}/>
                        <Name>
                            <span>
                                Marie Juznic
                            </span>
                        </Name>
                    </FlexCell>
                </Cell>
            )}
        </InView>
    )}

export default connect(More)


const Cell = styled.div`
  display: flex;
  margin-left: 1em;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 32px;
  gap: 4rem;
`

const FlexCell = styled.div`
  flex: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
 
  img {
    border: 1px solid rgb(217, 34, 40, 0.6);
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
`

const TextCell = styled.div` 
  flex: 60%;
  font-size: ${(props) => (
    props.isBigScreen ? "1.5rem" :
        props.isDekstop ? "1.2rem" :
            props.isMedium ? "1rem" :
                props.isLaptop ? ".8rem" :
                    props.isSmall ? ".7rem" :
                        props.isMobile ? ".650rem" :
                            "1.5rem")};
  text-align: justify;
  padding: 2rem;
  font-weight: 300;
  line-height: 2rem;
`;

const Name = styled.div`
  span {
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;
  }
`

const ContactList = styled.div`
   display: flex;
   flex-flow: column nowrap;
   
   
   ul {
      padding: 0;
      list-style: square;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    
      li {
        font-weight: 300;
        color: #000;
        
        a {
           color: #000;
           &:hover {
             opacity: .6;
           }
        }
      }
   }
`