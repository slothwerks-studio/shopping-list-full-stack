import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
	reducer,
    applyMiddleware(
        // thunk works behind the scenes to allow us to make async actions. Without
        // it, the code in actions/index.js would not work.
        thunkMiddleware,
        createLogger() // just to help us see what's going on
    )
);

// If an action needs to be triggered upon loading the page (ie a fetch function), it will need to be added here along with an import statement referring to the location of the action index.js file.

// We need wrap our whole app in the Provider component. This lets Redux do its magic.

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();