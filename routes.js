var request = require('request');
module.exports = {
  'spotify:track::track': function(res) {
    var uri = res.params.track;

    var t = this;
	var r = res;

    var response = request.get('http://ws.spotify.com/lookup/1/.json?uri=spotify:track:' + uri, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    response = JSON.parse(body);
    song = (response.track.name);
    artist = (response.track.artists[0].name)

  }
t.say(r.channel,artist + ' - ' + song);
process.on('uncaughtException', function(err) {
  console.error(err);
});
});
  }

}