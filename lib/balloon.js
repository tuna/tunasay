var os = require("os");
var stringWidth = require("string-width")

exports.say = function (text, wrap, offset) {
	delimiters = {
		first : ["/", "\\"],
		middle : ["|", "|"],
		last : ["\\", "/"],
		only : ["<", ">"]
	};

	return format(text, wrap, delimiters, offset);
}

exports.think = function (text, wrap, offset) {
	delimiters = {
		first : ["(", ")"],
		middle : ["(", ")"],
		last : ["(", ")"],
		only : ["(", ")"]
	};

	return format(text, wrap, delimiters, offset);
}

function format (text, wrap, delimiters, offset) {
	var lines = split(text, wrap);
	var maxLength = max(lines);

	var offsetStr = "";
	for (var i = 0; i < offset; i++) {
		offsetStr += " ";
	}

	var balloon;
	if (lines.length === 1) {
		balloon = [
			offsetStr + " " + top(maxLength),
			offsetStr + delimiters.only[0] + " " + lines[0] + " " + delimiters.only[1],
			offsetStr + " " + bottom(maxLength)
		];
	} else {
		balloon = [offsetStr + " " + top(maxLength)];

		for (var i = 0, len = lines.length; i < len; i += 1) {
			var delimiter;

			if (i === 0) {
				delimiter = delimiters.first;
			} else if (i === len - 1) {
				delimiter = delimiters.last;
			} else {
				delimiter = delimiters.middle;
			}

			balloon.push(offsetStr + delimiter[0] + " " + pad(lines[i], maxLength) + " " + delimiter[1]);
		}

		balloon.push(offsetStr + " " + bottom(maxLength));
	}

	return balloon.join("\n"); //os.EOL
}

function split (text, wrap) {
	text = text.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '').replace(/\t/g, '        ');

	var lines = [];
	if (!wrap) {
		lines = text.split("\n");
	} else {
		var start = 0;
		while (start < text.length) {
			var nextNewLine = text.indexOf("\n", start);

			var wrapAt = Math.min(start + wrap, nextNewLine === -1 ? text.length : nextNewLine);

			lines.push(text.substring(start, wrapAt));
			start = wrapAt;

			// Ignore next new line
			if (text.charAt(start) === "\n") {
				start += 1;
			}
		}
	}

	return lines;
}

function max (lines) {
	var max = 0;
	for (var i = 0, len = lines.length; i < len; i += 1) {
		if (stringWidth(lines[i]) > max) {
			max = stringWidth(lines[i]);
		}
	}

	return max;
}

function pad (text, length) {
	return text + (new Array(length - text.length + 1)).join(" ");
}

function top (length) {
	return new Array(length + 3).join("_");
}

function bottom (length) {
	return new Array(length + 3).join("-");
}
