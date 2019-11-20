const express = require("express");
const Joi = require("@hapi/joi");

const router = express.Router();

const blogs = [
  { id: 1, title: "My first blog", desc: "my first blog desc" },
  { id: 2, title: "My second blog", desc: "my second blog desc" },
  { id: 3, title: "My third blog", desc: "my third blog desc" }
];

router.get("/", (req, res) => {
  res.send(blogs);
});

router.get("/:id", (req, res) => {
  //   console.log(req.query.sortBy);
  const blog = blogs.find(b => b.id == req.params.id);
  if (!blog)
    return res.status(400).send("The blog with the given ID does not exist");
  res.send(blog);
});

router.patch("/:id", (req, res) => {
  const { title, desc } = req.body;

  const { error } = validateBlog(req);
  if (error) return res.status(400).send(error.details[0].message);

  const blogIndex = blogs.findIndex(b => b.id == req.params.id);
  if (blogIndex <= -1)
    return res.status(400).send("The blog with the given ID does not exist");

  const updatedBlog = { ...blogs[blogIndex], title, desc };
  blogs[blogIndex] = updatedBlog;
  res.send(updatedBlog);  
});

router.put("/:id", (req, res) => {
  const { title, desc } = req.body;
  const blogIndex = blogs.findIndex(b => b.id == req.params.id);
  if (blogIndex <= -1)
    return res.status(400).send("The blog with the given ID does not exist");

  const updatedBlog = {
    ...blogs[blogIndex],
    title: title || blogs[blogIndex].title,
    desc: desc || blogs[blogIndex].desc
  };
  blogs[blogIndex] = updatedBlog;
  res.send(updatedBlog);
});

router.post("/", (req, res) => {
  const { title, desc } = req.body;

  const { error } = validateBlog(req);
  if (error) return res.status(400).send(error.details[0].message);
  
  const newBlog = { id: blogs.length + 1, title, desc };
  blogs.push(newBlog);
  res.send(newBlog);
});

function validateBlog(req) {
  const schema = Joi.object({
    title: Joi.string()
      .required()
      .min(3)
      .max(50),
    desc: Joi.string()
      .min(5)
      .max(500)
  });

  return schema.validate(req.body);
}

module.exports = router;
