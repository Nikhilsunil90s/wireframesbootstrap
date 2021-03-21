var express = require('express');
var Authrouter = express.Router();

//Authentications all TABs.
Authrouter.get('/pages-404', function(req, res)
{
      res.render('Pages/pages_404');
});

Authrouter.get('/pages-500', function(req, res)
{
      res.render('Pages/pages_500');
});
Authrouter.get('/pages-maintenance', function(req, res)
{
      res.render('Pages/pages_maintenance');
});


module.exports = Authrouter;