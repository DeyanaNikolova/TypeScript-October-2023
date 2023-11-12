import { HtmlUtil } from "./utils/html-util";
import { router } from "./router";
import { UserService } from "./services/user";

const rootDiv = document.getElementById("root");

const userSrvice = new UserService();
// userSrvice.getAll();
userSrvice.getOne(2);

HtmlUtil.render(rootDiv, router);

