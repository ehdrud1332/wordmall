import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import Colors from '../constants/Color';


// stackNavigator 구성하고 메인화면은 ProductsOverviewScreen을 보여준다.
const ProductsNavigator = createStackNavigator(
    {
        CartScreen: CartScreen,
        ProductsOverview: ProductsOverviewScreen,
        ProductDetail:  ProductDetailScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }
    }
)

export default createAppContainer(ProductsNavigator)
