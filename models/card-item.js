class CartItem {
    constructor(productId, productTitle, productPrice, quantity, sum) {
        this.productId = productId;
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.quantity = quantity;
        this.sum = sum;
    }
}

// 이것 문제였다니... 정말... class 함수만 선언하고 export를 안해서 안된거였다.
export default CartItem;
