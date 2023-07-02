import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const ProductItems = ({item, onSelected}) => {
  return (
    <View style={styles.productContainer}>
        <TouchableOpacity 
        style={styles.container}
        onPress={()=> onSelected(item)}
    >
   
        <View style={styles.imageContainer}>
            <Image style={styles.imagen}
            source={{uri:item.imagen}}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.marca} {item.nombre}</Text>
            <Text style={styles.text}>Precio: U$D {item.precio}</Text>
        </View>
    </TouchableOpacity>
    </View>
    
  )
}

export default ProductItems

const styles = StyleSheet.create({
    productContainer:{
        flex:1,
        width:400,
        height:300,
        justifyContent: 'space-around',

    },
    container:{
        borderColor: "black",
        borderWidth:1,
        width:'47%',
        margin:5,
        borderRadius:15,
        backgroundColor: colors.color3
        
    },
    imageContainer:{
        justifyContent: "center",
        alignItems: "center",
        height:"40%",
        width:"100%",
        backgroundColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'black',
        borderTopEndRadius:15,
        borderTopStartRadius:15
      
    },
    imagen:{
        height:"100%",
        width:"100%",
        resizeMode:'contain',
        borderTopLeftRadius:15,
        borderTopRightRadius:15
                
    },
    textContainer:{
        justifyContent: 'space-evenly',
        alignItems: "center",
        height:"60%",
        width:"100%",
    },
    title:{
        fontFamily:"Statliches",
        fontSize: 35,
        color: colors.color1,
    },
    text:{
        fontFamily:"Aubrey",
        fontSize: 20,
        color: "black",
    }



})