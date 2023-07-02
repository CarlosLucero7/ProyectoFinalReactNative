import ShopNavigator from "./shopNavigator";
import cartNavigator from "./cartNavigator";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import colors from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons"

const BottomTab = createBottomTabNavigator()

export default BottomTabNavigator =() =>{
    return(
        <BottomTab.Navigator 
        screenOptions={{
            headerShown:false, 
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
            }}>
            <BottomTab.Screen name="ShopNavigator" component={ShopNavigator} options={{
            tabBarIcon: () => (
                <View>
                    <Ionicons name="home" color={colors.color3} size={40}/>
                </View>
            )
            }}/>
            <BottomTab.Screen name="Usuario" component={cartNavigator} options={{
            tabBarIcon: () => (
                <View>
                    <Ionicons name="person" color={colors.color3} size={40}/>
                </View>
            )
            }}/>
            
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar:{
        height:70,
        backgroundColor: colors.color1,
        borderTopEndRadius:15,
        borderTopStartRadius:15,
        position:'absolute'
    }
})