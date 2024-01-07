const logger = require("../config/logger");
const axios = require("axios");
const { calcPM25 } = require('../utils')
const APIKEY = process.env.NINJASAPIKEY;

function getAQI(lat, lon, location) {
  try { 
    if(lat && lon){
      return getCurrentAQI(lat, lon);
    }else if(location){
      return getCurrentAQIUsingLoc(location);
    } else {
      return "Input missing"
    }
    
  } catch (error) {
    logger.error("error : " + error);
    return {
      errors: [{ title: "Internal Server Error", code: "500", status: error }],
    };
  }
}

function calculateCigaretteFromAQI(aqi) {
  try {
    //https://www.epa.gov/sites/default/files/2014-05/documents/zell-aqi.pdf
   // https://github.com/jasminedevv/AQI2cigarettes/blob/master/src/utils.ts
    var noOfCeg = parseFloat(calcPM25(aqi)/22).toFixed(2);
    logger.info('No of Cigarette calculated - ' + noOfCeg)
   return noOfCeg;
  } catch (error) {
    logger.error("error : " + error);
    return {
      errors: [{ title: "Internal Server Error", code: "500", status: error }],
    };
  }
}

async function getCurrentAQIUsingLoc(city) {
  try {
    //https://wind.waqi.info/mapq/nearest?geo=1/23.963044/86.8027604 ,
    //https://api.geoapify.com/v1/geocode/search?text=jamtara&limit=10&format=json&apiKey=key
    
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/airquality?city=${city}`,
      { headers: { 'X-Api-Key': APIKEY } }
    );
    logger.info("Cureent AQI for search result- " + response.data.overall_aqi);
    return response.data.overall_aqi;
    
    //return "90";
  } catch (error) {
    logger.error(error);
  }
}

module.exports = { getAQI, calculateCigaretteFromAQI };
