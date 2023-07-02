import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import colors from '../../constants/colors';

const DetailScreen = () => {
  const producto = useSelector(state => state.products.selected);

  return (
    <View style={styles.detailContainer}>
      <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri:producto.imagen}}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Fabricante: {producto.marca}</Text>
        <Text style={styles.text}>Modelo: {producto.nombre}</Text>
        <Text style={styles.text}>Precio: U$D {producto.precio}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Me interesa!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  detailContainer:{
    flex:1,
    height:500,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  imageContainer:{
    width:'100%',
    height:'40%',
    backgroundColor: 'white',
    borderColor:'black',
    borderRadius:15,
    borderWidth:2,
    justifyContent:'center'

  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
    borderRadius:15

  },
  textContainer:{
    width:'100%',
    height:'10%',
    justifyContent:'flex-start',
    alignItems:'center',
  
  },
  text:{
    fontSize:25,
    margin: 5
  },
  button:{
    width:'50%',
    height:'7.5%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: colors.color2,
    borderRadius:20  }
})