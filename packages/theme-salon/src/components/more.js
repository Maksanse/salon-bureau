import React, {useEffect} from "react"
import {connect, styled, } from "frontity"
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import Image from "@frontity/components/image"
import Link from "@frontity/components/link";
import ProfileImg from '../assets/fille.jpg';


const More = ({state}) => {


    return (
        <InView threshold={.2}>
            {({ inView, ref }) => (
                <Cell ref={ref} inView={inView}>
                    <TextCell>
                        Tous nos produits se déclinent en plusieurs configurations et coloris, et peuvent même être modulables. Pour les professionnels, nous proposons également un service de conception sur mesure pour des installations personnalisées.
                        <strong>Marie</strong>, notre commerciale, est à votre disposition pour répondre à toutes vos questions concernant nos produits, vous fournir des devis, et concevoir des solutions adaptées à vos besoins.
                    </TextCell>
                    <FlexCell>
                        <ContactList>
                            <strong>CONTACTEZ NOTRE COMMERCIALE DÈS MAINTENANT !</strong>
                            <ul>
                                <li><Link link="/contact">Formulaire de contact</Link></li>
                                <li><i>06 77 65 28 05</i></li>
                                <li><i>contact@salon-info.fr</i></li>
                            </ul>
                        </ContactList>
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
  margin-top 20px;
  padding: 32px;
  gap: 4rem;
  @media (max-width: 1223px) {
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;
    padding: 16px;
  }
  
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
  
  @media (max-width: 1223px) {
    flex: 1;
    width: 100%;
  }
`

const TextCell = styled.div` 
  flex: 60%;
  font-size: 1.5rem;
                            
  @media (min-width: 1824px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 1.2rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 1rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 0.8rem;
    }
    @media (min-width : 401px) and (max-width: 600px) {
      font-size: 0.7rem;
    }
    @media (max-width: 400px) {
      font-size: 0.650rem;
    }
                            
  text-align: justify;
  font-weight: 300;
  line-height: 2rem;
  word-break: break-word; /* Force le texte à passer à la ligne si nécessaire */
  white-space: normal;
  
  @media (max-width: 1223px) {
    flex: 1;
    width: 100%;
  }
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
      list-style: none;
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