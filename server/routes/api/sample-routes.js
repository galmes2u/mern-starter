const router = require('express').Router();

// Import any controllers needed here
const { getAllSamples, getSampleById, createSample } = require('../../controllers/sample-controller');

// Declare the routes that point to the controllers above
router.route('/').get(getAllSamples);
router.route('/').post(createSample);

router.route('/:id').post(getSampleById);

module.exports = router;
