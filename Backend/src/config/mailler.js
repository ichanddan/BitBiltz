const nodemailer = require("nodemailer");

module.exports = {
  transporter: async () =>
    nodemailer.createTransport({
      secure: true,
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASS,
      },
    }),
};
