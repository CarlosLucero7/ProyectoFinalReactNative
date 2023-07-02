import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/cartScreen";
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

export default CartNavigator =() =>{
    return(
        <Stack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor: colors.color1,
            },
            headerTintColor: colors.color3,
            headerTitleStyle:{
              fontWeight:'bold'
            }
          }
          }>
            <Stack.Screen
                name="Usuario"
                component={CartScreen}
                
            />
        </Stack.Navigator>
    );
};