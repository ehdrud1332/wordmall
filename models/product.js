import React, {Component} from "react";


// class Product  {
//     constructor(id, ownerId, title, imageUrl, description, price) {
//         this.id = id;
//         this.ownerId = ownerId;
//         this.imageUrl =imageUrl;
//         this.title = title;
//         this.description = description;
//         this.price = price;
//     }
// }
//

function Product(id, ownerId, title, imageUrl, description, price) {

    this.state = {
        id: id,
        ownerId: ownerId,
        title: title,
        imageUrl: imageUrl,
        description: description,
        price: price
    }

}

export default Product;


