const express = require('express')
const nodemailer = require('nodemailer')
const validator = require('validator')
const xssFilters = require('xss-filters')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'Здравствуй!' })
})

app.post('/', function (req, res) {
  const attributes = ['name', 'phone', 'date', 'time', 'message']
  const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))
  const someInvalid = sanitizedAttributes.some(r => !r)

  if (someInvalid) {
    return res.status(422).json({ 'error': 'Ugh.. That looks unprocessable!' })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json({ 'message': 'Письмо успешно отправлено!' })
})
module.exports = {
  path: '/api/appointment',
  handler: app
}

const validateAndSanitize = (key, value) => {
  const rejectFunctions = {
    name: v => v.length < 4,
    message: v => v.length < 25
  }

  // If object has key and function returns false, return sanitized input. Else, return false
  return rejectFunctions.hasOwnProperty(key) && !rejectFunctions[key](value) && xssFilters.inHTMLData(value)
}

const sendMail = (name, email, msg) => {
  let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  })
  transporter.sendMail({
    from: email,
    to: 'lipsf1337@gmail.com',
    subject: 'New contact form message',
    text: msg
  })
}