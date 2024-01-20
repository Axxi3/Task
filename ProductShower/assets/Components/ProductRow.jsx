import { StyleSheet, FlatList, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import usefetch from '../../hooks/usefetch';

const { width } = Dimensions.get('window');
const cardWidth = (width - 3 * SIZES.medium) / 2; // Calculate the width for two cards with some gap

const ProductRow = () => {  
  const {data,isLoading,error}=usefetch()
  const product = [1, 2, 3, 4];

  return (
    <View style={styles.container}>  

    {isLoading ?( 
      <ActivityIndicator
        size={SIZES.xxlarge} 
        color={COLORS.primary}
      />
    ):error? console.log(error)&&( 
      <Text>Somethng went Wrong</Text> 
      
    ):(
<FlatList
        data={data}  
        key={(item)=>item._id }  
        numColumns={2}
        renderItem={({ item }) => <ProductCardView  item={item}/>}
        horizontal
        contentContainerStyle={{
          paddingLeft: SIZES.medium,
        }}
      />
    )}

      
    </View>
  );
}; 

export default ProductRow;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
  },
  // You can add other styles if needed
});
