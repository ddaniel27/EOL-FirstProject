const mysql = require('mysql');
require('dotenv').config()

const configConnection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

function createConnection() {
    return mysql.createConnection(configConnection)
}

async function addNewContactInfo({email, country, name, lastname, address, wallet, city, province, zipcode, phone}, connection, token){
    try{
        const countriesQuery = `(SELECT code FROM countries WHERE name='${country})'`
        const provinceQuery = `(SELECT id FROM provinces WHERE name='${province})'`
        const tokenQuery = `INSERT INTO transactions (token) VALUES ('${token}');`
        const contactQuery = `INSERT INTO contact_information (email, country, name, lastname, address, wallet, city, province, zipcode, phone, transactionID) VALUES ('${email}', '${countriesQuery}', '${name}', '${lastname}', '${address}', '${wallet}', '${city}', '${provinceQuery}', '${zipcode}', '${phone}', (SELECT id FROM transactions WHERE token='${token}'));`
        
        await connection.query(tokenQuery, (err, result) => {
            if(err) throw err
            console.log(result)
        })
        
        await connection.query(contactQuery, (err, result) => {
            if(err) throw err
            console.log(result)
        })
    }catch(err){
        console.log(err)
    }
}

function addOrderID(connection, orderID, token){
    const query = `UPDATE transactions SET orderID='${orderID}' WHERE token='${token}';`
    try{

        connection.query(query, (err, result) => {
            if(err) throw err
            console.log(result)
        })
    }catch(err){
        console.log(err)
    }
}

async function getEmailByToken(connection, token){
    const query = `SELECT email FROM contact_information WHERE transactionID=(SELECT id FROM transactions WHERE token='${token}');`
    let email = ''
    try{

        await connection.query(query, (err, result) => {
            if(err) throw err
            email = result[0].email
        })
    }catch(err){
        return err
    }
    return email
}


module.exports = {
    createConnection,
    addNewContactInfo,
    addOrderID,
    getEmailByToken
}
