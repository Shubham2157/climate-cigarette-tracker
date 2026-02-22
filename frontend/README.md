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

- Node.js 24.x (specified in `engines` field in package.json)
- npm (v10.0.0 or higher)
- A backend API server running at your configured endpoint

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

### Deploy to Vercel (Recommended)

Vercel provides seamless deployment for React applications with automatic CI/CD.

#### Steps:

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Your commit message"
git push origin master
```

2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect your React app

3. **Configure Environment Variables**:
   - In Vercel project settings, go to "Environment Variables"
   - Add your environment variables:
     - `REACT_APP_API_BASE_URL`: Your backend API endpoint
   - Example: `http://yourdomain.com/api/v1/send/location`

4. **Node Version**:
   - Vercel automatically uses Node.js 24.x (from `engines` field in package.json)
   - No additional configuration needed

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your app automatically

#### Live URL:
Once deployed, your app will be available at: `https://your-project.vercel.app`

### Deploy to Other Platforms

#### Using `npm run build`:

1. Build the app locally:
```bash
npm run build
```

2. The optimized production build will be in the `build/` folder

3. Deploy the `build` folder to:
   - **Netlify**: Drop the `build` folder in the dashboard
   - **GitHub Pages**: Configure your repository settings
   - **AWS Amplify**: Connect your GitHub repo
   - **Any static hosting**: Copy the `build` contents

### Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_API_BASE_URL=YOUR_API_ENDPOINT_HERE
```

**For Vercel**: Add these in Project Settings → Environment Variables

### Build Output

The production build creates:
- Minified and optimized JavaScript
- CSS files with proper tree-shaking
- Static assets in the `build/` folder
- Ready for deployment to any static host

## 📄 License

This project is open source and available under the MIT License.

## 🔧 Troubleshooting

### Common Issues

#### 1. "Objects are not valid as a React child" Error
- **Cause**: Nested error objects in API response
- **Solution**: Already handled in the code - checks for errors in `noOfCigarette` and `aqi` fields

#### 2. Results Change When Typing
- **Cause**: Old response data staying in state
- **Solution**: Input clearing is implemented - response clears when you start typing

#### 3. API Connection Error
- **Cause**: Backend server not running or wrong API endpoint
- **Solution**: 
  - Check `.env` file has correct `REACT_APP_API_BASE_URL`
  - Make sure backend server is running
  - Verify API endpoint is accessible

#### 4. Port 3000 Already in Use
```bash
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

#### 5. Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules

# Reinstall
npm install
```

#### 6. Vercel Deployment Failed
- Ensure Node.js 24.x is specified in `engines` in package.json
- Environment variables are set in Vercel dashboard
- Check build logs in Vercel console for specific errors

## 📧 Support

For issues or questions:
1. Check this README's troubleshooting section
2. Review the Comments in source code
3. Check console errors in browser DevTools
4. Verify backend API is responding correctly

## 👨‍💻 Development Notes

- Uses modern React hooks (useState, useEffect)
- Implements proper error boundary patterns
- Follows React best practices
- Responsive Tailwind CSS design system
- Accessibility-friendly components

### Node Version Management

This project requires **Node.js 24.x**. To manage Node versions:

#### Using nvm (Node Version Manager):
```bash
nvm install 24.0.0
nvm use 24.0.0
```

The `.nvmrc` file automatically specifies the correct version for nvm users.

#### Verify Installation:
```bash
node --version  # Should be v24.x.x
npm --version   # Should be 10.x.x or higher
```

### Configuration Files

- **package.json**: Specifies Node.js 24.x in the `engines` field
- **.nvmrc**: NVM configuration for automatic version switching
- **.env**: API endpoint configuration
- **vercel.json**: Removed - Vercel uses package.json engines field
