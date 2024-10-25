import React from "react"
import { connect,styled } from "frontity"



const Page = ({ state, libraries }) => {


    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component;
    const sanitizedContent = page.content.rendered.replace(/&nbsp;/g, ' ');

    return (
        <Container>
            <Heading>
                <h1>{page.title.rendered}</h1>
            </Heading>
            <hr/>
            <Content>
                <Html2React html={sanitizedContent}/>
            </Content>
        </Container>
    )
}

export default connect(Page)

const Container = styled.div`
    padding: 0 5rem 0;
    
    @media (max-width: 400px) {
        padding: 0 .5rem 0;
    }
    font-family: Helvetica Neue;
`;


const Content = styled.div`
    white-space: pre-wrap;
    text-align: center;
    
    ul {
      list-style-type: square;
    }
    
    li {
      
      font-size: 1.5 rem;
      
      @media (max-width: 799px){
        font-size: 1rem;
      }
    
      
      text-align: left;

    }
    
    h2 {
      font-size: 1.7rem;
      @media (max-width: 799px){
        font-size: 1.2rem;
      }
      text-transform: uppercase;
      font-weight: 500;
    }
    
    p {
      font-size: 1.5rem;
      @media (max-width: 799px){
        font-size: 1rem;
      }
      
      font-weight: 400;
      text-align: left;
    }
`;

const Heading = styled.div`
  position: relative;
  display: inline;
  font-family: Helvetica Neue;
  text-transform: uppercase;
  
  
  h1 {
    font-weight: 300;
    font-size: 5rem; /* Par défaut pour isBigScreen, isDekstop, isMedium */

    @media (max-width: 799px) {
        font-size: 2.5rem; /* Pour isLaptop, isSmall */
    }

    @media (max-width: 400px) {
        font-size: 2rem; /* Pour isMobile */
    }    
    text-align: center;

  }
`;