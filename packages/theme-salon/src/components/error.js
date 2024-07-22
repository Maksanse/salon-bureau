import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const Error = ({ state }) => {
    return (
        <Container>
        <Content>
            <div>
                <h2>Oups.. vous semblez vous être perdu</h2>
                <p>
                    La page que vous cherchez n'existe pas
                </p>
            </div>
            <Home link="/">Retournez à l'accueil</Home>
        </Content>
        </Container>
    )
}

export default connect(Error)


const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    
    text-align: center;
    padding-top: 3rem;
    display: flex;
    flex-flow: column nowrap;
    gap: .2rem;

`

const Home = styled(Link)`
    border: 1px solid black;
    background-color: black;
    color: white;
    text-decoration: none;
    margin: auto;
    backface-visibility: hidden;
    border-width: .125rem;
    box-sizing: border-box;
    inline-block;
    font-size: 1.2rem;
    font-weight: 300;
    padding: .7rem .750rem;
    position: relative;
`