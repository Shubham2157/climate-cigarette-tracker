const express = require('express')
const router = express.Router();
var logger = require('../config/logger')
var { getAQI, calculateCigaretteFromAQI } = require('../service');
const baseURL = '/api/v1';

router.post("/send/location", async (req, res) => {
    logger.info(`Requested ${req.method} method at ${baseURL + req.url}`)
    try {
        var {lat, lon, location} = req.body
        logger.info(`User Data lat =  ${lat} long = ${lon} location = ${location}`)
        var aqi = await getAQI(lat, lon, location)
        var noOfCigarette = await calculateCigaretteFromAQI(aqi)
        logger.info(noOfCigarette);
        return res.status(200).json(
            {
                'msg' : 'success',
                lat,
                lon,
                location,
                aqi,
                noOfCigarette
            });
    } catch (error) {
        logger.error("error : "+error)
        res.status(500).json({ "errors": [{ "title": "Internal Server Error", "code": "500", "status": error }] })
    }
    
});

module.exports = router