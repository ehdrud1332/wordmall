import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux'

import ProductItem from "../../components/shop/ProductItem";


const ProductsOverviewScreen = () => {

    // useSelector를 통해서 전역적으로 rootReducer에 등록된 products reducer를 사용할 수 있다.
    const products = useSelector((state) => state.products.availableProducts);

    return (
        <FlatList
            data={products}
            // key값은 꼭 필요하다, FlatList의 성능을 높여주기 위해서!
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {}}
                    onAddToCart={() => {}}
                />
            )}
        />
    );
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};

export default ProductsOverviewScreen;
