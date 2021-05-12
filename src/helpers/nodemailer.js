const nodemailer = require("nodemailer");
const googleapis = require("googleapis");
require("dotenv").config;

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
        clienteSecret: process.env.G_CLIENT_SECRET,
        refreshToken: process.env.G_REFRESH_TOKEN,
      },
    });

    return transporter;
  } catch (error) {
    console.log(error);
  }
};

const sendEmail = async (options) => {
  try {
    const gmailTransporter = await createTransporter();
    await gmailTransporter.sendMail(options);
  } catch (error) {
    console.log(error);
  }
};

const emailOptions = {
  subject: "Porbando el envío de correos",
  text: "Holoa mundo! probando el envío de correos",
  to: "jesus_mares_t@hotmail.com",
  from: process.env.G_USER,
};

//sendEmail(emailOptions);

module.exports = {
  sendEmail,
  emailOptions,
};
