import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'  
import { COLORS, SIZES } from '../constants'
import search from "../assets/icons/search.png"
import ProductRow from '../assets/Components/ProductRow'

const Home = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Find the Most</Text>
        <Text style={styles.heading2}>Luxiourious Furniture</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Image source={search} size={24} style={styles.search} />
        </TouchableOpacity>
        <View style={styles.searchWraper}>
          <TextInput
            onPressIn={() => {}}
            placeholder="What are you loooking for?"
            style={styles.searchInput}
          />
        </View>
      </View>

      <ProductRow/>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
    container: {
      width: "100%",
    },
    heading: {
      fontWeight: 800,
      fontFamily: "Clash Diaplay",
      fontSize: SIZES.xxLarge - 5,
      marginTop: SIZES.medium,
  
      paddingLeft: 10,
    },
    heading2: {
      fontWeight: 800,
      
      fontFamily: "Clash Diaplay",
      fontSize: SIZES.xxLarge - 5,
      paddingLeft: 10,
    },
    searchContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      height: 50,
      margin: 10,
      padding: 10,
      backgroundColor: COLORS.secondary,
      borderRadius: SIZES.medium,
      marginVertical: SIZES.medium,
    },
    search: {
      height: 30,
      width: 30,
      padding: 10,
      marginHorizontal: 10,
    },
    searchWraper: {
      flex: 1,
      backgroundColor: COLORS.secondary,
      marginRight: SIZES.small,
      borderRadius: SIZES.small,
    },
    searchInput: {
      fontFamily: "Regular",
      width: "100%",
      height: "100%",
      paddingHorizontal: SIZES.small,
    },
  });