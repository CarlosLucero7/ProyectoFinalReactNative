import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const CategoryItems = ({item, onSelected}) => {
  return (
    <View style={styles.categories}>
        <TouchableOpacity style={styles.container} onPress={()=> onSelected(item)}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.nombre}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.imagen} source={{uri: item.img}}/>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default CategoryItems

const styles = StyleSheet.create({
    categories:{
        flex:1,
        shadowColor:'black',
        shadowOpacity: 0.2,
        elevation:5,
        margin:20
    },
    container:{
        flexDirection:"column",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.color2,
        borderTopStartRadius:15,
        borderTopEndRadius:15,
        height:100
    },
    textContainer:{
        height:"20%",
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop:20

    },
    text:{
        fontFamily:"Aubrey",
        fontSize: 40,
        color: "white",
    },
    imageContainer:{
        width: '100%',
        height:'90%',
    },
    imagen:{
        width: '100%',
        height:'100%',
        resizeMode:'cover',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
        
        
    }
    
  })