import React from "react"
import { connect, styled } from "frontity"
import {InView} from "react-intersection-observer"
import {useMediaQuery} from "react-responsive";



const Form = ({ state, libraries }) => {
    const form = state.source.page[17];
    const Html2React = libraries.html2react.Component;
    

    return (
        <>

            <InView threshold={.1}>
                {({ inView, ref }) => (
                    <Container ref={ref} inView={inView}>
                            <Heading>
                                Contactez<br/><strong>Nous !</strong>
                            </Heading>
                            <Content>
                                <Html2React html={form.content.rendered}/>
                            </Content>
                    </Container>
                )}
            </InView>
        </>
    );
};

export default connect(Form);

const Container = styled.div`
  transform: translateY(${({ inView }) => (inView ? "0" : "-50px")});
  transition: 1s cubic-bezier(.5, 0, 0, 1);
  opacity: ${({inView}) => (inView ? "1":"0")};
`;

const Content = styled.div`
  
  margin: 0;
  
  #sb-form-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    flex-flow: column nowrap;
    
  }
  
  select {
    
    font-size: 1.7rem;
    letter-spacing: .026rem;
    min-height: 3.8rem;
    min-width: 40rem;
    line-height: 3.8rem;
    font-family: "Helvetica Neue";
    font-weight: lighter;
  }

  #sb-name {
    display:flex;
    flex-flow: row nowrap;
    gap: 1rem;
    width: 50%;
  }
  
  
  input[type=text], input[type=tel], input[type=email] {
    width: 90%;
    font-size: 1.7rem;
    letter-spacing: .026rem;
    line-height: 3.8rem;
    border: none;
    border-bottom: 2px solid #000;
    appearance: none;
    background-color: rgba(231, 225, 218, .4);
    
    :focus {
      outline: none;
    }
  }
  
  label {
    font-size: 1.2rem;
    font-weight: 200;
    text-transform: uppercase;
    display: block;
    text-align: left;
  }
  
  input[type=submit] {
    cursor: pointer;
    width: 20rem;
    height: 5rem;
    background: #000;
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
    margin: auto;
    border: none;
    box-sizing: border-box;
    display: inline-block;
    font-size: 2rem;
    font-family: Helvetica Neue;
    font-weight: lighter;
    letter-spacing: .2rem;
  }
  
  textarea {
    width: 100%;
    font-size: 1.3rem;
    letter-spacing: .026rem;
    box-sizing: border-box; 
    padding: 1.5rem;
    border: 0.1rem solid;
    resize: vertical;
  }`
  
const Heading = styled.div`
  
  width: 50%;
  text-align: left;
  font-size: 4.5rem;
   @media (min-width: 1824px) {
      font-size: 4.5rem;
   }
   @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 4rem;
   }
   @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 3.5rem;
   }
   @media (min-width: 601px) and (max-width: 799px) {
      font-size: 3rem;
   }
   @media (min-width : 401px) and (max-width: 600px) {
      font-size: 1.5rem;
   }
   @media (max-width: 400px) {
      font-size: 0.7rem;
   }
   
   
  font-family: Helvetica Neue;
  font-weight: 100;
  text-transform: uppercase;
  line-height: .7em;
  padding: 1em;
  strong {
    font-size: 4.5rem;
    
    @media (min-width: 1824px) {
      font-size: 4.5rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 4rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 3.5rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 3rem;
    }
    @media (min-width : 401px) and (max-width: 600px) {
      font-size: 1.5rem;
    }
    @media (max-width: 400px) {
      font-size: 0.7rem;
    }
    
    letter-spacing: -.056rem;
    font-weight: 300;
  }
`;
  



