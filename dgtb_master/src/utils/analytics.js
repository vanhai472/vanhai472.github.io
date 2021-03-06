import ReactGA from "react-ga";

export const initGA = () => {
    ReactGA.initialize("UA-xxxxxxxxx-1");
};

export const logPageView = () => {
    console.log(`Logging pageview for ${window.location.pathname}`);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
