var express = require('express');
var router = express.Router();
const axios = require("axios");



/* GET home page. */
router.get('/', function (req, res, next) {
  axios.get("https://erply-challenge.herokuapp.com/list?AUTH=fae7b9f6-6363-45a1-a9c9-3def2dae206d")
    .then((response) => {
      let productsArray = [];

      response.data.map((products) => {
        productsArray.push(products);
      });
      res.render('shop/index', {
        title: 'Shop',
        products: productsArray
      });
    });
});

module.exports = router;
