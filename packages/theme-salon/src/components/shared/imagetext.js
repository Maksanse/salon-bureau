import React, {useEffect} from "react"
import {connect, styled, } from "frontity"
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import Image from "@frontity/components/image"
import Bureau from '../../assets/bureau_categories.jpg';




const ImageText = ({state}) => {
    

    return (
        <InView threshold={.2}>
            {({ inView, ref }) => (
                <Cell ref={ref} inView={inView}>
                    <FlexCell ref={ref} inView={inView}>
                        <Image src={Bureau}/>


                    </FlexCell>
                    <TextCell>
                        Aménager un espace de travail stimulant et propice à la concentration est essentiel pour la réussite d'une entreprise. Le mobilier de bureau joue un rôle crucial dans la création d'un environnement de travail agréable et productif.
                        le choix des couleurs et des matériaux est également important pour créer une ambiance de travail agréable. Des couleurs claires et des matériaux naturels favorisent la concentration et la créativité.

                        En choisissant soigneusement le mobilier de bureau, il est possible de créer un espace de travail qui inspire la créativité, la productivité et le bien-être des employés.


                    </TextCell>
                </Cell>
            )}
        </InView>
    )}

export default connect(ImageText)


const Cell = styled.div`

  display: flex;
  padding-top: 4rem;
  padding-bottom: 4rem;

  
  flex-flow: row nowrap;
  
  @media (max-width: 799px) {
    flex-flow: row wrap; 
  }
  margin-left: 1em;
  
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  gap: 4rem;
`

const FlexCell = styled.div`
  @media (min-width: 800px) {
  
      transform: translateX(${({ inView }) => (inView ? "20px" : "-70px")});
      transition: 2s cubic-bezier(.5, 0, 0, 1);
      opacity: ${({inView}) => (inView ? "1":"0")};
      padding: 0;
  }
  flex: 40%;
  width: 50%;
  padding: 20px;

  display: flex;
  justify-content: center;

  img {
    justify-content: center;
    width: 70%;
    
    @media (max-width: 1223px) {
        width: 100%;
    }
  }
`

const TextCell = styled.div` 
  flex: 60%;
  font-size: 2rem;
        
                            
   @media (min-width: 1824px) {
      font-size: 2rem;
   }
   @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 1.7rem;
   }
   @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 1.5rem;
   }
   @media (min-width: 601px) and (max-width: 799px) {
      font-size: 1.25rem;
   }
   @media (min-width: 401px) and (max-width: 600px) {
      font-size: 1rem;
   }
   @media (max-width: 400px) {
      font-size: 0.850rem;
   }
    
  text-align: justify;
  padding: 2rem;
  font-weight: 300;
  line-height: 2rem;
`;



