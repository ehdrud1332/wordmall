import React from 'react';
import { View, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './store/reducers/products';
import ShopNavigator from "./navigation/ShopNavigator";
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/order';

// 초기 상태값을 combineReducers를 이용해서 상수화
const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
});

// createStore를 이용해 store생성
const store = createStore(rootReducer);

const App = () => {
    return (
        <Provider store={store}>
            <ShopNavigator />
        </Provider>
    );
};

export default App;
