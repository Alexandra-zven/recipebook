import React, {SyntheticEvent, useEffect} from 'react';
import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";
import {store} from "../store/store";
import {AddResult} from "../store/reducers/searchReducer";
import './SearchRecipes.css';
import ChoosenIngredients from "./ChoosenIngredients";

const test = ['onion', 'lamb', 'beef', 'egg'];

const SearchRecipes = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<string | null>(null);

    const handlerAddIngredient = (ingredient: string ) => {
        store.dispatch({type: AddResult, payload: ingredient})
    }

    const handlerCheckValue = (_: SyntheticEvent, value: string) => {
        if(value.length === 0){
             setOpen(false)
        }
        else{setOpen(true);
        }
    }

    const handlerSaveValue = (_: SyntheticEvent, value: string | null) => {
        setValue(value);
        if(value){
        handlerAddIngredient(value)}
    }

    useEffect(()=>{
        console.log(value) //TODO: add search func
    }, [value])

    return (
        <div>
            <Autocomplete
                className={'search-recipes-autocomplete'}
                freeSolo
                open={open}
                onInputChange={handlerCheckValue}
                onChange={handlerSaveValue}
                onClose={()=>{
                    setOpen(false);
                }}
                options={test}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Enter your ingredient" />}
            />
            <ChoosenIngredients/>
        </div>
    );
};

export default SearchRecipes;