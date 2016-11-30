var mongoose = require('mongoose');

var climbSchema = new mongoose.Schema({
	weight: Number,
	vfri5: Number,
	vfri10: Number,
	vfri15: Number,
	vclmb: Number
});

mongoose.model('climbData', climbSchema, 'climbData');

var takeoffSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	vr: Number,
	v2: Number,
	atOrBelow20: Boolean,
	above20: Boolean,
	altitude: Number,
});

mongoose.model('takeoffData', takeoffSchema, 'takeoffData');

var landingSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	vApp: Number,
	vRef: Number,
	vGa: Boolean,
});

mongoose.model('landingData', landingSchema, 'landingData');