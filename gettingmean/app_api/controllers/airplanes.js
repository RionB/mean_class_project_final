var mongoose = require('mongoose');
var Flap = mongoose.model('Flap');
var FlapV = mongoose.model('Flapv');
var VFRI = mongoose.model('Vfri');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.flapReadOne = function(req, res) {
  console.log('Finding flap details', req.params);
  if (req.params && req.params.flapid) {
    console.log('The flapid', req.params.flapid);
    Flap
      .findById(req.params.flapid)
      .exec(function(err, flap) {
        if (!flap) {
          sendJSONresponse(res, 404, {
            "message": "flapid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flap);
        sendJSONresponse(res, 200, flap);
      });
  } else {
    Flap.find({}, null, function (err, flap) {
        if (!flap) {
          sendJSONresponse(res, 404, {
            "message": "flaps were not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flap);
        sendJSONresponse(res, 200, flap);
      });
  }
};

module.exports.vfriReadOne = function(req, res) {
  console.log('Finding vfri details', req.params);
  if (req.params && req.params.vfriid) {
    VFRI
      .findById(req.params.vfriid)
      .exec(function(err, flap) {
        if (!flap) {
          sendJSONresponse(res, 404, {
            "message": "VFRIid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flap);
        sendJSONresponse(res, 200, flap);
      });
  } else {
    VFRI.find({}, null, function (err, flap) {
        if (!flap) {
          sendJSONresponse(res, 404, {
            "message": "VFRIs were not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flap);
        sendJSONresponse(res, 200, flap);
      });
  }
};

module.exports.flapvReadOne = function(req, res) {
  console.log('Finding flapv details', req.params);
  if (req.params && req.params.flapvid) {
    FlapV
      .findById(req.params.flapvid)
      .exec(function(err, flap) {
        if (!flap) {
          sendJSONresponse(res, 404, {
            "message": "flapid not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flap);
        sendJSONresponse(res, 200, flap);
      });
  } else {
    FlapV.find({}, null, function (err, flap) {
        if (!flap) {
            console.log("We fail here");
          sendJSONresponse(res, 404, {
            "message": "FlapV's were not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(flap);
        sendJSONresponse(res, 200, flap);
      });
  }
};