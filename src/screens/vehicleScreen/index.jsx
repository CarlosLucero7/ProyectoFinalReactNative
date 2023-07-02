import { TouchableOpacity,StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import colors from "../../constants/colors"
import ProductItems from '../../components/ProductsIteems'
import { useSelector, useDispatch } from 'react-redux'
import { filteredProduct, selectedVehicle } from '../../store/action/product.ation'


const VehicleScreen = ({navigation, route}) => {

  const filteredProducts = useSelector(state => state.products.filteredProduct)
  const categorySelected = useSelector(state => state.categories.selected)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(filteredProduct(categorySelected.id))
  }, [])

  const handleSelectedProduct= (item) =>{
    dispatch(selectedVehicle(item.id))
    navigation.navigate('Detalles',{
      name: item.nombre
    })
  };
  const renderProductItem =({item}) =>(
    <View style={styles.productContainer}>
      <ProductItems item={item} onSelected={handleSelectedProduct}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
      data={filteredProducts}
      renderItem={renderProductItem}
      keyExtractor={item => item.id}
      numColumns={2}
      />
    </View>
  )
}

export default VehicleScreen

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: colors.disableColor,
  justifyContent: 'center',
  alignItems: 'center',
  
},
productContainer:{
  height:300,
  width:200
}

})