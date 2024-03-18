import Root from "./components";


export default {
  name: "theme-salon",
  roots: {
    themeSalon: Root
  },
  state: {
    themeSalon: {
      isSidebarOpen: false,
      isProfileIconHovered: false,
      isVisible: false,
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
  }
};

