const express = require("express");

// initializing the express app
const app = express();

// adding express  middleware to understand the json request
app.use(express.json());

// Http
// GET -> http://url/api/blogs , http://url/api/blogs/1
// POST -> http://url/api/blogs
// PUT -> http://url/api/blogs/1
// PATCH -> http://url/api/blogs/1
// DELETE -> http://url/api/blogs/1

// http://url/api/blogs

const blogs = [
  { id: 1, title: "My first blog", desc: "my first blog desc" },
  { id: 2, title: "My second blog", desc: "my second blog desc" },
  { id: 3, title: "My third blog", desc: "my third blog desc" }
];

// app.get();
// app.post();
// app.put();
// app.patch();
// app.delete();

app.get("/api/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/api/blogs/:id", (req, res) => {
  //   console.log(req.query.sortBy);
  const blog = blogs.find(b => b.id == req.params.id);
  if (!blog)
    return res.status(400).send("The blog with the given ID does not exist");
  res.send(blog);
});

app.post("/api/blogs", (req, res) => {
  const data = req.body;
  const { title, desc } = req.body;
  if (!title || !desc)
    return res.status(400).send("Title and description is required");
  //   blogs.push(
  //       {
  //           id:blogs.length+1,
  //           title:req.body.title,
  //           desc:req.body.title
  //       }
  //   )
  const newBlog = { id: blogs.length + 1, title, desc };
  blogs.push(newBlog);
  res.send(newBlog);
});

app.listen(3000, () => console.log("Listening on port 3000"));
