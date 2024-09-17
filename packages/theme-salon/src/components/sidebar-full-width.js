import React from "react";
import { connect,styled } from "frontity";
import DeskImg from "../assets/desk.jpg";
import Image from "@frontity/components/image";
import {useMediaQuery} from "react-responsive";


const SidebarFullWidth = () => {


    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return (
        <>
            <Overlay>
                <GridContainer isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                    <Column>
                        <SmallBlock isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <h3>Bureaux</h3>
                            <ul>
                                <li><a href="#">Bureau droit</a></li>
                                <li><a href="#">Bureau réglable</a></li>
                                <li><a href="#">"Bench"</a></li>
                                <li><a href="#">Bureau direction</a></li>
                                <br/>

                            </ul>
                        </SmallBlock>

                        <hr/>

                        <SmallBlock isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <h3>Sièges</h3>
                            <ul>
                                <li><a href="#">Fauteuil de travail</a></li>
                                <li><a href="#">Chaise classique</a></li>
                                <li><a href="#">Tabouret haut</a></li>
                                <li><a href="#">Fauteuil de direction</a></li>
                                <li><a href="#">Espace détente</a></li>
                                <li><a href="#">Fauteuil technique</a></li>
                                <li><a href="#">Mobilier extérieur</a></li>
                            </ul>
                        </SmallBlock>

                        <hr/>

                        <SmallBlock isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <h3>Rangement</h3>
                            <ul>
                                <li><a href="#">Caisson</a></li>
                                <li><a href="#">Armoire</a></li>
                                <li><a href="#">Vestiaires</a></li>
                                <li><a href="#">Archivage</a></li>
                            </ul>
                        </SmallBlock>
                    </Column>
                    <Column>
                        <SmallBlock isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <h3>Tables</h3>
                            <ul>
                                <li><a href="#">Table classique</a></li>
                                <li><a href="#">Table basse</a></li>
                                <li><a href="#">Table haute</a></li>
                                <li><a href="#">Table modulaire</a></li>
                                <li><a href="#">Table réunion</a></li>
                            </ul>
                        </SmallBlock>
                        <hr/>
                        <SmallBlock isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <h3>Acoustique</h3>
                            <ul>
                                <li><a href="#">Cabine acoustique</a></li>
                                <li><a href="#">Cloison</a></li>
                                <li><a href="#">Cabine confidentiel</a></li>
                                <li><a href="#">Panneau mural et plafond</a></li>
                            </ul>
                        </SmallBlock>
                        <hr/>
                        <SmallBlock isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <h3>Borne</h3>
                            <ul>
                                <li><a href="#">Borne d'accueil</a></li>

                            </ul>
                        </SmallBlock>


                    </Column>
                    <Column>
                        <Heading isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>Nos dernières<br/><strong>Nouveautés</strong></Heading>
                        <LargeBlock isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <Box>
                                <Image
                                    src={DeskImg}
                                    title="Desk"
                                    width="100%"
                                />
                            </Box>

                            <Box>
                                <Image
                                    src={DeskImg}
                                    title="Desk"
                                    width="100%"
                                />
                            </Box>

                            <Box>
                                <Image
                                    src={DeskImg}
                                    title="Desk"
                                    width="100%"
                                />
                            </Box>

                            <Box>
                                <Image
                                    src={DeskImg}
                                    title="Desk"
                                    width="100%"
                                />
                            </Box>
                        </LargeBlock>
                    </Column>
                    {(isMobile || isSmall || isLaptop || isMedium) ? null : (
                    <EmptyColumn>
                        <></>
                    </EmptyColumn>)}
                </GridContainer>
            </Overlay>
        </>
    )
}

const Heading = styled.div`
  font-size: ${(props) => (
  props.isBigScreen ? "3.7rem" : 
  props.isDekstop ? "2.6rem" : 
  props.isMedium ? "2.5rem" : 
  props.isLaptop ? "2.2rem" :
  props.isSmall ? "1.7rem" :
  props.isMobile ? "1.2rem" : 
  "3.7rem")};
  font-family: Helvetica Neue;
  font-weight: 100;
  text-transform: uppercase;
  
  & > strong {
    font-size: ${(props) => (props.isBigScreen ? "5rem" :
    props.isDekstop ? "3.800rem" :
    props.isMedium ? "3.600rem" :
    props.isLaptop ? "3.1rem" :
    props.isSmall ? "2.5rem" :
    props.isMobile ? "1.7rem" : 
    "5rem")};
    line-height: 0;
    letter-spacing: -.056rem;
    font-weight: 300;
  }
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9); /* couleur de fond semi-transparente */
  z-index: 1000; /* assure que SidebarFullWidth est au-dessus du reste du contenu */
  display: ${(props) => (props.isSidebarOpen ? "none" : "block")};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.isSmall || props.isLaptop || props.isMedium ? "20% 20% 50%" : props.isMobile ? "auto-fill" : "15% 15% 60%")};
  grid-gap: 1.5rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

const Column = styled.div`
  background-color: #fff;
  padding: .5rem;
  border-radius: 8px;
`;

const Box = styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
  font-size:40px;
  font-family:sans-serif;
  width: 100%;

`
const SmallBlock = styled.div`

  h3 {
    font-size: ${(props) => (props.isBigScreen ? "2.250rem" :
    props.isDekstop ? "2rem" :
    props.isMedium ? "1.750rem" :
    props.isLaptop ? "1rem" :
    props.isSmall ? ".950rem" :
    props.isMobile ? ".9rem" :
    "2.250rem")};
    text-transform: uppercase;
    font-weight: 200;

  }
  
  li {
  line-height: 1.3rem;
  }
  
  a {
    font-size: ${(props) => (props.isBigScreen ? "1.750rem" :
    props.isDekstop ? "1.5rem" :
    props.isMedium ? "1.250rem" :
    props.isLaptop ? ".9rem" :
    props.isSmall ? ".800rem" :
    props.isMobile ? ".750rem" :
    "2rem")};
    display: block;
    margin-bottom: 5px;
    text-decoration: none;
    color: #333;
    white-space: normal;
    
    &:hover {
        opacity: .6;    
    }
  }
  
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-flow: column nowrap;
    gap: ${(props) => (props.isLaptop || props.isSmall || props.isMobile ? ".3rem" : "1rem")};
  }
`;

const LargeBlock = styled.div`
  gap: ${(props) => (props.isLaptop || props.isSmall || props.isMobile ? ".5rem" : "2rem")};
  display: grid;
  grid-template-columns: ${(props) => (props.isLaptop || props.isSmall || props.isMobile ? "repeat(auto-fill, 2, 1fr)" : "repeat(2, 1fr)")};
`;

const EmptyColumn = styled.div`
  grid-column: 4;
`;

export default connect(SidebarFullWidth);
