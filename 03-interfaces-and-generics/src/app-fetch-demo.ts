const userUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function getPosts(): void {
  fetch(postsUrl, { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((data: Post[]) => {
      console.log(data);
      const postIds = data.map((post) => {
        return post.id;
      });
      console.log({ postIds });
    })
    .catch((err) => console.log(`Error: ${err}`));
}

// function getUsers(): void {
//   fetch(userUrl, { method: "GET" })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data: User[]) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(`Error: ${err}`));
// }

getPosts();
// getUsers();
