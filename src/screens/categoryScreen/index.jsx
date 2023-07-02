import {StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import colors from "../../constants/colors"
import CategoryItems from '../../components/CategoryItems'
import { useSelector, useDispatch } from 'react-redux'
import { selctedCategory } from '../../store/action/category.action'

const CategoryScreen = ({navigation}) => {

  const categorias = useSelector(state => state.categories.vehiculos);
  const dispatch = useDispatch();

  const handleSelectedCategory = item =>{
    dispatch (selctedCategory(item.id))
    navigation.navigate("Vehiculos",{
      name: item.nombre
    })
  };

  const renderCategoryItem = ({item}) =>(
    <View style={styles.categoryContainer}>
      <CategoryItems item={item} onSelected={handleSelectedCategory}/>
    </View>
  )
  
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Categorias</Text>
      <FlatList 
        data={categorias}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
      /> 
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: "center",
    backgroundColor: colors.actionColor,
    paddingBottom:70
  },
  tittle:{
    fontFamily: "Statliches",
    fontSize: 50
  },
  categoryContainer:{
    width:400,
    height:300,
    paddingBottom:10
  }
  
})