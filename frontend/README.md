# Climate & Smoke Tracker

A modern React application that tracks air quality index (AQI) and smoking statistics for different cities. Get real-time insights about environmental and health data for any location.

## 🌟 Features

- **Modern UI Design**: Contemporary glassmorphism interface with gradient backgrounds
- **City Search**: Search for any city to get AQI and smoking statistics
- **Real-Time Data**: Fetches live air quality and smoking data from the backend
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Responsive Design**: Fully responsive layout that works on all devices
- **Loading States**: Visual feedback during API calls
- **Mobile-Friendly**: Optimized mobile navigation with hamburger menu

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the project root and add your API endpoint:
```env
REACT_APP_API_BASE_URL=http://localhost:3001/api/v1/send/location
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### `npm start`
Runs the app in development mode. The page reloads when you make changes.

### `npm run build`
Builds the app for production in the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## 🎯 How It Works

1. **Search for a City**: Type a city name in the search input
2. **View Results**: Click the Search button or press Enter
3. **See Statistics**: 
   - Daily smoking statistics
   - Current Air Quality Index (AQI)
   - Environmental context

## 🔧 Technologies Used

- **React 18**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests
- **Heroicons**: Beautiful icon library
- **Material Tailwind**: React UI components

## 📝 API Response Handling

The application handles both success and error responses:

### Success Response
```json
{
  "msg": "success",
  "location": "Delhi",
  "noOfCigarette": 5,
  "aqi": 150
}
```

### Error Response
```json
{
  "msg": "success",
  "location": "city_name", 
  "noOfCigarette": {
    "errors": [
      {
        "title": "Internal Server Error",
        "code": "500",
        "status": {}
      }
    ]
  }
}
```

The app intelligently detects and displays errors from nested response objects.

## 🎨 Component Structure

- **App.js**: Main application component with routing
- **NavBar.js**: Navigation bar with logo and menu
- **Main.js**: Core component with search functionality and results display

## 📱 Responsive Breakpoints

- Mobile: < 640px (single column layout)
- Tablet: 640px - 1024px (flexible layout)
- Desktop: > 1024px (full multi-column layout)

## 🐛 Bug Fixes & Improvements

- ✅ Smart response clearing when typing new searches
- ✅ Robust error detection in nested response objects
- ✅ Proper loading state management
- ✅ Enter key support for searches
- ✅ Comprehensive error messages with status codes

## 🌐 Deployment

To deploy the production build:

1. Build the app:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development Notes

- Uses modern React hooks (useState, useEffect)
- Implements proper error boundary patterns
- Follows React best practices
- Responsive Tailwind CSS design system
- Accessibility-friendly components
