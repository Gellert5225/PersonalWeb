var express = require('express');
var path = require('path');
var router = express.Router();

router.post('/contact', function(req, res) {
    const Customer = Parse.Object.extend("Customer");
    const customer = new Customer();

    console.log(req.body);

    customer.set("name", req.body.name);
    customer.set("email", req.body.email);
    customer.set("phone", req.body.phone);
    customer.set("message", req.body.comments);

    customer.save()
    .then((customer) => {
        console.log('New object created with objectId: ' + customer.id);
    }, (error) => {
        console.log('Failed to create new object, with error code: ' + error.message);
    });
});

module.exports = router;