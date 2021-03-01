import { ADD_TO_CART } from '../actions/cart';
import CartItem from "../../models/card-item";

const initialState = {
    items: {},
    totalAmount: 0
}
// 리듀서는 항상 초기상태를 정의해주고 액션조건에 따라 상태 업데이트 하는 코드를 작성하면 된다.
// 상품이 새로 담길 때마다 (ADD_TO_CART) 기존 장바구니에 새 아이템을 추가하는 작업을 한다.
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let updatedOrNewCartItem

            if (state.items[addedProduct.id]) {
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
                return {
                    ...state,
                    items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
                    totalAmount: state.totalAmount + prodPrice
                };
            } else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
                return {
                    ...state,
                    items: {...state.items, [addedProduct] : updatedOrNewCartItem},
                    totalAmount: state.totalAmount + prodPrice
                }
            }
    }
    return state
};
