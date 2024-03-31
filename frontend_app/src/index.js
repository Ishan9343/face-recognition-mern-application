import React from 'react';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);


