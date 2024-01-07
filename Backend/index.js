require('dotenv').config()
// // database connection
// require('./config/database')

const app = require("./app")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 3001
var logger = require('./config/logger')

app.listen(PORT, ()=>{
    logger.info(`Express Server Started on Port : ${PORT}`)
})