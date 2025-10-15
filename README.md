# PixaBay Image Finder

A modern, responsive image search application built with React. This app helps users discover and explore high-quality images using the Pixabay API.

## Features

- **Image Search**: Easily search for images by entering any keyword or phrase
- **Customizable Results**: Select the number of images to display per page (5, 10, 15, 30, or 50)
- **Real-time Fetching**: Images are fetched dynamically using Axios for smooth performance
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Safe Search**: All results are filtered for safe content
- **Modern UI**: Clean, intuitive interface built with Material UI

## Technologies Used

- React
- Material UI for components
- Axios for API calls
- Pixabay API for image data
- Create React App for build setup
- GitHub Pages for deployment

## Live Demo

The application is deployed and can be viewed at:
- **GitHub Pages**: https://iam269.github.io/pixabay_image_finder-master

## Repository

- **GitHub Repository**: https://github.com/iam269/pixabay_image_finder-master

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iam269/pixabay_image_finder-master.git
cd pixabay_image_finder-master
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Usage

1. **Search Images**: Enter a search term in the text field
2. **Select Amount**: Choose how many images to display using the dropdown
3. **View Results**: Browse through the fetched images in the results section

## Project Structure

```
src/
├── components/
│   ├── image-results/
│   │   └── ImageResults.js    # Displays search results
│   ├── navbar/
│   │   └── NavBar.js          # Navigation component
│   └── search/
│       └── Search.js          # Main search functionality
├── App.js                     # Main app component
├── App.css                    # Global styles
└── index.js                   # App entry point
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React
