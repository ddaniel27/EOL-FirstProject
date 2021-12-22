const { check } = require("express-validator");

// Controladores
const { sendEmail } = require("../controllers/sendEmail.controller");

module.exports = (router) => {

  //Mailing
  router.post("/sendVerificateEmail", sendEmail);

};