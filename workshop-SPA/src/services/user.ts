export class UserService {
  private apiUrl: string;

  constructor(baseUrl: string) {
    this.apiUrl = `${baseUrl}/users`;
  }
  // CRUD
  getAll() {
    fetch(this.apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("users data", data);
      })
      .catch((err) => console.error(err));
  }

  getOne(id: number) {
    fetch(`${this.apiUrl}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("one user by id", data);
      })
      .catch((err) => console.error(err));
  }

  addUser() {
    fetch(this.apiUrl, {
      method: "POST",
      body: JSON.stringify({
        name: "Gosho Atanasov",
        phone: "010-456-4565-x4958",
        username: "Gosho",
        userId: 201,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("create user", data);
      })
      .catch((err) => console.error(err));
  }
}
