import React from 'react';
import ReactDOM from 'react-dom';
import './dapp.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createVtxStore } from './ethvtx_config/createVtxStore';
import { setupWeb3 } from './ethvtx_config/setupWeb3';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

const main = async () => {

    const store = createVtxStore();
    await setupWeb3(store);

    ReactDOM.render(
        <Provider store={store}>
            <div>
                <App/>
            </div>
        </Provider>,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();

};

main();
