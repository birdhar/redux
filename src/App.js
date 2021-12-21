import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import {createStore} from 'redux';
import {Provider} from "react-redux";
import reducer from "./reducer";
import {INC, DEC, REMOVE, CLEAR_CART, GET_TOTAL, GET_MOMENT} from './actions'

const initState = {
  cart: cartItems,
  total: 0,
  amount: 5,
}


const store = createStore(reducer, initState);
// store.dispatch({type: INC})
// store.dispatch({type: DEC})
// store.dispatch({type: })
// store.dispatch({type: })

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
