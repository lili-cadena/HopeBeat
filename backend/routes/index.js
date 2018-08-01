const express = require('express');
const router  = express.Router();
const validate = require('../helpers/validations');

/* GET home page */
router.get('/', validate.isLoggedIn, (req, res) => {
  res.render('index');
});

module.exports = router;
