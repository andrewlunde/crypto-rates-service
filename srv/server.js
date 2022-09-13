const express = require('express');
const app = express();
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

app.get('/srv', function (req, res) {
    // x_Disable
    // if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        res.status(200).send('crypto-rates-service');
    // } else {
    //     res.status(403).send('Forbidden');
    // }
});

app.get('/srv/user', function (req, res) {
    // x_Disable
    // if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        res.status(200).json(req.user);
    // } else {
        // res.status(403).send('Forbidden');
    // }
});







const port = process.env.PORT || 5001;
app.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});