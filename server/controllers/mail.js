


var nodemailer = require('nodemailer')
var ses = require('nodemailer-ses-transport');

var mailController = {

    email: function(req, res){
            let transporter = nodemailer.createTransport(ses({
              host: process.env.HOST,
              service: 'gmail',
              secure: false,
              port: 25,
              accessKeyId: process.env.ACCESS_KEY_ID,
              secretAccessKey: process.env.SECRET_ACCESS_KEY,
              tls: {
                rejectUnauthorized: false
              }
          }));

              let HelperOptions = {
                from: `<${process.env.EMAIL}>`,
                to: `${process.env.EMAIL}`,
                subject: `Website inquiry from ${req.body.name}`,
                text: `Message from ${req.body.name}:`+'\n'+'\n'+`${req.body.message}` +'\n' +'\n' + `Click here to reply: ${req.body.email}`
              }
              transporter.sendMail(HelperOptions, (err, info) => {
                if(err){
                    console.log('error')
                  return res.json({success: false, err})
                }
                console.log("email successfully sent")
                return res.json({success: true, info})
              })
    },
}

module.exports = mailController;
