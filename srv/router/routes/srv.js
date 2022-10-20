/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");
const util = require('util');

module.exports = () => {
	var app = express.Router();

	//SRV
	app.get("/", (req, res) => {
        console.log("served from srv.js");
        // console.log(util.inspect(req.hostname, {depth: 1}));
        console.log(req.headers['x-forwarded-host']);
		res.send(util.inspect(req.headers, {depth: 1}));
	});
	return app;
};