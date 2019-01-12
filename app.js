const express = require('express');
const app = express();

app.post("/api/blogs", (req, res, next) => {
    const blog = req.body;
    console.log(req.body);
    console.log(blog);
    res.status(200).json({
      message: 'blog added successfully'
    });
  });

  app.get('/api/blogs', (req, resp) => {
  
    const blogs = [{"id":1, "title":"movie1","review":"review1"}];
    
      resp.status(200).json({
        mess: 'Post is done',
        blogs: blogs,
      });
    });

    module.exports = app;