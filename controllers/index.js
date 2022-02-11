const { Router } = require('express');
const homeRoutes = require('./home-routes.js');

Router.use('/', homeRoutes);