import React, {useState} from 'react';
import {store} from "../store/store";
import {SearchHits} from "../store/state.types";
import RecipeCards from "./recipeCards";
import './Details.css';
import Grid from "@mui/material/Grid";
import OneRecipe from "./OneRecipe";

const Details = () => {
    const [recipeArr, setRecipeArr] = useState<SearchHits[]>([]);
    const [isRecipeChosen, setIsRecipeChosen] = useState('');
    const chosenRecipe = () => recipeArr.find(e => e.recipe.label === isRecipeChosen)?.recipe;

    store.subscribe(() => setRecipeArr(store.getState().recipeReducer.listOfRecipes))
    return (
        isRecipeChosen ? <OneRecipe recipe={chosenRecipe()} status={setIsRecipeChosen}/> :
            <Grid container spacing={1}>
                {recipeArr.map(e=>{
                    return (<Grid item xs={4} >
                        <RecipeCards key={e.recipe.label} recipe={e.recipe} ingredients={e.recipe.ingredients} status={setIsRecipeChosen}/>
                    </Grid>
                    )
                })}

        </Grid>
    );
};

export default Details;