const router = require('express').Router();
const sampleRoutes = require('./sample-routes');

router.use('/sample', sampleRoutes);

module.exports = router;
