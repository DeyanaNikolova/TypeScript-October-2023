import { HtmlUtil } from "./utils/html-util";
import { router } from "./router";
import { UserService } from "./services/user";
import { CONFIG } from "./constants";
import { User } from "./types/user";

const rootDiv = document.getElementById("root");


const userSrvice = new UserService(CONFIG.BASE_URL);
// userSrvice.getAll();
 userSrvice.getOne(2);

 const userForCreation = {
    name: 'Gosho Goshev',
    phone: '123 123 123',
    username: 'gosho123',
    id: 22,
 } as User;

 userSrvice.addUser(userForCreation);

HtmlUtil.render(rootDiv, router);

