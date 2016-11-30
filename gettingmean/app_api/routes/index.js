var express = require('express');
var router = express.Router();
var ctrlAirplanes = require('../controllers/airplanes');
var ctrlAirplaneData = require('../controllers/airplane');
var ctrlAirportData = require('../controllers/airport');

router.get('/climbData/:weight', ctrlAirplaneData.climbDataReadOne);
router.get('/climbData', ctrlAirplaneData.climbDataReadAll);
router.get('/landingData/:weight', ctrlAirplaneData.landingDataReadOne);
router.get('/airportData', ctrlAirportData.airportDataReadAll);

router.get('/flap/:flapid', ctrlAirplanes.flapReadOne);
router.get('/flap/', ctrlAirplanes.flapReadOne);
router.get('/flapv/:flapvid', ctrlAirplanes.flapvReadOne);
router.get('/flapv/', ctrlAirplanes.flapvReadOne);
router.get('/vfri/:vfriid', ctrlAirplanes.vfriReadOne);
router.get('/vfri/', ctrlAirplanes.vfriReadOne);

module.exports = router;
