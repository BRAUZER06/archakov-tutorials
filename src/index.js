import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// import App from './tutorial-1/App';
// import App from './tutorial-2/App';
// import App from './tutorial-3/App';
// import App from './tutorial-5/App';
// import App from './tutorial-6/App';
// import App from './tutorial-7/App';
import App from './tutorial-8/App';



ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
