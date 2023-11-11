import { HtmlUtil } from "./utils/html-util";
import { router } from "./router";

const rootDiv = document.getElementById("root");

HtmlUtil.render(rootDiv, router);

