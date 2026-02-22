# Climate Cigarette Tracker - Backend

## Overview

This is the backend service for the Climate Cigarette Tracker application. It handles user requests to calculate the amount of cigarettes consumed due to air pollution based on Air Quality Index (AQI) levels and provides personalized recommendations for prevention and health tips.

**Key Feature**: Converts AQI values into equivalent cigarette consumption metrics to help users understand the health impact of air pollution.

---

## Features

- ✅ **Geolocation-based AQI Calculation**: Get real-time AQI data based on latitude and longitude
- ✅ **Manual AQI Input**: Calculate cigarette equivalents from a direct AQI value
- ✅ **Cigarette Equivalence Conversion**: Convert AQI values to equivalent cigarettes smoked
- ✅ **Comprehensive Logging**: Built-in logging with Winston for debugging and monitoring
- ✅ **API Documentation**: Auto-generated Swagger/OpenAPI documentation
- ✅ **CORS Support**: Cross-Origin Resource Sharing enabled for frontend integration
- ✅ **Error Handling**: Robust error handling with detailed error messages

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Logging**: Winston
- **API Documentation**: Swagger/Swagger UI Express
- **HTTP Client**: axios
- **Environment Management**: dotenv
- **CORS**: cors

---

## Project Structure

```
Backend/
├── app.js                    # Express app configuration
├── index.js                  # Entry point
├── package.json              # Dependencies and scripts
├── swagger.js                # Swagger configuration
├── swagger-output.json       # Generated Swagger documentation
├── config/
│   └── logger.js             # Winston logger configuration
├── controller/
│   ├── index.js              # Main API route handlers
│   └── log.js                # Log download endpoints
├── service/
│   └── index.js              # Business logic for AQI and cigarette calculations
├── utils/
│   └── index.js              # Utility functions (e.g., PM2.5 calculation)
└── data/
    ├── countries.json        # Country data
    ├── states.json           # State data
    └── sample.json           # Sample data
```

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Steps

1. **Clone the repository** (if not already done)
   ```bash
   git clone <repository-url>
   cd Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   Create a `.env` file in the Backend directory:
   ```env
   PORT=3001
   NINJASAPIKEY=<your-api-key-here>
   ```

4. **Generate Swagger Documentation**
   ```bash
   npm run swagger
   ```

---

## Running the Application

### Development Mode (with auto-reload)
```bash
npm run test
```

### Production Mode
```bash
npm start
```

The server will start on the port specified in `.env` (default: `3001`)

---

## API Endpoints

### 1. Calculate AQI from Geolocation
**POST** `/api/v1/send/location`

Calculates AQI based on location coordinates or location name.

**Request Body:**
```json
{
  "lat": 40.7128,
  "lon": -74.0060,
  "location": "New York"
}
```

**Response:**
```json
{
  "msg": "success",
  "lat": 40.7128,
  "lon": -74.0060,
  "location": "New York",
  "aqi": 85,
  "noOfCigarette": 3.86
}
```

**Note:** Either `lat`/`lon` OR `location` must be provided.

---

### 2. Calculate Cigarette Equivalents from AQI
**POST** `/api/v1/calculate`

Calculates the equivalent number of cigarettes based on a provided AQI value.

**Request Body:**
```json
{
  "aqi": 85
}
```

**Response:**
```json
{
  "msg": "success",
  "aqi": 85,
  "noOfCigarette": 3.86
}
```

---

### 3. Download Application Logs (Coming Soon)
**GET** `/logs/downloads/application.log`

---

### 4. Download Error Logs (Coming Soon)
**GET** `/logs/downloads/error.log`

---

## API Documentation

Interactive API documentation is available via Swagger UI:

1. Ensure the server is running on `http://localhost:3001`
2. Navigate to `http://localhost:3001/api-docs`
3. Explore all available endpoints and test them directly in the browser

---

## Environment Variables

Configuration is managed through the `.env` file:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3001` |
| `NINJASAPIKEY` | API key for external AQI service (Ninjas API) | `required` |

---

## Logging

The application uses Winston for comprehensive logging of all requests and errors.

**Log Levels:**
- `info`: General information about requests
- `error`: Error messages and exceptions

**Logged Information:**
- HTTP method and request URL
- User input (latitude, longitude, location, AQI)
- Calculated values
- Error details and stack traces

---

## Air Quality Index (AQI) Scale

The AQI scale indicates air quality levels:

| AQI Range | Category | Health Concern |
|-----------|----------|----------------|
| 0-50 | Good | No health concern |
| 51-100 | Moderate | Moderate risk for sensitive groups |
| 101-150 | Unhealthy for Sensitive Groups | Health warnings for sensitive groups |
| 151-200 | Unhealthy | Everyone may begin to experience health effects |
| 201-300 | Very Unhealthy | Health alert |
| 301+ | Hazardous | Emergency conditions |

---

## Cigarette Equivalence Calculation

The application converts AQI values to equivalent cigarettes smoked using the formula:

$$\text{Cigarettes} = \frac{\text{PM2.5 Value}}{22}$$

Where PM2.5 is derived from the AQI value.

**References:**
- [EPA AQI Documentation](https://www.epa.gov/sites/default/files/2014-05/documents/zell-aqi.pdf)
- [AQI to Cigarettes Converter](https://github.com/jasminedevv/AQI2cigarettes)

---

## Error Handling

All errors are returned in a consistent JSON format:

```json
{
  "errors": [
    {
      "title": "Internal Server Error",
      "code": "500",
      "status": "Error message details"
    }
  ]
}
```

---

## Development Notes

### Adding New Endpoints

1. Create the route handler in `controller/index.js`
2. Implement the business logic in `service/index.js`
3. Add utility functions to `utils/index.js` if needed
4. Regenerate Swagger documentation: `npm run swagger`

### Best Practices

- Always log important operations using the logger
- Handle all async operations with try-catch blocks
- Validate input parameters before processing
- Return consistent JSON responses
- Use appropriate HTTP status codes (200 for success, 500 for errors)

---

## Future Enhancements

- [ ] Implement log file download endpoints
- [ ] Add database integration for user history tracking
- [ ] Implement authentication and user management
- [ ] Add more health recommendation features
- [ ] Support multiple air quality indices
- [ ] Add caching for frequently requested locations

---

## Troubleshooting

### Port Already in Use
```bash
# Change the PORT in .env file to an available port
PORT=3002
```

### Missing API Key
Ensure `NINJASAPIKEY` is set in the `.env` file. Get your key from the [Ninjas API](https://ninjas.com/api)

### Swagger Documentation Not Generating
```bash
npm run swagger
```

---

## License

ISC License - See package.json for details

---

## Author

Shubham Kumar Jha

---

## Contact & Support

For issues, feature requests, or contributions, please reach out to the development team.

