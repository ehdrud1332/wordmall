export const ADD_ORDER = 'ADD_ORDER';


// 액션 함수를 만들어 주는 것에 익숙해져야한다.
// 객체를 반환하게 되는데 'type'에 액션 함수를 호출명을 담고, 'orderData'에 데이터 정보를 담는다.
export const addOrder = (cartItems, totalAmount) => {
    return {
        type: ADD_ORDER,
        orderData: { items: cartItems, amount: totalAmount}
    };
};
