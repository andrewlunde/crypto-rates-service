/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");
const pug = require('pug');
const util = require('util');

module.exports = () => {
	var app = express.Router();

	//Dynamic Items
	app.get("/template.html", (req, res) => {
		console.log("served as dynamic from template");
		res.send(pug.renderFile('templates/template.pug', {
			name: 'Timothy'
		  }));
	});

	app.get(["/index.html","/"], (req, res) => {
		console.log("served as dynamic from template");
		console.log(req.headers['x-forwarded-host']);
		// res.send(util.inspect(req.headers, {depth: 1}));
		console.log(util.inspect(req.headers, {depth: 1}));

		res.send(pug.renderFile('templates/index.pug', {
			name: 'Timothy'
		  }));
	});


	return app;
};