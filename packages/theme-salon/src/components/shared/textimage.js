import React from "react"
import {connect, styled, } from "frontity"
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import Image from "@frontity/components/image"
import Bureau from '../../assets/bureau_categories.jpg';


const TextImage = ({content}) => {

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
                            Aménager un espace de travail stimulant et propice à la concentration est essentiel pour la réussite d'une entreprise. Le mobilier de bureau joue un rôle crucial dans la création d'un environnement de travail agréable et productif.
                            le choix des couleurs et des matériaux est également important pour créer une ambiance de travail agréable. Des couleurs claires et des matériaux naturels favorisent la concentration et la créativité.

                            En choisissant soigneusement le mobilier de bureau, il est possible de créer un espace de travail qui inspire la créativité, la productivité et le bien-être des employés.
                        </TextCell>
                        <FlexCell>
                            <Image src={Bureau} />
                        </FlexCell>
                    </Cell>
                )}
            </InView>
    )}

export default connect(TextImage)


const Cell = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.isMobile || props.isSmall || props.isLaptop || props.isMedium ? "row wrap" : "row nowrap")};

  
  justify-content:  ${(props) => (props.isMobile || props.isSmall || props.isLaptop || props.isMedium ? "center" : "space-evenly")};
  align-items: center;
  height: 83vh;
  margin: 0;

`

const FlexCell = styled.div`
  flex: 40%;
  width: 50%;

  display: flex;
  justify-content: center;
  

  img {
    justify-content: center;
    width: ${(props) => (props.isMobile || props.isSmall || props.isLaptop || props.isMedium ? "100%" : "70%")};
  }
`

const TextCell = styled.div` 
  flex: 60%;
  font-size: ${(props) => (
  props.isBigScreen ? "2rem" :
  props.isDekstop ? "1.7rem" : 
  props.isMedium ? "1.5rem" :
  props.isLaptop ? "1.25rem" :
  props.isSmall ? "1rem" :
  props.isMobile ? ".850rem" :
  "1.4rem")};
  text-align: justify;
  padding: 2rem;
  font-weight: 300;
  line-height: 2rem;
`;



