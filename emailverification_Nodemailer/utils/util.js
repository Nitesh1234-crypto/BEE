const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
  try {
    console.log(email);
    const transporter = nodemailer.createTransport({
    //   host: process.env.HOST,
      service: "gmail",
    //   port: 465,
    //   secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      authMethod: "PLAIN"
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

module.exports = sendEmail;