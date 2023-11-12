import { HtmlUtil } from "./utils/html-util";
import { router } from "./router";
import { UserService } from "./services/user";
import { CONFIG } from "./constants";

const rootDiv = document.getElementById("root");


const userSrvice = new UserService(CONFIG.BASE_URL);
// userSrvice.getAll();
// userSrvice.getOne(2);
userSrvice.addUser();

HtmlUtil.render(rootDiv, router);

