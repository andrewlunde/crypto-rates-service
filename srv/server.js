/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
"use strict";

const express = require('express');
const app = express();
var server = require("http").createServer();
const xsenv = require('@sap/xsenv');
xsenv.loadEnv();

// x_Disable
// const services = xsenv.getServices({
//     uaa: { label: 'xsuaa' }
// });

// x_Disable
// const xssec = require('@sap/xssec');
// const passport = require('passport');
// passport.use('JWT', new xssec.JWTStrategy(services.uaa));
// app.use(passport.initialize());
// app.use(passport.authenticate('JWT', {
//     session: false
// }));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", function (req, res) {

// 	var responseStr = "";
// 	responseStr += "<!DOCTYPE HTML><html><head><title>Crypto Rates SRV</title></head><body><h3>Crypto Rates SRV</h3><br />";
// 	responseStr += "<a href=\"/srv\">The SRV Links page.</a><br />";
// 	responseStr += "<a href=\"/adm\">The ADM Links page.</a><br />";
// 	responseStr += "<br />";
// 	responseStr += "<a href=\"/\">Return to App Router.</a><br />";
// 	responseStr += "</body></html>";
// 	res.status(200).send(responseStr);
// });

// app.get("/index.html", function (req, res) {

// 	var responseStr = "";
// 	responseStr += "<!DOCTYPE HTML><html><head><title>Crypto Rates SRV</title></head><body><h3>Crypto Rates SRV</h3><br />";
// 	responseStr += "<a href=\"/srv\">The SRV Links page.</a><br />";
// 	responseStr += "<a href=\"/adm\">The ADM Links page.</a><br />";
// 	responseStr += "<br />";
// 	responseStr += "<a href=\"/\">Return to App Router.</a><br />";
// 	responseStr += "</body></html>";
// 	res.status(200).send(responseStr);
// });

app.get("/srv", function (req, res) {

	var responseStr = "";
	responseStr += "<!DOCTYPE HTML><html><head><title>Crypto Rates SRV</title></head><body><h3>Crypto Rates SRV</h3><br />";
	responseStr += "<a href=\"/srv/user\">User Details.</a><br />";
	responseStr += "<br />";
	responseStr += "<a href=\"/\">Return to SRV Root.</a><br />";
	responseStr += "</body></html>";
	res.status(200).send(responseStr);
});
 
app.get('/srv/user', function (req, res) {
    // x_Disable
    // if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        res.status(200).json(req.user);
    // } else {
        // res.status(403).send('Forbidden');
    // }
});


//Setup Routes
var router = require("./router")(app, server);

const port = process.env.PORT || 5001;
server.on("request", app);
server.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});