//const nodemailer = require('nodemailer')

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

const sendEmail = async (mailOptions) =>{

    const {SMTP_HOST,SMTP_PORT,EMAIL_USERNAME,EMAIL_PASS}=process.env

        let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: 'baghjbn@gmail.com',
    //         pass: 'Bakul7908@'
    //     }

        host : SMTP_HOST ,
        port : SMTP_PORT  ,
        auth :{
            user : EMAIL_USERNAME ,
            pass : EMAIL_PASS
        } ,
         tls: {rejectUnauthorized:true,
            minVersion: "TLSv1.2"
            }
       
    })

    let info = await transporter.sendMail(mailOptions) ; 

    console.log(`Message send : ${info.messageId}`)

}


module.exports = sendEmail


