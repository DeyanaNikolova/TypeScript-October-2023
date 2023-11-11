import { RouterMap } from "../types/router";

export class HtmlUtil {
  static render(rootDiv: HTMLElement | null, router: RouterMap) {
    if (!rootDiv) {
      throw Error("Missing root element!");
    }
    
// On Init
    rootDiv.innerHTML = router[window.location.pathname];

    // Listen for events
    HtmlUtil.attachEventListeners(rootDiv, router);
  }


  static onNavigate(
    rootDiv: HTMLElement | null,
    router: RouterMap,
    pathName: string
  ) {
    const { origin } = window.location;

    window.history.pushState({}, pathName, `${origin}${pathName}`);

    if (rootDiv) {
      rootDiv.innerHTML = router[pathName];
    }
  }

  static attachEventListeners(rootDiv: HTMLElement, router: RouterMap){
    const homeAnchor = document.getElementById("home");
    const aboutAnchor = document.getElementById("about");
    const contactAnchor = document.getElementById("contact");

    // event listeners attachment
    homeAnchor?.addEventListener("click", () => {
      HtmlUtil.onNavigate(rootDiv, router, "/");
    });

    aboutAnchor?.addEventListener("click", () => {
      HtmlUtil.onNavigate(rootDiv, router, "/about");
    });
    contactAnchor?.addEventListener("click", () => {
      HtmlUtil.onNavigate(rootDiv, router, "/contact");
    });
  }
}
