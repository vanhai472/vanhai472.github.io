import {
  TOGGLE_ALL,
  COLLPSE_CHANGE,
  TOGGLE_MODAL_LOGIN,
  TOGGLE_MODAL_REGISTER
} from "./constants";

export const getView = width => {
  let newView = "MobileView";
  if (width > 991) {
    newView = "DesktopView";
  } else if (width > 767) {
    newView = "TabView";
  }
  return newView;
};

export const toggleAll = (width, height) => {
  const view = getView(width);
  const collapsed = view !== "DesktopView";
  return {
    type: TOGGLE_ALL,
    collapsed,
    view,
    height
  };
};

export const toggleCollapsed = () => ({
  type: COLLPSE_CHANGE
});

export const toggleLogin = () => ({
  type: TOGGLE_MODAL_LOGIN
});

export const toggleRegister = () => ({
  type: TOGGLE_MODAL_REGISTER
});
