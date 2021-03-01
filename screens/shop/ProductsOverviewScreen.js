import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux'


const ProductsOverviewScreen = () => {

    // useSelector를 통해서 전역적으로 rootReducer에 등록된 products reducer를 사용할 수 있다.
    const products = useSelector((state) => state.products.availableProducts);

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
        />
    );
};

ProductsOverviewScreen.navigationOptipns = {
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen;
