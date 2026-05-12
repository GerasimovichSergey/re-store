import React from 'react';
import ReactDOM from 'react-dom';
import BookStoreService from './services/bookStoreService';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorBoundary from './Components/ErrorBoundry';
import { BookStoreServiceProvider } from './Components/BookStoreServiceContext';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';


const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookStoreServiceProvider value={bookStoreService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);