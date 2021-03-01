export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (product) => {
    return { type: ADD_TO_CART, product: product};
};

// 나중에 dispatch 함수에서 액션을 호출할 때 사용하게 될 ADD_TO_CART 변수를 정의하고,
// 이를 addToCard 라는 액션함수에 type 으로 넣어준다. 이 액션함수의 인풋은 상품인 product이다.
