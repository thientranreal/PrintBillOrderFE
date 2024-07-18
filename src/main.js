import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
import store from './store.js';
import { ConnectedRouter } from 'connected-react-router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ConnectedRouter history={history}>

      <App />
    </ConnectedRouter>
  </Provider>,
)
