const { transporter } = require("../email/email");

const sendEmail = async ({email,token}, res) => {

  const subject = "Authentication email"
  const text = "This is an authentication email. Your token is: " + token

  const mailData = {
    from: '"EOL Development" <EOL@example.com>',
    to: email,
    subject: subject,
    text: text,
    html: "<b>Hello world?</b>",
  }

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error)
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId })
  });
}

module.exports = { sendEmail };