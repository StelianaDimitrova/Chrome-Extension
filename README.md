# Random Image Fetcher Chrome Extension

A lightweight Chrome extension built with React and Vite that fetches and displays a random image from a public API.


## Features

- Popup UI for the extension
- Fetches a random image on button click
- Displays image inside popup
- Shows timestamp of last fetch
- Loading state with spinner
- Error handling
- Prevents multiple concurrent requests


## Tech Stack

- React
- Vite
- JavaScript
- CSS Modules
- Material UI (CircularProgress)
- Chrome Extension (Manifest V3)


## API Used

https://dog.ceo/dog-api/

Returns random dog images.


## Installation

Clone the repository:

```bash
git clone https://github.com/StelianaDimitrova/Chrome-Extension.git 
cd chrome-extension
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build the extension:

```bash
npm run build
```


## Load Extension in Chrome

1. Open Chrome
2. Go to:
```
chrome://extensions
```

3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the `dist` folder (generated after `npm run build`)


## How It Works

When the button is clicked:

1. Request is sent to Dog API
2. Loading spinner appears
3. Image is fetched and displayed
4. Timestamp is updated
5. Duplicate requests are blocked while loading


