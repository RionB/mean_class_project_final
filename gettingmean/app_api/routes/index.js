var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');
var ctrlAirplanes = require('../controllers/airplanes');

router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);

// reviews
router.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

//airplane stuff
router.get('/flap/:flapid', ctrlAirplanes.flapReadOne);
router.get('/flap/', ctrlAirplanes.flapReadOne);
router.get('/flapv/:flapvid', ctrlAirplanes.flapvReadOne);
router.get('/flapv/', ctrlAirplanes.flapvReadOne);
router.get('/vfri/:vfriid', ctrlAirplanes.vfriReadOne);
router.get('/vfri/', ctrlAirplanes.vfriReadOne);

module.exports = router;
