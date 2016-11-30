var mongoose = require('mongoose');

var runwaySchema = new mongoose.Schema({
    icao: String,
    runwayId: String,
    runwayLength: Number,
    runwayHeadingMagnetic: Number,
    runwayHeadingTrue: Number
});

var airportSchema = new mongoose.Schema({
	iata: String,
	icao: String,
	airportName: String,
	airportCity: String,
	airportLat: Number,
	airportLon: Number,
	airportElevation: Number,
	runways: [runwaySchema]
});

mongoose.model('airportData', airportSchema, 'airportData');