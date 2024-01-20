import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import star from "../assets/icons/star.png"  
import home from "../assets/icons/home.png"  
import { useRoute } from '@react-navigation/native'


const ProductDetails = (navigation) => {
  const route=useRoute() 
  const {item}=route.params  
  console.log(item)
    return (
      <View style={styles.container}>
        <Image
          source={{uri: item.imageUrl}}
          style={styles.image}
        />
  
        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.imageUrl}</Text>
            <View style={styles.pticeWrapper}>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
  
          <View style={styles.ratingrow}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Image
                  key={index}
                  source={star}
                  style={styles.image2}
                />
              ))}  

              <Text style={styles.ratingText}>(4.9)</Text>
            </View>  
           
          </View>  

          <View style={styles.description}>
            <Text style={styles.des}>{price}</Text>
            <Text style={styles.desText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi, id obcaecati vitae sed ex temporibus illum ab eius fugiat facere velit repellendus, ad qui exercitationem excepturi. Debitis corporis doloremque aliquid maxime iste porro laboriosam et, voluptates voluptatum assumenda tenetur?

            </Text>
          </View>  

          <View style={{marginBottom:SIZES.small}}>
            <View style={styles.location}> 
            <View style={{flexDirection:"row"}}>
               
        <Text style={styles.ratingText}>Free delivery</Text>
</View> 
<View style={{flexDirection:"row"}}>
                <Image 
                source={home}
                style={styles.image2}
                />  
        <Text style={{paddingHorizontal:5}}>India</Text>
</View>
            </View>
          </View> 

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                        <Text style={styles.Carttitle}>Add To Cart</Text>
                    </TouchableOpacity> 

                   
                </View>


        </View>
      </View>
    );
  };

export default ProductDetails

const styles = StyleSheet.create({
    desText:{ 
        fontSize:SIZES.small+3,
        textAlign:"justify",
        marginBottom:SIZES.small
    },
    location:{ 
            backgroundColor:COLORS.secondary ,
            padding:5,
            borderRadius:SIZES.large,
            marginHorizontal:10,
            flexDirection:"row",
            justifyContent:"space-between"
    },  
    cartRow:{ 
        backgroundColor:COLORS.black ,
        padding:5,
        borderRadius:SIZES.large,
        marginHorizontal:10,
        flexDirection:"row",
        justifyContent:"space-between"
},
      
    cartBtn:{
        width:"90%", 
        alignItems:"center",
        backgroundColor:COLORS.black,
        padding:SIZES.small,
        borderRadius:SIZES.height,
        marginLeft:12,

    }, 
    Carttitle:{   
        color:COLORS.white,
        fontWeight:700,
        fontSize:SIZES.lightWhite, 
        textAlign:"center"
    
    },
    container:{ 
        flex:1,
        backgroundColor:COLORS.lightWhite,
      
    },
    UpperRow:{ 
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
       position:"absolute",
        top:SIZES.xxLarge,
        width:SIZES.width-44,
        zIndex:999 ,
        transform: [{ rotate: '-180deg' }]
    },
    image:{ 
        aspectRatio:1,
        resizeMode:"cover",

    }, image2:{ 
        aspectRatio:1,
        resizeMode:"cover",  
        width:24,
        height:24

    }, 
    image3:{ 
        aspectRatio:1,
        resizeMode:"cover",  
        width:20,
        height:20

    },
    details:{ 
    
        backgroundColor:COLORS.lightWhite,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.large  ,
        borderTopRightRadius:SIZES.large
    },  
    titleRow:{ 
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width-44,
        top:20
}  ,
title:{ 
    fontWeight:700,
    fontSize:SIZES.large,

},price:{  
    paddingHorizontal:10,
    fontWeight:500,
    fontSize:SIZES.large,

},
pticeWrapper:{ 
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.large,

},
ratingrow:{ 
  
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width-10,
        top:5
},
rating:{ 
    top:SIZES.large,
    flexDirection:"row",
   
    justifyContent:"flex-start",
alignItems:"center",
marginHorizontal:SIZES.large
},
description:{ 
    marginTop:SIZES.large+2,
    marginHorizontal:SIZES.large
}  ,
des:{ 
    fontWeight:600,
    fontSize:20,
},
ratingText:{ 
    padding:5
}
  
})