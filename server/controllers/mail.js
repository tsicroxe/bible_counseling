


var nodemailer = require('nodemailer')
const xoauth2 =('xoauth2')
var ses = require('nodemailer-ses-transport');

var mailController = {



    email: function(req, res){


      console.log(req.body)

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
                from: " <arbanakus@gmail.com>",
                to: "arbanakus@gmail.com",
                subject: `Email: ${req.body.email}`,
                text: `Message:`+'\n'+'\n'+`${req.body.message}` +'\n' +'\n' + `<a href="mailto:${req.body.email}" target="_top">this link</a>`
              }
              transporter.sendMail(HelperOptions, (err, info) => {
                if(err){
                    console.log('error')
                  return res.json({success: false, err})
                }
                console.log("email successfully sent")
                return res.json({success: true, info})
              })

    //   let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     secure: false,
    //     port: 25,
    //     auth: {
    //             XOAuth2: {
    //                 user: process.env.EMAIL,
    //                 clientId: 'arbanakus@gmail.com',
    //                 clientSecret: 'krRE,8NfU_yy!-ArM4JA4p^}+8%J6uPiW:]XUc%R=sw_L=PU@_',
    //                 refreshToken: '1/498mPQVLItGR5URQys_giKwkvhLw8EFpORFkbRKncazsGM7XlHimE944Ew6wiW-P',
    //
    //             }
    //         // user: process.env.EMAIL,
    //         // pass: process.env.PASSWORD
    //     },
    //
    //     tls: {
    //       rejectUnauthorized: false
    //     }
    //
    //
    // });
    //     console.log('req.body', req.body)
    //
    //     let HelperOptions = {
    //       from: "CR Biblical Counseling <arbanakus@gmail.com>",
    //       to: 'tsicroxes@gmail.com',
    //       subject: `test`,
    //       text: 'this is a test email'
    //     }
    //     transporter.sendMail(HelperOptions, (err, info) => {
    //       if(err){
    //           console.log(err)
    //         return res.json({success: false, err})
    //       }
    //       console.log("email successfully sent")
    //       return res.json({success: true, info})
    //     })
    //
    },



}




module.exports = mailController;
