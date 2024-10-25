import React from "react"
import { connect, styled } from "frontity"
import {InView} from "react-intersection-observer"
import {useMediaQuery} from "react-responsive";

const Product = ({ state }) => {


    const data = state.source.get(state.router.link)
    const product = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component;
    const sanitizedContent = product.content.rendered.replace(/&nbsp;/g, ' ');



    return (
        <>
            <InView threshold={.1}>
                {({ inView, ref }) => (
                    <Container ref={ref} inView={inView}>
                        <Heading>
                            <h1>{post.title.rendered}</h1>
                        </Heading>
                        <hr/>
                        <ContentSmall>
                            <Html2React html={sanitizedContent} />
                        </Content>
                    </Container>
                )}
            </InView>
        </>
    );
};

export default connect(Product);