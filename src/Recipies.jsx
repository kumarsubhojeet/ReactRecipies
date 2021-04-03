import React from "react";
import RecipeItem from "./RecipeItem"

const Recipies = (props) => {
  const { recipes } = props;
  return (
    <>
      <div className="row">
        {recipes.map((recipe) =><RecipeItem 
         name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        /> ) }             
      </div>
    </>
  );
};

export default Recipies;
