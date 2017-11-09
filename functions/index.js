const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp(functions.config().firebase);

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(event => {
  const snapShot = event.data;
  const val = snapShot.val();

  if (snapShot.previous.val() || !snapShot.val().name) {
    return false
  }

  const mailOptions = {
    to: 'contact@grantstampfli.com',
    subject: `Contact Form from ${val.name}`,
    html: val.html
  }

  return mailTransport.sendMail(mailOptions).then(res => {
    return console.log('Contact form sent!')
  })
})
