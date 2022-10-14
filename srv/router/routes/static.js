/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");

module.exports = () => {
	var app = express.Router();

	// http://cryptoassetssubledger.com/static/FcfVu9E.gif  Example from static folder
	app.use(express.static('static'));

	//Static Items
	app.get("/static.html", (req, res) => {
		console.log("served as static");
		res.send("Served from static.js");
	});


	return app;
};