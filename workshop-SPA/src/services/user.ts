export class UserService {
  apiUrl = "https://jsonplaceholder.typicode.com/users";
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
}
