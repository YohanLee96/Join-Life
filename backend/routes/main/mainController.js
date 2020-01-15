var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let jsonArray = {
        'test' : 'test2',
    };
    console.log('aaaa');

    return jsonArray;
});

module.exports = router;
