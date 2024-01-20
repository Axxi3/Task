import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import {Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
const ProductCardView = ({item}) => { 
    const navigation=useNavigation()
  return (
   <TouchableOpacity onPress={()=>navigation.navigate("Product Description",{item})}>
    <View style={styles.container}>
    <View style={styles.Imagecontainer}>
        <Image
            source={{uri:"https://images.pexels.com/photos/1058140/pexels-photo-1058140.jpeg?auto=compress&cs=tinysrgb&w=400"}}
            style={styles.image}
        />
    </View>

    <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text> 
        <Text style={styles.suppplier} numberOfLines={1}>{item.Supplier}</Text>
        <Text style={styles.price} numberOfLines={1}>{item.price}</Text>
    </View>  

    

    </View>
   </TouchableOpacity>
  )
}

export default ProductCardView

const styles = StyleSheet.create({
    container:{ 
        width:162,
        height:240,
        marginEnd:22,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary
    },
    Imagecontainer:{ 
        flex:1,
        width:150,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        borderRadius:SIZES.small,
        overflow:"hidden",
       

    } ,
    image:{ 
        aspectRatio:1,
        resizeMode:"cover"
    },
    details:{ 
        padding:SIZES.small
    },
    title:{  
        fontSize:SIZES.large,
        fontWeight:600,
        marginBottom:2
    } ,
    suppplier:{  
        fontSize:SIZES.small,
        fontWeight:400,
        marginBottom:2 ,
        color:COLORS.gray
    },
    price:{  
        fontSize:SIZES.medium,
        fontWeight:700,
        marginBottom:2
    },
    
})