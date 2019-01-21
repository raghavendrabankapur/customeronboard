var expect  = require('chai').expect;
var request = require('request');

it('Test : Verify get config call', function(done) {
    const expectedoutput = "{\"mess\":\"entiy for tenant_10\",\"entity\":{\"name\":\"Tenant_10\",\"fields\":[\"address_10\",\"city\",\"country\"],\"datattype\":\"\",\"relationship\":\"customer_10\"}}";
    request('https://secret-escarpment-70468.herokuapp.com/tenants/10/config' , function(error, response, body) {
        expect(JSON.stringify(body)).to.equal(JSON.stringify(expectedoutput));
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Test : Upload customer', function(done) {
    request.post({
        url:'https://secret-escarpment-70468.herokuapp.com/customers/upload',
        headers:{'content-type':'application/json','mediatype':'multipart'},
        body:{"test":"TestExcel upload"}
    }, function(response, body){
        expect(JSON.stringify(body)).to.equal(JSON.stringify({message: "Uploaded successfully"}));
        expect(response.statusCode).to.equal(200);
    });
});

it('Test : Upload customer- No media type', function(done) {
    request.post({
        url:'https://secret-escarpment-70468.herokuapp.com/customers/upload',
        headers:{'content-type':'application/json'},
        body:{"test":"TestExcel upload"}
    }, function(response, body){
        expect(JSON.stringify(body)).to.equal(JSON.stringify({message: "Unsupported media type"}));
        expect(response.statusCode).to.equal(415);
    });
});
