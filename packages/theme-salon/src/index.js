import Root from "./components";
import {productimg,leftdiv,rightdiv,banner,fulldiv, productcontainer} from "./processors/post-template";


export default {
  name: "theme-salon",
  roots: {
    themeSalon: Root
  },
  state: {
    themeSalon: {
      RestApiUrl: "https://api.salon-bureau.fr/wp-json/wp/v2/",
      isSidebarOpen: false,
      isProfileIconHovered: false,
      isVisible: false,
      menus: [],
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
            },
        "/contact/":
            {
              isContact: true,
              isReady: true
            }
      }
    }
  },
  actions: {
    themeSalon: {
      fetchMenus: async ({ state, libraries }) => {
            try {
                const response = await libraries.source.api.get({
                    endpoint: "menus",
                    params: {
                        per_page: 100,
                        page: 1
                    }
                });

                const menus = await response.json();

                // Stocker les menus dans le state
                console.log("Menus récupérés :", menus); // DEBUG : Voir si les données sont récupérées

                state.themeSalon.menus = menus;
            } catch (error) {
                console.error("Erreur lors de la récupération des menus :", error);
            }
      },
      revealPost: ({state}) => {
        state.themeSalon.isVisible = !state.themeSalon.isVisible
      },
      deploySidebar: ({state}) => {
        state.themeSalon.isSidebarOpen= !state.themeSalon.isSidebarOpen
      },
      avoidSidebar: ({state}) => {
          state.themeSalon.isSidebarOpen = false;
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

