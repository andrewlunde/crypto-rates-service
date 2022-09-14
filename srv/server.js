const express = require('express');
const app = express();
const xsenv = require('@sap/xsenv');
xsenv.loadEnv();

// x_Disable
// const services = xsenv.getServices({
//     uaa: { label: 'xsuaa' }
// });

const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(':memory:');
const db = new sqlite3.Database('data/crypto-rates.db');
db.exec("PRAGMA synchronous = 2");  // Force write-through to file system

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

app.get('/adm', function (req, res) {
    // x_Disable
    // if (req.authInfo.checkScope('$XSAPPNAME.Admin')) {
        res.status(200).send('crypto-rates-service');
    // } else {
    //     res.status(403).send('Forbidden');
    // }
});

app.get('/adm/user', function (req, res) {
    // x_Disable
    // if (req.authInfo.checkScope('$XSAPPNAME.Admin')) {
        res.status(200).json(req.user);
    // } else {
        // res.status(403).send('Forbidden');
    // }
});

function do_DB_Init() {
    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
    });
    
    //db.close();
}

app.get('/adm/db_init', function (req, res) {
    // x_Disable
    // if (req.authInfo.checkScope('$XSAPPNAME.Admin')) {
        do_DB_Init();
        res.status(200).send('db_init');
    // } else {
        // res.status(403).send('Forbidden');
    // }
});

function do_DB_Fill() {
    db.serialize(() => {
        const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (let i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
    });
    
    //db.close();
}

app.get('/adm/db_fill', function (req, res) {
    // x_Disable
    // if (req.authInfo.checkScope('$XSAPPNAME.Admin')) {
        do_DB_Fill();
        res.status(200).send('db_fill');
    // } else {
        // res.status(403).send('Forbidden');
    // }
});

function do_DB_Dump() {
    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
    
    // db.close();
}

app.get('/adm/db_dump', function (req, res) {
    // x_Disable
    // if (req.authInfo.checkScope('$XSAPPNAME.Admin')) {
        do_DB_Dump();
        res.status(200).send('db_dump');
    // } else {
        // res.status(403).send('Forbidden');
    // }
});



const port = process.env.PORT || 5001;
app.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});