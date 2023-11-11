import { aboutPage } from "./views/about";
import { contactPage } from "./views/contact";
import { homePage } from "./views/home";

type RouterMap = {
  [key: string]: string;
};

const router: RouterMap = {
  "/": homePage,
  "/about": aboutPage,
  "/contact": contactPage,
};
const rootDiv = document.getElementById("root");

// on mounth
if (rootDiv) {
  rootDiv.innerHTML = router[window.location.pathname];
}

const onNavigate = (pathName: string) => {
  console.log({ pathName });
  const {origin} = window.location;

  window.history.pushState({}, pathName, `${origin}${pathName}`);
 if(rootDiv){
  rootDiv.innerHTML = router[pathName];
 }
};

const homeAnchor = document.getElementById("home");
const aboutAnchor = document.getElementById("about");
const contactAnchor = document.getElementById("contact");

homeAnchor?.addEventListener("click", () => {
  onNavigate("/");
});

aboutAnchor?.addEventListener("click", () => {
  onNavigate("/about");
});
contactAnchor?.addEventListener("click", () => {
  onNavigate("/contact");
});
