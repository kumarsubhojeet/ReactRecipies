import React, { useState , useEffect } from "react"
import Header from "./Header"
import Recipies from "./Recipies"
import axios from "axios"
import Footer from "./Footer"


const App = ()=>{
  
    const [search , searchUpdate] = useState("Cakes");
    const [recipes , recipeUpdate] = useState([])

    const App_id = "9fb66256";
    const Application_Keys ="5108d9c8b9c54cf8dbf31fee7adb293c";
   
    useEffect( async ()=>{
        getRecipies();
    }, [] );
   
    const getRecipies = async ()=>{
        const res = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${App_id}&app_key=
        ${Application_Keys}`)
        recipeUpdate(res.data.hits)
    }

    const onInputChange = (e)=>{
        searchUpdate(e.target.value)
    }

    const onSearchClick = () => {
        getRecipies();
      };

    return(
        <>
        <Header  search={search}  onInputChange={onInputChange} onSearchClick={onSearchClick} />
        <div className="container">
        <Recipies  recipes={recipes}/>
        </div>
        <Footer className="footer"/>
        
        </>
    )
}

export default App;