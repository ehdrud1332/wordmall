import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import ProductItem from "../../components/shop/ProductItem";
import * as cartAction from "../../store/actions/cart";


const ProductsOverviewScreen = (props) => {

    // useSelector를 통해서 전역적으로 rootReducer에 등록된 products reducer를 사용할 수 있다.
    const products = useSelector((state) => state.products.availableProducts);
    const dispatch = useDispatch();

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
                    onViewDetail={() => props.navigation.navigate('ProductDetailScreen')}
                    onAddToCart={() => {
                        dispatch(cartAction.addToCart(itemData.item));
                    }}
                />
            )}
        />
    );
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};

export default ProductsOverviewScreen;
