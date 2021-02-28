import PRODUCTS from '../../data/dummy-data';


// 초기상태값
const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'ul')
};

// initialState이 기본 상태이고 action을 취하면 새로운 state가 return 된다.
export default (state = initialState, action) => {
    return state;
}
