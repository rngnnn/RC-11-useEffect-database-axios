import React from 'react'
import axios from "axios"

const Home = () => {

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";


  const getBilgiler=async()=>{

    const res=await axios.get(url);
  
console.log(res)
  }
  return (
    <div>Home</div>
  )
}

export default Home