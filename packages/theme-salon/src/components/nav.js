import React, {useState, useEffect} from "react";
import {connect, keyframes, styled} from "frontity";
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


    useEffect(() => {
        actions.themeSalon.fetchMenus();
    }, [state.router.link]);

    const menuItems = state.themeSalon.menus;
    console.log(menuItems);

    return (
        <>
            <NavBar isSticky={isSticky} isSidebarOpen={state.themeSalon.isSidebarOpen}>
                <NavLinksLeft>
                    <NavItem isSticky={isSticky}>
                        <Hamburger onToggle={actions.themeSalon.deploySidebar}/>
                    </NavItem >
                    <NavItem isSticky={isSticky} isSidebarOpen={state.themeSalon.isSidebarOpen}>
                        <Link link="#">Accueil</Link>
                    </NavItem>
                    <NavItem isSticky={isSticky} isSidebarOpen={state.themeSalon.isSidebarOpen}>
                        <Link link="/categories">Nos produits</Link>
                    </NavItem>
                    <NavItem isSticky={isSticky} isSidebarOpen={state.themeSalon.isSidebarOpen}>
                        <Link link="/contact">Contact</Link>
                    </NavItem>
                    <NavItem isSticky={isSticky} isSidebarOpen={state.themeSalon.isSidebarOpen}>
                        <Link link="/blog">Blog</Link>
                    </NavItem>
                </NavLinksLeft>
                <Logo isSticky={isSticky}>
                    <Link link="/">
                        <Image
                         src={logoImg}
                         alt="Logo"
                        />
                    </Link>

                </Logo>
                <NavLinksRight>
                    <NavItem isSticky={isSticky} isSidebarOpen={state.themeSalon.isSidebarOpen}>
                        <Link link="#">Nos partenaires</Link>
                    </NavItem>
                    <NavItem isSticky={isSticky} isSidebarOpen={state.themeSalon.isSidebarOpen}>
                        <Link link="#">Services</Link>
                    </NavItem>
                    <NavItemSearch>

                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>

                    </NavItemSearch>
                </NavLinksRight>
            </NavBar>
        </>
    );
};

export default connect(Navigation);


const fadeColor = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const NavBar = styled.nav`
  animation: ${fadeColor} .9s cubic-bezier(.5, 0, 0, 1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to top, transparent, rgba(255, 255, 255, .99));
      z-index: -1;
  } 
  
  
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index:1000;
  position: ${(props) => (props.isSticky ? "fixed" : "relative")};
  transition: top 0.9s ease-in-out, background-color 0.3s ease-in-out,
  height 0s ease-in-out, box-shadow 0.9s ease-in-out,
  position 0.9s ease-in-out;  
  background-color: ${(props) => (props.isSticky ? "#fff" : "transparent")};
  height: ${(props) => (props.isSticky ? "17vh" : "20vh")};
  box-shadow: ${(props) => (
  props.isSticky ? "rgba(0, 0, 0, 0.16) 0px 1px 4px;" : null)};
  
  @media (max-width: 600px) {
    flex-flow: row wrap;
    align-content: center;  
  }
  
  @media (max-width:  799px) {
    justify-content: space-evenly;
  }
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
  margin-right: 1rem;
  
  @media (max-width: 600px) {
      margin-right: 0;  
  }

  a {
    display: ${(props) => (props.isSidebarOpen ? "none" : "block")};

    @media (max-width: 600px) {
      display: ${(props) => (!props.isSidebarOpen ? "none" : "block")}; 
    }

    @media (max-width: 799px) {
      display: ${(props) => (!props.isSidebarOpen ? "none" : "block")}; 
    }
    color: #000;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    font-weight: ${(props) => (props.isSticky ? "300" : "500")};
    font-size: 1.5rem; 
    
    @media (min-width: 1824px) {
      font-size: 1.3rem;
    }
    @media (min-width: 1224px) and (max-width: 1823px) {
      font-size: 1.2rem;
    }
    @media (min-width: 800px) and (max-width: 1223px) {
      font-size: 1rem;
    }
    @media (min-width: 601px) and (max-width: 799px) {
      font-size: 0.8rem;
    }
    @media (min-width: 401px) and (max-width: 600px) {
      font-size: 0.7rem;
    }
    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
    
    white-space: nowrap;

    &:hover {
      opacity: 0.1;
    }
  }
`;

const NavItemSearch = styled.div`
  margin-right: 1rem;
  text-align: center;
  white-space: nowrap; 
  @media (min-width: 1224px) and (max-width: 1823px) {
      text-align: ;
  }
  @media (min-width: 1824px) {
    width: 8vw;
  }
`;

const Logo = styled.div`
  display: block;
  @media (max-width: 999px) {
    display: none;
  }
  
  padding: 1.5rem 1rem 1rem 4rem;
  a {
      img {
        width: 50%;
        min-width: 50%;
        height: auto;
        margin: auto;
        text-align: center;
        vertical-align: center;
      }
  }
`;


