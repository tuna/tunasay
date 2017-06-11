var balloon = require("./lib/balloon");
var cows = require("./lib/cows");
var faces = require("./lib/faces");

exports.say = function (options) {
	return doIt(options, true);
};

exports.think = function (options) {
	return doIt(options, false);
};

exports.list = cows.list;

function doIt (options, sayAloud) {
	var cow = cows.get(options.f || "default");
	var face = faces(options);
	face.thoughts = sayAloud ? "\\" : "o";

	var action = sayAloud ? "say" : "think";

	return balloon[action](options.text || options._.join(" "), options.n ? null : options.W, options.o) + "\n" + cow(face);
}
