import Order from '../../models/order';
import { ADD_ORDER } from '../actions/order';

const initialState = {
    orders: []
}

// 액션 유형이 ADD_ORDER일 경우, 주문 데ㅣ터를 객체에 담아서 원래 orders배열에 concat함수로 추가시킨다.
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(),
                action.orderData.items,
                action.orderData.amount,
                new Date()
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
    }
    return state;
}
