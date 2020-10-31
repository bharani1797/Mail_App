
const nodemailer = require('nodemailer');
var express = require('express');
var app = express();    //Creating the express app


var port = process.env.PORT || 3002;

//OAuth 2.0 Authentication variable
var auth = {
    type: 'oauth2',
    user: 'USER_MAIL_ID',
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    refreshToken: 'YOUR_REFRESH_TOKEN',
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//To enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//API endpoint to send mail
app.post('/send', function (req, res) {
    response = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }


    var mailOptions = {     //Parameters
        from: req.body.name,
        to: 'TO_EMAIL_ADDRESS',
        subject: 'My site contact from: ' + req.body.name,
        text: req.body.message,
        html: 'Message from: ' + req.body.name + '<br></br> Email: ' + req.body.email + '<br></br> Message: ' + req.body.message,
    };

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: auth,
    });


    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            return console.log(err);
        } else {
            console.log(JSON.stringify(res));
        }
    });
})

// start the server
app.listen(port);

