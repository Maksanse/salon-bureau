import React from "react"
import { connect, styled } from "frontity"
import {InView} from "react-intersection-observer"


const Post = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]

    return (
        <>
            <InView threshold={.1}>
                {({ inView, ref }) => (
                    <Container ref={ref} inView={inView}>
                        <div>
                            <h2>{post.title.rendered}</h2>
                            <p>
                                <strong>Posted: </strong>
                                {post.date}
                            </p>
                            <p>
                                <strong>Author: </strong>
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        </div>
                    </Container>
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
`;


