/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";
var express = require("express");
const util = require('util');

module.exports = () => {
	var app = express.Router();

	// SAAS Implements the Unified Services SPFI API
	// https://pages.github.tools.sap/atom-cfs/atom-docs/docs/providing-services/registering-services/unified-provisioning/about-unified-provisioning/spfiapi/#spfi-application-in-unified%20services
	app.get("/", (req, res) => {
        console.log("served from saas.js GET/");
        // console.log(util.inspect(req.hostname, {depth: 1}));
        // console.log(req.headers['x-forwarded-host']);
		res.send("served from saas.js GET/");
	});
	
	app.get("/sfpi", (req, res) => {
        console.log("served from saas.js GET/sfpi");
        // console.log(util.inspect(req.hostname, {depth: 1}));
        // console.log(req.headers['x-forwarded-host']);
		res.send("served from saas.js GET/sfpi try POST/sfpi/notify");
	});
	
	app.get("/sfpi/notify", (req, res) => {
        console.log("served from saas.js GET/sfpi");
        // console.log(util.inspect(req.hostname, {depth: 1}));
        // console.log(req.headers['x-forwarded-host']);
		res.send("served from saas.js GET/sfpi/notify expecting POST/sfpi/notify");
	});

	// https://github.wdf.sap.corp/pages/SPC-Cloud-Native-Provisioning/SPFI/sap_spfi_notify_apidoc.html#/SaaS%20Fulfillment%20Notification/spfi.notify.01
	// https://github.wdf.sap.corp/pages/SPC-Cloud-Native-Provisioning/SPFI/sap_spfi_apidoc.html#/
	// https://github.wdf.sap.corp/pages/SPC-Cloud-Native-Provisioning/SPFI/sap_spfi_apidoc.html#/SaaS%20Operations/saasfulfillment.command.status
	
	app.post("/sfpi/notify", (req, res) => {
        console.log("served from saas.js POST/sfpi/notify");
        // console.log(util.inspect(req.hostname, {depth: 1}));
        // console.log(req.headers['x-forwarded-host']);

		// Need to return immediately and then do the work of provisioning the tenant.
		// When done, call the resolve/status
		res.send("served from saas.js POST/sfpi/notify call Unified Provisioning/resolve with Notification ID and action/command");
	});
	

	return app;
};