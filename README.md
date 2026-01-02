# Boilerexams Application Project (Question Page)

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone or navigate to the project directory:
   ```bash
   cd src
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   This will install all required packages including:
   - React
   - Vite
   - KaTeX (for LaTeX rendering)

## Running the Application

### Development Mode

To start the development server:

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or the next available port). Open this URL in your browser to view the application.

The development server includes:
- Hot module replacement (HMR) for instant updates
- Automatic browser refresh on file changes

## Project Structure

```
src/
├── components/
│   ├── QuestionPage.jsx      # Main question page component
│   ├── QuestionHeader.jsx    # Question header component
│   ├── QuestionBody.jsx      # Question body with LaTeX rendering
│   ├── AnswerList.jsx        # Answer choices list container
│   └── AnswerChoice.jsx      # Individual answer choice component
├── styling/
│   └── question.css          # Question page styling
├── App.jsx                   # Main app component
├── main.jsx                  # Application entry point
├── index.css                 # Webpage styling
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies and scripts
```

## Configuration

The question ID is currently set in `App.jsx`. To change the question, modify the `questionId` constant:

```javascript
const questionId = '45aef305-4578-4621-99bc-447e7a8496aa' /* Replace questionID with any other ID */
```

## API Proxy

The application uses a Vite proxy to handle CORS issues. The proxy configuration is set in `vite.config.js` and routes `/api/*` requests to `https://api.boilerexams.com`.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **KaTeX** - LaTeX math rendering
- **CSS** - Styling
