const {body, validationResult } = require("express-validator");

// Controladores
const { sendEmail } = require("../controllers/sendEmail.controller");
const {addNewContactInfo, createConnection, addOrderID, getEmailByToken} = require("../controllers/sqlQueries.controller")
const {getNewToken, validateToken} = require("../controllers/uuid.controller")
const myConnection = createConnection()

module.exports = (router) => {
  //Mailing
  router.post(
    "/sendinfo",
    [
      body("email").isEmail(),
      body("country").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("name").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("lastname").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("address").isAlphanumeric('en-US', {ignore: ' -'}),
      body("wallet").isAlphanumeric(),
      body("city").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("province").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("zipcode").isInt(),
      body("phone").isInt(),
    ],
    async (req,res) => {
        const errors = validationResult(req).errors
        if(errors.length){
          res.status(400).json({errors:errors})
          return
        }
        const newObj = {
            email: req.body.email.toLowerCase(),
            country: req.body.country.toLowerCase(),
            name: req.body.name.toLowerCase(),
            lastname: req.body.lastname.toLowerCase(),
            address: req.body.address.toLowerCase(),
            wallet: req.body.wallet.toLowerCase(),
            city: req.body.city.toLowerCase(),
            province: req.body.province.toLowerCase(),
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }
        const sendEmailObj ={
          token: getNewToken(),
          email: newObj.email,
          isAuth: true
        }
        try{
          await addNewContactInfo(newObj,myConnection,sendEmailObj.token)
          await sendEmail(sendEmailObj,res)
        }catch(err){
          console.log(err)
        }
    }
  );
  
  router.post(
    "/sendinfo",
    [
      body("email").isEmail(),
      body("country").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("name").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("lastname").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("address").isAlphanumeric('en-US', {ignore: ' -'}),
      body("wallet").isAlphanumeric(),
      body("city").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("province").isAlpha('en-US', {ignore: /[\xE0-\xFF' ']/g}),
      body("zipcode").isInt(),
      body("phone").isInt(),
    ],
    async (req,res) => {
        const errors = validationResult(req).errors
        if(errors.length){
          res.status(400).json({errors:errors})
          return
        }
        const newObj = {
            email: req.body.email.toLowerCase(),
            country: req.body.country.toLowerCase(),
            name: req.body.name.toLowerCase(),
            lastname: req.body.lastname.toLowerCase(),
            address: req.body.address.toLowerCase(),
            wallet: req.body.wallet.toLowerCase(),
            city: req.body.city.toLowerCase(),
            province: req.body.province.toLowerCase(),
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }
        const sendEmailObj ={
          token: getNewToken(),
          email: newObj.email,
          isAuth: true
        }
        try{
          await addNewContactInfo(newObj,myConnection,sendEmailObj.token)
          await sendEmail(sendEmailObj,res)
        }catch(err){
          console.log(err)
        }
    }
  );

  router.post(
    "/paypaltransaction",
    [
      body("token").isAlphanumeric('en-US', {ignore: ' -'}),
      body("orderID").isAlphanumeric('en-US', {ignore: ' -'})
    ],
    async (req,res) => {
        const errors = validationResult(req).errors
        if(errors.length){
          res.status(400).json({errors:errors})
          return
        }
        const token = req.body.token
        const orderID = req.body.orderID
        try{
          const isValid = validateToken(token)
          if(!isValid){
            res.status(400).json({errors:["Invalid token"]})
            return
          }
          await addOrderID(myConnection, orderID, token)
          const email = await getEmailByToken(myConnection, token)
          await sendEmail({email: email, token: orderID, isAuth:false},res)
        }catch(err){
          console.log(err)
        }
    }
    )

}
