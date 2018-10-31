import { combineReducers } from 'redux';
import products from './Products';
import detail from './displayProductDetail';
import shoppingCart from './displayShoppingCart';
import cartItem from './cartItem';
import notifier from './displayNotifier';
import message from './changeMsg';

const appReducers = combineReducers({
   products,
   detail,
   shoppingCart,
   cartItem,
   notifier,
   message
});

export default appReducers;
