/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");
const nunjucks = require('nunjucks');
const util = require('util');

nunjucks.configure('templates', { autoescape: true });

module.exports = () => {
	var app = express.Router();

	//Dynamic Items

	app.get(["/index.html","/"], (req, res) => {
		console.log("served as dynamic from template");
		var hostname = "localhost";

		if (((typeof req) == "object") && ((typeof req.headers) == "object") && ((typeof req.headers['x-forwarded-host']) == "string")) {
			hostname = req.headers['x-forwarded-host'];
		}
		
		console.log("hostname: " + hostname);
		// res.send(util.inspect(req.headers, {depth: 1}));
		// console.log(util.inspect(req.headers, {depth: 1}));
		switch (hostname) {
			case 'www.cryptoassetssubledger.com':
			case 'cryptoassetssubledger.com':
				res.send(nunjucks.render('index.njk', { title: hostname }));
				break;
			case 'rates.cryptoassetssubledger.com':
				res.send(nunjucks.render('rates.njk', { title: hostname }));
				break;
			case 'points.cryptoassetssubledger.com':
				res.send(nunjucks.render('points.njk', { title: hostname }));
				break;
			default:
				console.log("Error: " + hostname + " is not handled.");
				res.send(nunjucks.render('index.njk', { title: hostname }));
		}
	});

	return app;
};