import React from "react";
import {Head, connect, Global, css, styled} from "frontity";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Nav from "./nav";
import Error from "./error";
import Footer from "./footer";
import SidebarFullWidth from "./sidebar-full-width";
import Banner from "./banner";
import News from "./news";
import Form from "./contact-form";
import Subs from "./subs";
import Bestsellers from "./bestsellers";
import Carousel from "./carousel"
import BannerBg from "../assets/banner.jpg"
import ParaBanner from './parallax-banner';
import Catalog from './catalog';
import Category from './category';
import TextImage from './shared/textimage'
import ImageText from './shared/imagetext'
import processors from '../processors/post-template';



const Title = () => <h1>Salon Bureau</h1>;
const Root = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const categories = state.source.category;
    libraries.html2react.processors.push(...processors);

    return (
        <>
            <Global
                styles={css`
                    body {
                        margin: 0;
                        font-family: "Helvetica Neue"; 
                        padding: 0;
                    }
                    main {
                        background-color: rgba(231, 225, 218, .4);
                        color: #000;
                    }
                `}
            />
            <Head>
                <title>{state.frontity.title}</title>
                <meta name="description" content={state.frontity.description} />
                <html lang="en" />
                <link rel="canonical" href={state.router.link} />
            </Head>
            <Container>
                {data.isHome ? (
                    state.themeSalon.isSidebarOpen ? (
                        <Nav />
                    ) : (
                        <BannerImg>
                            <Nav />
                            <Banner />
                        </BannerImg>
                    )
                ) : (
                    <Nav />
                )}
                {state.themeSalon.isSidebarOpen ? (
                        <SidebarFullWidth />
                ):(
                    <>
                        <MainContent>
                            <main>
                                {data.isHome &&(
                                    <>
                                        <Carousel/>
                                        <TextImage/>
                                        <ParaBanner/>
                                        <ImageText/>
                                        <Routes>
                                    {/*     <h3>Our articles :</h3> */}
                                            <Switch>
                                                <Loading when={data.isFetching} />
                                        {/*     <List when={data.isArchive} />  */}
                                                <div when={data.isPost}>This is a post</div>
                                                <div when={data.isPage}>This is a page</div>
                                            </Switch>
                                        </Routes>

                                    </>
                                    )}
                                {/*<h2>Current URL: {state.router.link}</h2>*/}
                                <Switch>
                                    <Form when={data.link === "/contact/"}/>
                                    <Subs when={data.link === "/newsletter/"}/>
                                    <Catalog when={data.isCategory}/>
                                    <Post when={data.isPost} />
                                    <Page when={data.isPage} />
                                    <Error when={data.is404} />
                                    <Category when={data.isSpecificCategory}/>
                                </Switch>

                                {data.link === "/newsletter/" ? (null) : (<News/>)}

                            </main>
                        </MainContent>
                        <Footer />
                    </>
                    )}
            </Container>
        </>
    )
}

export default connect(Root);

const Container = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;

`;

const MainContent = styled.div`
  flex: 1;
  background-color: rgba(231, 225, 218, 1);
`;

const Routes = styled.div`
  padding-left: 2rem; 

  h2 {
    font-size: 3em;
    font-weight: lighter;
    margin: 0;
    padding: 2rem 0 2rem;
  }
  
  h3 {
    font-size: 2.5em;
    font-weight: normal;
  }
  
  a {
    text-decoration: underline;
    font-size: 1.5em;
    line-height: 2em;
    text-align: left;
    font-weight: normal;
    color: blue;
    &:hover {
        opacity: .1;
    }
  }
`;

const BannerImg = styled.div`
  background-image: url('${BannerBg}');
  background-position: center;
  background-size: 100% cover;
  background-repeat: no-repeat;
  height: auto;
`

