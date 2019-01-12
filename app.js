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

app.get('/tenants/:id/config', (req, resp, next) => {
  const entityconfig = {
    "name": "Tenant_" + req.params.id,
    "fields": ["address_" + req.params.id, "city", "country"],
    "datattype": "",
    "relationship": "customer_" + req.params.id
  };
  resp.status(200).json({
    mess: "entiy for tenant_" + req.params.id,
    entity: entityconfig,
  });
});

app.post('/customers/upload', (req, resp, next) => {
  console.log("Getting into upload method");
  if (!req.headers.contains('multipart')) {
    resp.status(415).json({
      message: "Unsupported media type"
    });
  } else if (!req.body.contains('TestExcel upload')) {
    resp.status(400).json({
      message: "Invalid excel"
    });
  } else {
    resp.status(200).json({
      message: "Uploaded successfully"
    })
  }

});
module.exports = app;