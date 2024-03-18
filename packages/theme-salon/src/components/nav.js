import React, {useState, useEffect} from "react";
import {connect, styled} from "frontity";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import logoImg from "../assets/logo-salon.svg";
import { Cross as Hamburger } from 'hamburger-react';
import SearchBar from "./search-bar";
import {useMediaQuery} from "react-responsive";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


const Navigation = ({ actions, state }) => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const offsetVH = (offset * 100) / window.innerHeight;

            setIsSticky(offsetVH > 20);
        };

        if (!state.themeSalon.isSidebarOpen) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [state.themeSalon.isSidebarOpen]);


    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return (
        <>
            <NavBar isSticky={isSticky} isSidebarOpen={state.themeSalon.isSidebarOpen} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                <NavLinksLeft>
                    <NavItem isLaptop={isLaptop} isMobile={isMobile}>
                        <Hamburger onToggle={actions.themeSalon.deploySidebar}/>
                    </NavItem >
                    <NavItem isSidebarOpen={state.themeSalon.isSidebarOpen} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <Link link="#">Accueil</Link>
                    </NavItem>
                    <NavItem isSidebarOpen={state.themeSalon.isSidebarOpen} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <Link link="#">Nos produits</Link>
                    </NavItem>
                    <NavItem isSidebarOpen={state.themeSalon.isSidebarOpen} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <Link link="/contact">Contact</Link>
                    </NavItem>
                    <NavItem isSidebarOpen={state.themeSalon.isSidebarOpen} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <Link link="/blog">Blog</Link>
                    </NavItem>
                </NavLinksLeft>
                <Logo isSticky={isSticky} isMobile={isMobile} isSmall={isSmall} isLaptop={isLaptop}>
                     <Image
                         src={logoImg}
                         alt="Logo" />
                </Logo>
                <NavLinksRight>
                    <NavItem isSidebarOpen={state.themeSalon.isSidebarOpen} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <Link link="#">Nos partenaires</Link>
                    </NavItem>
                    <NavItem isSidebarOpen={state.themeSalon.isSidebarOpen} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        <Link link="#">Services</Link>
                    </NavItem>
                    <NavItemSearch isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        {isBigScreen || isDekstop ? (
                            <SearchBar/>
                        ):(
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        )}
                    </NavItemSearch>

                </NavLinksRight>
            </NavBar>
        </>
    );
};

export default connect(Navigation);


const NavBar = styled.nav`
  display: flex;
  flex-flow: ${(props) => (props.isMobile || props.isSmall || props.isLaptop ? "row wrap" : "row nowrap")};
  justify-content: ${(props) => (props.isMobile || props.isSmall || props.isLaptop ? "space-evenly" : "space-between")};
  align-items: center;
  align-content: ${(props) => (props.isMobile || props.isSmall) && "center"};
  width: 100%;
  z-index:1000;
  position: ${(props) => (props.isSticky ? "fixed" : "relative")};
  transition: position 0.7s ease-in-out;
  background-color: #fff;
  height: ${(props) => (props.isSticky ? "17vh" : "20vh")};
  box-shadow: ${(props) => (
  props.isSticky ? "rgba(0, 0, 0, 0.16) 0px 1px 4px;" : "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;")};
`;

const NavLinksLeft = styled.div`
  display: flex;
  align-items: center;
  flex-fow: row nowrap;
  margin-left: 1rem; 
`;

const NavLinksRight = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

const NavItem = styled.div`
  margin-right: ${(props) => (props.isMobile || props.isSmall ? "0" : "1rem")};
  
  a {
    display: ${(props) =>
    (props.isSidebarOpen && !props.isMobile && !props.isSmall) ||
    (!props.isSidebarOpen && props.isMobile) ||
    (!props.isSidebarOpen && props.isSmall) ? "none" : "block"};
    color: ${(props) => (props.isSticky ? "#fff" : "#000")};
    opacity: 1;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    font-weight: 300;
    font-size:  ${(props) => (
    props.isBigScreen ? "1.300rem" : 
    props.isDekstop ? "1.150rem" : 
    props.isMedium ? ".950rem" : 
    props.isLaptop ? ".700rem" :
    props.isSmall ? ".650rem" :    
    props.isMobile ? ".600rem" : 
    "1.500rem")};
    white-space: nowrap; 

    &:hover {
      opacity: .1;
    }
  }
`;

const NavItemSearch = styled.div`
  width: ${(props) => (props.isBigScreen && "8vw")};
  margin-right: 1rem;
  text-align: ${(props) => (props.isDekstop ? "" : "center")};
  white-space: nowrap; 
`;

const Logo = styled.div`
  display: ${(props) => (props.isMobile || props.isSmall || props.isLaptop ? "none" : "block")};
  padding: 1rem;
  img {
    width: ${(props) => (props.isSticky ? "50%" : "70%")};
    height: auto;
    margin: auto;
    text-align: center;
    vertical-align: center;
    
  }
`;

