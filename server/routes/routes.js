const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authentication');

const garcon_routes_get = require('./get/garcon.get');
const admin_routes_get = require('./get/admin.get');
const public_routes_get = require('./get/public.get');

const garcon_routes_post = require('./post/garcon.post');
const admin_routes_post = require('./post/admin.post');
const public_routes_post = require('./post/public.post');

// Rotas Get
router.use('/', public_routes_get);
router.use('/garcon', garcon_routes_get);
router.use('/admin', admin_routes_get);

// Rotas Post
router.use('/', public_routes_post);
router.use('/garcon', garcon_routes_post);
router.use('/admin', admin_routes_post);

module.exports = router;