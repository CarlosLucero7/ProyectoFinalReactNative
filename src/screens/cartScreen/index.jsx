import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { CART } from '../../data/cart'
import colors from '../../constants/colors'
import CartItem from '../../components/CartItem'

const CartScreen = () => {

  const handleDelete = id =>{
    console.log('id')
  }
  const renderCartItem = ({item})=> (
    <CartItem item={item} onDelete={handleDelete} />
  )

  return (
    <View style={styles.cartContainer}>
      <View style={styles.userContainer}>
        <Image style={styles.userImage}/>
        <Text>UserName</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Publicaciones que te interesaron:</Text>
      <View style={styles.list}>
        <FlatList 
        data={CART}
        keyExtractor={item => item.id}
        renderItem={renderCartItem}
        />
      </View>
    </View>
    </View> 
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer:{
    flex:1,
    height:500,
  },
  userContainer:{
   height:'10%',
   width:'100%',
   flexDirection:'row',
   justifyContent:'flex-start',
   alignItems:'center',
   margin:10, 
  },
  userImage:{
    borderRadius:100,
    borderColor:'black',
    borderWidth:3,
    width:'20%',
    height:'100%',
    marginEnd:20
  },
  container:{
    padding:15,
    backgroundColor: colors.actionColor,
    height:'90%',
    width:'100%',
    borderTopEndRadius:20,
    borderTopStartRadius:20
  },
  list:{
    flex:2
  },
  text:{
    fontFamily:'Statliches',
    fontSize:27,
    color:colors.color1
  }
})