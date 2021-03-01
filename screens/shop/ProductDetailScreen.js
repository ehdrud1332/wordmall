import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = (props) => {

    // ! 리덕스와 네비게이션의 흐름을 상기시키자
    // App 에서 provider로 store를 통해 루트 리듀서(여러 상태가 들어있음)을 제공한다.
    // shopNavigator 에서 먼저 ProductOverviewScreen 화면을 실행한다.
    // ProductOverviewScreen 은 renderItem 속성에서 ProductDetailScreen 화면을 반환한다.
    // ProductItem의 파라미터로 onViewDeail 속성에서 ProductDetailScreen 화면을 실행한다.

    const productId = props.navigation.getParam('productId')

    // 상품의 제목을 찾는 방법 2가지
    // navigation으로 실행될 때, id 속성도 같이 가지고 온다, 가져온 id와 실제 상품의 id가 같으면, 아이템을 가져와서 제목을 조사하면 된다.
    // 또는 navigation 실행 시 title 속성을 같이 바로 가져오면 된다.
    const selectProduct = useSelector((state) =>
        state.products.availableProducts.find((prod) => prod.id === productId)
    )

    return (
        <View>
            <Text>{selectProduct.title}</Text>
        </View>
    );
};

ProductDetailScreen.navigationOptions = (navData) => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
};

export default ProductDetailScreen;

const styles = StyleSheet.create({

})
