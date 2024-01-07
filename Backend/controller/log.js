const express = require('express')
const router = express.Router();
const path = require('path');

//                 LOGS

router.get("/application.log", (req, res) => {
  const file = path.join(__dirname, '..','log', 'app.log')
  var d = new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'})
  var filename = `application_logs-${d}.log`
  filename = filename.replaceAll('/','_')
  filename = filename.replaceAll(':','_')
  filename = filename.replaceAll(',','')
  res.download(file, filename)
})

router.get("/error.log", (req, res) => {
  const file = path.join(__dirname, '..','log', 'error.log')
  var d = new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'})
  const filename = `error_logs-${d}.log`
  filename = filename.replaceAll('/','_')
  filename = filename.replaceAll(':','_')
  filename = filename.replaceAll(',','')
  res.download(file, filename)
})

module.exports = router