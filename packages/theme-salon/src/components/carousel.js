import React from "react"
import { useRef, useEffect } from 'react';
import {Global, connect, styled, css} from "frontity"
import Image from "@frontity/components/image";
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import MainPic from "../assets/ogi_drive_main.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import CarouselCss from 'pure-react-carousel/dist/react-carousel.es.css';
import CustomCarouselCss from '../styles/carousel.css';
import { ConfigProvider, Button } from "antd";
import imageData from "../assets/json/carousel_images.json";
import DeskVec from "../assets/bureau-vectorielle-blanc-noir.jpg";
import Link from "@frontity/components/link"


const Carousel = ({state, libraries}) => {

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Fetch categories
                const responseCategories = await libraries.source.api.get({
                    endpoint: "categories",
                    params: { per_page: 100 }
                });
                console.log("Response Categories:", responseCategories);


                const entitiesAdded = await libraries.source.populate({ response: responseCategories, state });


            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const categories = Object.values(state.source.category);

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return(
        <>
            <Global styles={[CarouselCss, CustomCarouselCss]} />
            <FullDiv>
                <TextDiv>
                    <InView threshold={.6}>
                        {({ inView, ref }) => (
                            <TextCell ref={ref} inView={inView}>
                                Notre<br/><strong>Collection</strong><br/>

                                <hr/>

                                <span>
                                    Découvrez les gammes de produits<br/>
                                    que propose <strong>Salon</strong>
                                </span>
                            </TextCell>
                        )}
                    </InView>

                    <ButtonCell>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorLink: 'rgba(255,255,255,1)',
                                    colorLinkHover: 'rgba(255,255,255,0.6)',
                                }
                            }}>
                            <Button href="/categories" type="link" size="large">
                                Découvrez l'ensemble de nos produits
                            </Button>
                        </ConfigProvider>
                    </ButtonCell>
                </TextDiv>

                <CarouselDiv>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={160}
                        totalSlides={imageData.length}
                        visibleSlides={3}
                        className="custom-carousel"
                    >
                        <Slider>
                            {categories.map((category, index) => {
                                const image = imageData[index]; // Ensure your imageData array has at least as many images as categories
                                return (
                                    <Slide index={index} key={category.id}>
                                        <div style={{ marginLeft: 10, marginTop: 40, marginBottom: 40 }}>
                                            <Link key={category.id} link={`/categories/${category.slug}`}>
                                                <Image src={image.download_url} alt={category.name} width="100%" height="440px"  />

                                            </Link>
                                        </div>
                                    </Slide>
                                );
                            })}
                        </Slider>
                        <ButtonBack className="custom-back-button"><FontAwesomeIcon icon={faChevronLeft} size="2x" /></ButtonBack>
                        <ButtonNext className="custom-next-button"><FontAwesomeIcon icon={faChevronRight} size="2x" /></ButtonNext>

                    </CarouselProvider>
                </CarouselDiv>
            </FullDiv>
        </>
    )
}

export default connect(Carousel)

const FullDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    background-color: #110B11;
    justify-content: space-between;
    align-items: center;
    height: 83vh;
    overflow: auto;

`

const TextDiv = styled.div`

    flex: 0 1 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    background-color: #110B11;
    color: #fff;
    padding: 2rem 1rem 1rem 2rem;
`

const TextCell = styled.div` 
  text-align: left;
  font-size: 4rem;
  font-family: Helvetica Neue;
  font-weight: 100;
  text-transform: uppercase;
  line-height: .9em;
  opacity: ${({inView}) => (inView ? "1":"0")};
  transition: opacity 1s cubic-bezier(.5, 0, 0, 1);

  span {
    font-size: 2rem;
    text-transform: none;
    line-height: .1em;
  }
`

const ImgCell = styled.div`
    height: auto;
`

const CarouselDiv = styled.div`
    flex: 2 0 auto;
`
const ButtonCell = styled.div`
    display:flex;
    justify-content: flex-start;
    padding: 4rem 0 2rem;
    align-items: center;
    
    ::before{
        background-color: #fff;
        content: "";
        display: inline-block;
        height: 1px;
        transition: width .5s ease-in-out;
        width: 44px;
        padding-left: 0; 
     }
     
     :hover::before{
        width: 33px;
     }

`

