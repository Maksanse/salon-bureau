import React from 'react';
import {Global, connect, styled, css} from "frontity";

const BannerFullWidth = () => {


    return(
        <FullWidth>
        <Nav />
        <Banner/>
        </FullWidth>
    )
}

export default connect(BannerFullWidth);

const FullWidth