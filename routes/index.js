var express = require('express');
var router = express.Router();
var http = require('http');

var STEAM_API_KEY  = "AFD191E3CF00ED057AC63938BE3A5D98";
var Steam = require('steam-webapi');

// Set global Steam API Key
Steam.key = STEAM_API_KEY;

var steam;

Steam.ready(function(err) {
    if(err)
        return console.log(err);

    steam = new Steam();
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/steam-api/:interface/:func/:version', function(req, res) {
    var params = req.query;
    params.key = STEAM_API_KEY;

    steam.request(req.params['interface'], req.params['func'], req.params['version'], 'GET', params, function(err, result) {
        res.json(result);
    });
});

router.get('/:fichier', function(req, res, next) {
    res.render(req.param('fichier').replace('.html', ''));
});

module.exports = router;
