var mongoose = require('mongoose');
var airportData = mongoose.model('airportData');

var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
};

module.exports.airportDataReadAll = function(req, res)
{
  console.log("Finding all Climb Data Records", req);
  airportData
    .find({})
    .exec(function(err, airportData){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(airportData);
      sendJSONresponse(res, 200, airportData);
    });
}