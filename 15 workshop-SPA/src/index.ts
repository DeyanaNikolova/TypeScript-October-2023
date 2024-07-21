import { HtmlUtil } from "./utils/html-util";
import { router } from "./router";
import { UsersService } from "./services/user";
import { CONFIG } from "./constants";
import { User } from "./types/user";

const rootDiv = document.getElementById("root");


const usersSrvice = new UsersService(CONFIG.BASE_URL);
// usersSrvice.getAll();
// usersServise.getOne(3);

// Create user
 const userForCreation: User = {
    id: 22,
    name: 'Gosho Goshev',
    phone: '123 123 123',
    username: 'gosho123',
    email: 'gosho@gmail.com',
 } 

 usersSrvice.addUser(userForCreation);

//  Update user
 const userForUpdate: User = {
    id: 1,
    name: 'Gosho Goshev',
    phone: '123 123 123',
    username: 'gosho123',
    email: 'gosho@gmail.com',
 } 

 usersSrvice.updateUser(userForUpdate);
usersSrvice.deleteUser(22);


HtmlUtil.render(rootDiv, router);

