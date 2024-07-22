import React from 'react';
import {Global, connect, styled, css} from "frontity";
import {useMediaQuery} from "react-responsive";

const BannerFullWidth = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return(
        <FullWidth>
        <Nav />
        <Banner/>
        </FullWidth>
    )
}

export default connect(BannerFullWidth);

const FullWidth