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
import Categories from "./categories";
import Bestsellers from "./bestsellers";


const Title = () => <h1>Salon Bureau</h1>;
const Root = ({ state }) => {
    const data = state.source.get(state.router.link);



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
                        background-color: #fff;
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

                <Nav />
                    {state.themeSalon.isSidebarOpen ? (
                        <SidebarFullWidth />
                    ):(
                        <>
                            <MainContent>
                                <main>
                                    {data.isHome &&(
                                        <>
                                            <Banner/>
                                            <Bestsellers/>
                                            <Routes>
                                                <h2>Current URL: {state.router.link}</h2>
                                                <h3>Our articles :</h3>
                                                <Switch>
                                                    <Loading when={data.isFetching} />
                                                    <List when={data.isArchive} />
                                                    <div when={data.isPost}>This is a post</div>
                                                    <div when={data.isPage}>This is a page</div>
                                                    <Error when={data.isError} />
                                                </Switch>
                                            </Routes>
                                            <News/>

                                        </>
                                        )}
                                    <Switch>
                                        <Form when={data.link === "/contact/"}/>
                                        <Subs when={data.link === "/newsletter/"}/>
                                        <Categories when={data.link === "/category/"}/>
                                        <Post when={data.isPost} />
                                        <Page when={data.isPage} />
                                    </Switch>
                                </main>
                            </MainContent>
                            <Footer />
                        </>
                    )}
            </Container>
        </>
    );
};

const Container = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

const Routes = styled.div`
  margin-left: 2vh;  
  
  h2 {
    font-size: 3em;
    font-weight: lighter;
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

export default connect(Root);
