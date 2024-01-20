import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const usefetch = () => { 
    const [data,setdata]=useState([])
    const [isLoading,setIsLoading]=useState(false) 
    const [error,seterror]=useState(null)  
    const fetchdata = async () => {
        setIsLoading(true);
      
        try {
          const response = await fetch("http://10.0.2.2:3000/api/products")
          setdata(response.data);  
          console.log(response.data)
          setIsLoading(false);
        } catch (error) {
          seterror(error);
          setIsLoading(false);
        }
      }; 

    useEffect(()=>{ 
fetchdata()
    },[])  

    const refetch=()=>{ 
        setIsLoading(true) 
        fetchdata()
    }
    return {data,isLoading,error,refetch}
}

export default usefetch

