import Root from "./components";
import {productimg,leftdiv,rightdiv,banner,fulldiv, productcontainer} from "./processors/post-template";


export default {
  name: "theme-salon",
  roots: {
    themeSalon: Root
  },
  state: {
    themeSalon: {
      RestApiUrl: "http://localhost:8080/wp-json/wp/v2/",
      isSidebarOpen: false,
      isProfileIconHovered: false,
      isVisible: false,
    },
    source: {
      data: {
        "/categories/":
            {
              isCategory: true,
              isReady: true
            },
        "/categories/bureaux/":
            {
              isSpecificCategory: true,
              isReady: true
            },
        "/categories/tables/":
            {
              isSpecificCategory: true,
              isReady: true
            },
        "/categories/sieges/":
            {
              isSpecificCategory: true,
              isReady: true
            },
        "/categories/comptoir-accueil/":
            {
              isSpecificCategory: true,
              isReady: true
            },
        "/categories/mobilier-acoustique/":
            {
              isSpecificCategory: true,
              isReady: true
            },
        "/categories/rangements/":
            {
              isSpecificCategory: true,
              isReady: true
            }
      }
    }
  },
  actions: {
    themeSalon: {
      revealPost: ({state}) => {
        state.themeSalon.isVisible = !state.themeSalon.isVisible
      },
      deploySidebar: ({state}) => {
        state.themeSalon.isSidebarOpen= !state.themeSalon.isSidebarOpen
      },
      handleMouseEnter: ({state}) => {

        state.themeSalon.isProfileIconHovered = true;
        console.log("BEFORE:", state.themeSalon.isProfileIconHovered);
      },
      handleMouseLeave: ({state}) => {
        state.themeSalon.isProfileIconHovered = false;
        console.log("AFTER:", state.themeSalon.isProfileIconHovered);
      }
    }
  },
  libraries: {
    html2react: {
      processors: [productimg,leftdiv,rightdiv,banner,fulldiv,productcontainer]
    }
  }
};

