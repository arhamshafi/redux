import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';


// React App = Bachay (components)
// Store = Dabba jisme data pada hai
// Provider = Maa jo sab bachon ko wo data ka dabba access karne deti hai
// Provider store ko "context ke zariye" har component tak pohcha deta hai.



// 🔚 Summary:
// Component	Role:
// Provider	   = Redux store ko React app mein inject karta hai
// store	 =   Redux ka actual data wala object
// useSelector  =	Store se data lene ke liye
// useDispatch  =	Action bhejne ke liye



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
