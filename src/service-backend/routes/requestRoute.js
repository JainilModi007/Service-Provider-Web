const express = require("express")
const Request = require("../models/dbrequest")

const router = express.Router();

router.route("/customerform").post((req, res) => {
    const customerID =  req.body.customerID;
    const customerName = req.body.customerName;
    const contactNo = req.body.contactNo;
    const email = req.body.email;
    const address = req.body.address;
    const state = req.body.state;
    const city = req.body.city;
    const productName = req.body.productName;
    const productID = req.body.productID;
    const date = req.body.date;
    const description = req.body.description;
    const shopkeeperName = req.body.shopkeeperName;
    const shopkeeperID = req.body.shopkeeperID;
    const newRequest = new Request({
        customerID,
        customerName,
        contactNo,
        email,
        address,
        state,
        city,
        productName,
        productID,
        date,
        description,
        shopkeeperName,
        shopkeeperID
    });

    newRequest.save();
})


router.route("/request").get((req, res) => {
    Request.find()
        .then(foundRequest => res.json(foundRequest))

})

router.route("/requesthistory").get((req, res) => {
    Request.find()
        .then(foundRequestHistory => res.json(foundRequestHistory))
        
})

module.exports = router;