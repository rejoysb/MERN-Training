const express = require("express");
const blogsRoute = require("./routes/blogs");
const userRoute = require("./routes/users");
// initializing the express app
const app = express();

// adding express  middleware to understand the json request
app.use(express.json());

// app.get();
// app.post();
// app.put();
// app.patch();
// app.delete();

// Http
// GET -> http://url/api/blogs , http://url/api/blogs/1
// POST -> http://url/api/blogs
// PUT -> http://url/api/blogs/1
// PATCH -> http://url/api/blogs/1
// DELETE -> http://url/api/blogs/1

// http://url/api/blogs

app.use("/api/blogs", blogsRoute);
app.use("/api/users", userRoute);

app.listen(3000, () => {
  console.clear();
  console.log("Listening on port 3000");
});
