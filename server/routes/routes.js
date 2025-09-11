const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authentication');

// Rotas Get
const public_routes_get = require('./get/public.get');
const garcon_routes_get = require('./get/garcon.get');
const admin_routes_get = require('./get/admin.get');

// Rotas Post
const public_routes_post = require('./post/public.post');
const login_routes_post = require('./post/login');
const garcon_routes_post = require('./post/garcon.post');
const admin_routes_post = require('./post/admin.post');

router.use('/', public_routes_get);
router.use('/', public_routes_post);
router.use('/login', login_routes_post);

router.use('/garcon', authenticateJWT, garcon_routes_get);
router.use('/garcon', authenticateJWT, garcon_routes_post);

router.use('/admin', authenticateJWT, admin_routes_get);
router.use('/admin', authenticateJWT, admin_routes_post);

module.exports = router;
