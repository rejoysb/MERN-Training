async function getPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  console.log(data);
}

getPosts();
