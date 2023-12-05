const router = require('express').Router();
const getRoutes = require('./getRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', getRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;