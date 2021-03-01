class Product {
    constructor(id, ownerId, title, imageUrl, description, price) {
        this.id = id;
        this.ownerId = ownerId;
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.price = price;
    }
}

// 이것 문제였다니... 정말... class 함수만 선언하고 export를 안해서 안된거였다.
export default Product;
