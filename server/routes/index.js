const express = require('express');
const router = express.Router({ mergeParams: true });

// /api/auth
router.use('/auth', require('./auth.route'));
router.use('/users', require('./users.route'));
router.use('/posts', require('./posts.route'));

module.exports = router;
