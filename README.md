# React Social - Facebook Authentication Example

A modern, responsive Facebook authentication application built with React. This app helps users authenticate using the Facebook SDK and view their profile information.

## Features

- **Facebook Authentication**: Easy authentication with Facebook account
- **User Information Display**: View name, email, and profile picture after authentication
- **State Management**: Real-time authentication state management
- **Modern Interface**: Clean and intuitive design

## Technologies Used

- React 19
- react-facebook-login for Facebook integration
- Axios for API calls (if needed)
- Create React App for build setup
- Facebook SDK for authentication

## Live Demo

The application is functional and can be run locally at:
- **Local Development**: http://localhost:3000

## Repository

- **Local Directory**: c:/work/Projects code/web development/react_social

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository or navigate to the directory:
```bash
cd "c:/work/Projects code/web development/react_social"
```

2. Install dependencies:
```bash
npm install
```

3. Install the Facebook login package:
```bash
npm install react-facebook-login --legacy-peer-deps
```

4. Start the development server:
```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

### Deploy

You can deploy the application to any static hosting platform, such as GitHub Pages, Vercel, or Netlify.

## Usage

1. **Authentication**: Click the Facebook login button
2. **View Profile**: After authentication, see your profile information
3. **Logout**: You can logout to test again

## Project Structure

```
src/
├── components/
│   └── Facebook.js              # Facebook authentication component
├── App.js                       # Main app component
├── App.css                      # Global styles
└── index.js                     # App entry point
```

## Facebook App Configuration

To work fully, you need to configure a Facebook app:

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Get the App ID
4. Replace `appId` in `src/components/Facebook.js` with your App ID
5. Configure the localhost:3000 domain in the app settings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React
