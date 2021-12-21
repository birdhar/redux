import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import {createStore} from "redux";

import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";
import { Provider } from "react-redux";

const initialState = {
   cart: cartItems,
   total: 490,
   amount: 5
}; 


const store = createStore(
  reducer, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App; 
