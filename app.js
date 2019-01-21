const express = require('express');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.json());

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
  var header = JSON.stringify(req.headers);
  if (!header.includes('multipart')) {
    resp.status(415).json({
      message: "Unsupported media type"
    });
  } else if (!JSON.stringify(req.body).includes('TestExcel upload')) {
    resp.status(400).json({
      message: "Invalid excel"
    });
  } else {
    resp.status(200).json({
      message: "Uploaded successfully"
    });
  }

});
module.exports = app;