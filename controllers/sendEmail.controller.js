const { transporter } = require("../email/email");

const sendEmail = async (req, res) => {

  const {to, subject, text} = req.body

  const mailData = {
    from: '"EOL Development" <EOL@example.com>',
    to: to,
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