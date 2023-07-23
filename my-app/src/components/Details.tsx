import React, {useState} from 'react';
import {store} from "../store/store";

const Details = () => {
    const [recipe, setRecipe] = useState<string>();

    store.subscribe(()=> setRecipe(store.getState().recipeReducer.listOfRecipes))
    return (
        <div>
            {JSON.stringify(recipe)}
        </div>
    );
};

export default Details;