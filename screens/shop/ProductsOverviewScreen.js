import React, {useLayoutEffect} from 'react';
import { FlatList, Text, View, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButton, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import ProductItem from "../../components/shop/ProductItem";
import * as cartAction from "../../store/actions/cart";
import customHeaderButton from "../../components/UI/customHeaderButton";



const ProductsOverviewScreen = ({navigation}) => {

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
                        onViewDetail={() => {}}
                        onAddToCart={() => {
                            dispatch(cartAction.addToCart(itemData.item));
                        }}
                    />
                )}
            />


    );
}


// ProductsOverviewScreen.navigationOptions = (navData) => {
//     return {
//         headerTitle: 'All',
//         // headerRight: () => (
//         //     <HeaderButton>
//         //         <Item
//         //             title='Cart'
//         //             iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//         //             onPress={() => {
//         //                 navData.navigation.navigate('Cart');
//         //             }}
//         //         />
//         //     </HeaderButton>
//         // )
//     }
// };

export default ProductsOverviewScreen;
