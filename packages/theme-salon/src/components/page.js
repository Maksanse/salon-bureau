import React from "react"
import { connect,styled } from "frontity"
import {useMediaQuery} from "react-responsive";



const Page = ({ state, libraries }) => {


    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component;
    const sanitizedContent = page.content.rendered.replace(/&nbsp;/g, ' ');

    return (
        <Container isMobile={isMobile}>
            <Heading isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                <h1>{page.title.rendered}</h1>
            </Heading>
            <hr/>
            <Content isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                <Html2React html={sanitizedContent}/>
            </Content>
        </Container>
    )
}

export default connect(Page)

const Container = styled.div`
    padding: ${(props)=> props.isMobile ? "0 .5rem 0" : "0 5rem 0"};
    font-family: Helvetica Neue;
`;


const Content = styled.div`
    white-space: pre-wrap;
    text-align: center;
    
    ul {
      list-style-type: square;
    }
    
    li {
      font-size: ${(props) => props.isBigScreen || props.isDekstop || props.isMedium ? "1.5rem" : props.isLaptop || props.isSmall || props.isMobile ? "1rem" : "1.5rem"};
      text-align: left;

    }
    
    h2 {
      font-size: ${(props) => props.isBigScreen || props.isDekstop || props.isMedium ? "1.7rem" : props.isLaptop || props.isSmall || props.isMobile ? "1.2rem" : "1.7rem"};
      text-transform: uppercase;
      font-weight: 500;
    }
    
    p {
      font-size: ${(props) => props.isBigScreen || props.isDekstop || props.isMedium ? "1.5rem" : props.isLaptop || props.isSmall || props.isMobile ? "1rem" : "1.5rem"};
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
     font-size: ${(props) => props.isBigScreen || props.isDekstop || props.isMedium ? "5rem" : props.isLaptop || props.isSmall ? "2.5rem" : props.isMobile ? "2rem" : "5rem"};
      text-align: center;

  }
`;