const { check } = require("express-validator");

// Controladores
const { sendEmail } = require("../controllers/sendEmail.controller");

module.exports = (router) => {
  //Mailing
  router.post(
    "/sendVerificateEmail",
    [
      check("email").normalizeEmail().isEmail(),
      check("country").isAlpha(),
      check("name").isAlpha(),
      check("lastname").isAlpha(),
      check("address").isAlphanumeric(),
      check("wallet").isBTCAddress(),
      check("city").isAlpha(),
      check("province").isAlpha(),
      check("zipcode").isInt(),
      check("phone").isInt(),
    ],
    sendEmail
  );
};
