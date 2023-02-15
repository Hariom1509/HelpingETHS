import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Polygon}>
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)