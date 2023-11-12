import { User } from "../types/user";

export class UserService {
  private apiUrl: string;

  constructor(baseUrl: string) {
    this.apiUrl = `${baseUrl}/users`;
  }
  // CRUD
  getAll() {
    fetch(this.apiUrl)
      .then((response) => response.json())
      .then((data: User[]) => {
        console.log("users data", data);
      })
      .catch((err) => console.error(err));
  }

  getOne(id: number) {
    fetch(`${this.apiUrl}/${id}`)
      .then((response) => response.json())
      .then((data: User) => {
        console.log("one user by id", data);
      })
      .catch((err) => console.error(err));
  }

  addUser(body: User) {
    fetch(this.apiUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data: User) => {
        console.log("create user", data);
      })
      .catch((err) => console.error(err));
  }
}
