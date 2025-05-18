
const nodemailer = require('nodemailer');

const sendEmail = async (to, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to,
    subject: 'New Notification',
    text: message,
  });
};

module.exports = sendEmail;



// const nodemailer = require('nodemailer');

// const sendEmail = async (to, message) => {
//   const transporter = nodemailer.createTransport({
//     host: 'sandbox.smtp.mailtrap.io',
//     port: 2525,
//     auth: {
//       user: process.env.User,
//       pass: process.env.PASSWORD
//     }
//   });

//   await transporter.sendMail({
//     from: '"Notification Service" <no-reply@example.com>',
//     to,
//     subject: 'New Notification',
//     text: message
//   });
// };

// module.exports = sendEmail;
