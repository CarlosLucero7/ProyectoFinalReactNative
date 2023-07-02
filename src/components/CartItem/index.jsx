import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IonIcons from '@expo/vector-icons/Ionicons'
import React from 'react'
import colors from '../../constants/colors'

const CartItem = ({item,onDelete}) => {
  return (
    <View style={styles.item}>
        <View>
            <Text style={styles.tittle}>{item.nombre}</Text>
        </View>
        <View style={styles.detail}>
            <Text style={styles.text}>Precio:{item.precio}</Text>
            <TouchableOpacity onPress={()=> onDelete(item.id)}>
                <IonIcons name='trash' size={20} color={'black'}/>
            </TouchableOpacity>
        </View>
       
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding:10,
        borderBottomWidth:1,
        borderBottomColor: colors.color1,
    },
    tittle:{
        fontFamily:'Statliches',
        fontSize:25,
        color: colors.color1
    },
    detail:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: colors.color3
    },
})