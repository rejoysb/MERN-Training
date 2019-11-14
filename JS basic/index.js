// API -> Application Programming Interface

async function getPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  console.log(posts);
}

getPosts();

// fs
// os
// http request
