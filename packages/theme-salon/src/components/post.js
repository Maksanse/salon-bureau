import React from "react";
import { connect, styled } from "frontity";
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import {ImageFond} from '../assets/fond-post.jpg';
import Breadcrumb from '../components/shared/breadcrumb';
import More from '../components/more';


const Post = ({ state, libraries }) => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component;
    const sanitizedContent = post.content.rendered.replace(/&nbsp;/g, ' ');



    return (
        <>
            <InView threshold={.1}>
                {({ inView, ref }) => (
                    <>
                        <Container isMobile={isMobile} ref={ref} inView={inView}>

                            <Heading isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile} bgImage="{ImageFond}">
                                <BreadcrumbContainer> <Breadcrumb/></BreadcrumbContainer>



                                <h1>{post.title.rendered}</h1>
                            </Heading>

                            <Content isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                                <Html2React html={sanitizedContent} />
                            </Content>

                        </Container>
                        <More/>
                    </>
                    )}
            </InView>
        </>
    );
};

export default connect(Post);


const Container = styled.div`
  transform: translateY(${({ inView }) => (inView ? "0" : "-50px")});
  transition: 1s cubic-bezier(.5, 0, 0, 1);
  opacity: ${({inView}) => (inView ? "1":"0")};
  
  @media (max-width: 1223px) {
    display: flex;
    flex-flow: column nowrap;
  }
`;


const Heading = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 25px;
  height: 17vh;
  padding: 20px;
  background-color: #e5e5e5;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  margin-bottom: .5rem;
  
  h1 {
    font-weight: 200;
    text-align: center;
  }
`


const Content = styled.div`
  display: flex;
`


const FullDiv = styled.div`

`;


const BannerDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  
  
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    @media (max-width: 1223px) {
        object-fit: scale-down;
    }
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;  
  }
`;

const ProductContainer = styled.div`
  display: flex;
  
   @media (max-width: 1223px) {
  
    flex-flow: column nowrap;
   }
`;

const LeftSideDiv = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  p {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 300;
  }
`;

const RightSideDiv = styled.div`
  flex: 1;
  background-color: #f1f3f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow:hidden;

  
  figure {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      margin: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }`

const BreadcrumbContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    
`

export {
    ProductImg,
    LeftSideDiv,
    RightSideDiv,
    BannerDiv,
    FullDiv,
    ProductContainer
};