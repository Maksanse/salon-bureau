import React from "react"
import { connect, styled } from "frontity"
import {InView} from "react-intersection-observer"
import {useMediaQuery} from "react-responsive";

const Product = ({ state }) => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    const data = state.source.get(state.router.link)
    const product = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component;
    const sanitizedContent = product.content.rendered.replace(/&nbsp;/g, ' ');



    return (
        <>
            <InView threshold={.1}>
                {({ inView, ref }) => (
                    <Container isMobile={isMobile} ref={ref} inView={inView}>
                        <Heading isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <h1>{post.title.rendered}</h1>
                        </Heading>
                        <hr/>
                        <Content isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                            <Html2React html={sanitizedContent} />
                        </Content>
                    </Container>
                )}
            </InView>
        </>
    );
};

export default connect(Product);