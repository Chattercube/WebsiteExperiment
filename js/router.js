const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
  };
  
const routes = {
    404: "/pages/home/home.html",
    "/": "https://chattercube.github.io/WebsiteExperiment/pages/home/home.html",
    "/home": "/pages/home/home.html",
    "/test2": "/pages/test2/test2.html"
};
  
const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.querySelector("#main-page").innerHTML = html;
};
  
window.onpopstate = handleLocation;
window.route = route;
  
handleLocation();
  