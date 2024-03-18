import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import BurCatImg from "../assets/bureau_categories.jpg";


const Categories = ({state, actions}) => {

    useEffect(() => {
        actions.source.fetch("/category/nature/");
    }, []);

    const data = state.source.get("category")
    const category = state.source.category[data.id]

    return (
        <Cat>
            <Wrapper>
                <Image
                    src={BurCatImg}
                    width="100%"
                />
                <Overlay>
                    <Content>
                        <h3>{category.name}</h3>
                        <p>Nous proposons une grande diversité de bureaux pour tous les besoins.</p>
                    </Content>
                </Overlay>
            </Wrapper>
            <Wrapper>
                <Image
                    src={BurCatImg}
                    width="100%"
                />
                <Overlay>
                    <Content>
                        <h3>Les Sièges</h3>
                        <p>Découvrez notre vaste sélection de sièges</p>
                    </Content>
                </Overlay>
            </Wrapper>
            <Wrapper>
                <Image
                    src={BurCatImg}
                    width="100%"
                />
                <Overlay>
                    <Content>
                        <h3>Les Rangements</h3>
                        <p>Explorez notre étendue de choix en matière rangements</p>
                    </Content>
                </Overlay>
            </Wrapper>
            <Wrapper>
                <Image
                    src={BurCatImg}
                    width="100%"
                />
                <Overlay>
                    <Content>
                        <h3>Les Tables</h3>
                        <p>Voici notre large gamme de tables</p>
                    </Content>
                </Overlay>
            </Wrapper>
            <Wrapper>
                <Image
                    src={BurCatImg}
                    width="100%"
                />
                <Overlay>
                    <Content>
                        <h3>Et plus encore...</h3>
                        <p>Acoustiques, mobilier d'accueil. </p>
                    </Content>
                </Overlay>
            </Wrapper>
        </Cat>
    )
}

export default connect(Categories)

const Cat = styled.div`
    display:flex;
    flex-flow: column nowrap;  
`

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 2O%;
    transition: opacity 2s,
    
    
    
    img {
        height: auto;
        display: block;
        transition: transform 0.5s ease;
        
        :hover {
            transform: translateX(-2Opx);
        }
    }
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; 
    opacity: 0;
    transition: opacity 0.5s ease; 
    
    :hover {
        opacity: 1;
    }
    
`

const Content = styled.div`
`