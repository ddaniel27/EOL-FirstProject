const { check } = require("express-validator");

// Controladores
const { sendEmail } = require("../controllers/sendEmail.controller");
const {addNewContactInfo, createConnection} = require("../controllers/sqlQueries.controller")
const {getNewToken, validateToken} = require("../controllers/uuid.controller")
const myConnection = createConnection()
module.exports = (router) => {
  //Mailing
  router.post(
    "/sendinfo",
    [
      check("email").normalizeEmail().isEmail(),
      check("country").isAlpha(),
      check("name").isAlpha(),
      check("lastname").isAlpha(),
      check("address").isAlphanumeric(),
      check("wallet").isAlphanumeric(),
      check("city").isAlpha(),
      check("province").isAlpha(),
      check("zipcode").isInt(),
      check("phone").isInt(),
    ],
    async function toDB (req,res) {
      await addNewContactInfo(req,myConnection,getNewToken())
      sendEmail(req,res)
    }
  );
};
