import React from "react";
import { connect,styled } from "frontity";
import DeskImg from "../assets/desk.jpg";
import Image from "@frontity/components/image";
import Link from "@frontity/components/link" ;


const SidebarFullWidth = ({actions, state}) => {

    return (
        <>
            <Overlay >
                <GridContainer>
                    <Column>
                        <SmallBlock>
                            <h3>Bureaux</h3>
                            <ul>
                                <li><Link link="/categories/bureaux" onClick={actions.themeSalon.avoidSidebar}>Tous les bureaux</Link></li>

                            </ul>
                        </SmallBlock>

                        <hr/>

                        <SmallBlock>
                            <h3>Sièges</h3>
                            <ul>
                                <li><Link link="/categories/sieges" onClick={actions.themeSalon.avoidSidebar}>Tous les sièges</Link></li>

                            </ul>
                        </SmallBlock>

                        <hr/>

                        <SmallBlock>
                            <h3>Rangement</h3>
                            <ul>
                                <li><Link link="/categories/rangements" onClick={actions.themeSalon.avoidSidebar}>Tous les rangements</Link></li>

                            </ul>
                        </SmallBlock>
                    </Column>
                    <Column>
                        <SmallBlock>
                            <h3>Tables</h3>
                            <ul>
                                <li><Link link="/categories/sieges" onClick={actions.themeSalon.avoidSidebar}>Toutes les tables</Link></li>

                            </ul>
                        </SmallBlock>
                        <hr/>
                        <SmallBlock>
                            <h3>Acoustique</h3>
                            <ul>
                                <li><Link link="/categories/mobilier-acoustique" onClick={actions.themeSalon.avoidSidebar}>Tout le mobilier acoustique</Link></li>

                            </ul>
                        </SmallBlock>
                        <hr/>
                        <SmallBlock>
                            <h3>Borne</h3>
                            <ul>
                                <li><Link link="/categories/comptoir-accueil" onClick={actions.themeSalon.avoidSidebar}>Tout le mobilier d'accueil</Link></li>

                            </ul>
                        </SmallBlock>


                    </Column>
                    <Column>
                        <Heading>Nos dernières<br/><strong>Nouveautés</strong></Heading>
                        <LargeBlock>
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

                </GridContainer>
            </Overlay >
        </>
    )
}

const Heading = styled.div`
  font-size: 3.7rem; 

  
  @media (min-width: 1824px) {
      font-size: 3.7rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 2.6rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 2.5rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 2.2rem;
    }
    @media (min-width : 401px) and (max-width: 600px) {
      font-size: 1.7rem;
    }
    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
                
  font-family: Helvetica Neue;
  font-weight: 100;
  text-transform: uppercase;
  
  & > strong {
    font-size: 5rem;
    
    @media (min-width: 1824px) {
      font-size: 5rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 3.8rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 3.6rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 3.1rem;
    }
    @media (min-width : 401px) and (max-width: 600px) {
      font-size: 2.5rem;
    }
    @media (max-width: 400px) {
      font-size: 1.7rem;
    }
                
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
  background-color: rgba(255, 255, 255, 0.9); 
  z-index: 1000; 
  display: ${(props) => (props.isSidebarOpen ? "none" : "block")};
`;

const GridContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  

  @media (min-width: 800px) and (max-width: 1223px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 1rem;
  }

  @media (min-width: 1224px) {
    grid-template-columns: repeat(2, 1fr); /* Deux colonnes */
    gap: 1.5rem;
  }

  & > :nth-last-child(1):nth-child(odd) {
    grid-column: span 2;
  }
  
  
  
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
    font-size: 2.250rem;
    
    @media (min-width: 1824px) {
      font-size: 2.25rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 2rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 1.750rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 1rem;
    }
    @media (min-width : 401px) and (max-width: 600px) {
      font-size: 0.950rem;
    }
    @media (max-width: 400px) {
      font-size: 0.900rem;
    }
                
    text-transform: uppercase;
    font-weight: 200;

  }
  
  li {
  line-height: 1.3rem;
  }
  
  a {
    font-size: 1.750rem;
    
    @media (min-width: 1824px) {
      font-size: 1.750rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 1.5rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 1.250rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 0.900rem;
    }
    @media (min-width : 401px) and (max-width: 600px) {
      font-size: 0.800rem;
    }
    @media (max-width: 400px) {
      font-size: 0.750rem;
    }
                
    
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
    gap: 1rem;
    
    @media (max-width: 799px) {
      gap: 0.3rem;
    }
  }
`;

const LargeBlock = styled.div`
  display: grid;
  gap: .5rem;
  
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    

  }
  
`;


export default connect(SidebarFullWidth);
