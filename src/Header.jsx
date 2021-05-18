import React from "react"


const Header = (props)=>{
    return(
        <>
        <div className="jumbotron">
  <div className="container">
    <h1 className="display-4"><span class="material-icons brand-icon">fastfood</span>Food Recipies</h1>
    
    <div class="input-group w-60 mx-auto col-sm-6 ">
  <input type="text" class="form-control form"
   placeholder="Search Your favorite Recipe 🍎" 
   value={props.search} 
   onChange={props.onInputChange}
  
  />
  <div class="input-group-append input_btn">
  <button className="btn btn-dark" onClick={props.onSearchClick}>
            Search Recipe
          </button>
  </div>
</div>
<div class="input-group-append input_btn2">
  <button className="btn btn-dark btn" onClick={props.onSearchClick}>
            Search Recipe
          </button>
  </div>
  </div>
</div>
        </> 
    )
}

export default Header;