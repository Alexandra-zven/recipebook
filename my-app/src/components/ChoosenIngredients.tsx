import React, {useState} from 'react';
import {store} from "../store/store";
import {Chip} from "@mui/material";
import {RemoveResult} from "../store/reducers/searchReducer";
import GetRecipeByIngredients from "../api/api";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';


const ChoosenIngredients = () => {
    const [ingredient, setIngredient] = useState<string[]>([]);
    store.subscribe(()=>{setIngredient(store.getState().searchReducer.ingredients)})

    const handleRemoveIngredient = (ingredient: string) => {
        store.dispatch({type: RemoveResult, payload: ingredient})
    }

    const handleFindRecipe = () =>{
        store.dispatch(GetRecipeByIngredients(ingredient))
    }
    return (
        <div>
            {ingredient.map(e => {return <Chip key={e} label={e} color="success" variant="outlined" onDelete={()=>handleRemoveIngredient(e)} />})}
            <Button onClick={handleFindRecipe} variant={"contained"} color={"success"} endIcon={<SendIcon/>}>Find recipes</Button>
        </div>
    );
};

export default ChoosenIngredients;