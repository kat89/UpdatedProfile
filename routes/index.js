var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'hirekatiana@gmail.com',
        pass: 'Hireme16'
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

router.get('/send', function (req, res) {
  
    let mailOptions = {
        from: 'hirekatiana@gmail.com',
        to: req.query.to,
        subject: 'Contact Form Message',
        html:  "From: " + req.query.name + "<br>" +
        "User's email: " + req.query.user + "<br>"  +  "Message: " + req.query.text
    }
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('success');
    })
  
  });

module.exports = router;
