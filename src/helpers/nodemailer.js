const nodemailer = require("nodemailer");
const googleapis = require("googleapis");
const fs = require("fs");
const hbs = require("nodemailer-express-handlebars");
const exphbs = require("express-handlebars");

const Oauth2 = googleapis.google.auth.OAuth2;

const createTransporter = async () => {
  const oauthClient = new Oauth2(
    process.env.G_CLIENT_ID,
    process.env.G_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauthClient.setCredentials({ refresh_token: process.env.G_REFRESH_TOKEN });
  //Obtner el token de accesso.
  try {
    const accessToken = await oauthClient.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "Oauth2",
        user: process.env.G_USER,
        accessToken,
        clientId: process.env.G_CLIENT_ID,
        clientSecret: process.env.G_CLIENT_SECRET,
        refreshToken: process.env.G_REFRESH_TOKEN,
      },
    });

    return transporter;
  } catch (error) {
    console.log(error);
  }
};

const sendEmail = async (options) => {
  const hbsOptions = {
    viewEngine: {
      
    }
  }
  try {
    const gmailTransporter = await createTransporter();
    gmailTransporter.use(
      "compile",
      hbs({
        viewEngine: exphbs(),
        viewPath: "src/views",
      })
    );
    const results = await gmailTransporter.sendMail(options);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

const emailOptions = {
  subject: "Email confirmation",
  to: "",
  bcc: "",
  from: process.env.G_USER,
};

module.exports = {
  sendEmail,
  emailOptions,
};
