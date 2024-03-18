import React from "react"
import { connect, styled } from "frontity"
import {InView} from "react-intersection-observer"
import {useMediaQuery} from "react-responsive";



const Subs = ({ state, libraries }) => {

    const subs = state.source.page[118];
    const Html2React = libraries.html2react.Component;



    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })


    return (
        <>

            <InView threshold={.1}>
                {({ inView, ref }) => (
                    <Container ref={ref} inView={inView} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <h1>
                            <Html2React html={subs.title.rendered}/>
                        </h1>
                        <Heading isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            Recevez nos<br/><strong>Dernières Actualités</strong>
                        </Heading>
                        <Content isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <Html2React html={subs.content.rendered}/>
                        </Content>

                    </Container>
                )}
            </InView>
        </>
    );
};

export default connect(Subs);

const Container = styled.div`
  transform: translateY(${({ inView }) => (inView ? "0" : "-50px")});
  transition: 1s cubic-bezier(.5, 0, 0, 1);
  opacity: ${({inView}) => (inView ? "1":"0")};
  
  h1 {
    visibility: hidden;
    font-size: .5px;
  }
`;

const Content = styled.div`
  
  margin: auto;
  padding: 0 2rem 0;
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
  
  form {display:flex;
  flex-flow: column wrap;}
 

   p {
    font-size: ${(props) => (
    props.isBigScreen ? "1.5rem" :
        props.isDekstop ? "1.4rem" :
            props.isMedium ? "1.3rem" :
                props.isLaptop ? "1.2rem" :
                    props.isSmall ? "1rem" :
                        props.isMobile ? ".9rem" :
                            "1.5rem")};
    font-weight: 100;
    font-style: italic;
    white-space: normal;
   }
  
  
  input[type=text], input[type=email] {
    width: 90%;
    font-size: ${(props) => (
    props.isBigScreen ? "2rem" :
        props.isDekstop ? "1.7rem" :
            props.isMedium ? "1.5rem" :
                props.isLaptop ? "1.3rem" :
                    props.isSmall ? "1.1rem" :
                        props.isMobile ? "1rem" :
                            "2rem")};
    letter-spacing: .026rem;
    line-height: 3.8rem;
    border: none;
    border-bottom: 2px solid #000;
    appearance: none;
    
    :focus {
      outline: none;
    }
  }
  
  label {
    font-size: ${(props) => (
    props.isBigScreen ? "1.2rem" :
        props.isDekstop ? "1.2rem" :
            props.isMedium ? "1rem" :
                props.isLaptop ? ".9rem" :
                    props.isSmall ? ".8rem" :
                        props.isMobile ? ".7rem" :
                            "1.2rem")};
    font-weight: 200;
    text-transform: uppercase;
    display: block;
    text-align: left;
    padding: 1em 0 0;
  }
  
  input[type=submit] {
    cursor: pointer;
    width: ${(props) => (
    props.isBigScreen ? "20rem" :
        props.isDekstop ? "18rem" :
            props.isMedium ? "16rem" :
                props.isLaptop ? "14rem" :
                    props.isSmall ? "12rem" :
                        props.isMobile ? "10rem" :
                            "20rem")};
    height: 5rem;
    background: #000;
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
    margin: auto;
    border: none;
    box-sizing: border-box;
    display: inline-block;
    font-size: ${(props) => (
    props.isBigScreen ? "2rem" :
        props.isDekstop ? "1.8rem" :
            props.isMedium ? "1.6rem" :
                props.isLaptop ? "1.4rem" :
                    props.isSmall ? "1.2rem" :
                        props.isMobile ? "1rem" :
                            "2rem")};
    font-family: Helvetica Neue;
    font-weight: lighter;
    letter-spacing: .2rem;
  }`

const Heading = styled.div`
  
  width: 50%;
  text-align: left;
  font-size: ${(props) => (
    props.isBigScreen ? "4.5rem" :
        props.isDekstop ? "4rem" :
            props.isMedium ? "3.5rem" :
                props.isLaptop ? "3rem" :
                    props.isSmall ? "2rem" :
                        props.isMobile ? "1.8rem" :
                            "4.5rem")};
  font-family: Helvetica Neue;
  font-weight: 100;
  text-transform: uppercase;
  line-height: .7em;
  padding: 1em 0 .5em .5em;
  strong {
    font-size: ${(props) => (
    props.isBigScreen ? "4.5rem" :
        props.isDekstop ? "4rem" :
            props.isMedium ? "3.5rem" :
                props.isLaptop ? "3rem" :
                    props.isSmall ? "2rem" :
                        props.isMobile ? "1.8rem" :
                            "4.5rem")};
    letter-spacing: -.056rem;
    font-weight: 300;
    font-style: italic;
  }
`;




