
import {createSlice} from "@reduxjs/toolkit";
import GetRecipeByIngredients from "../../api/api";
const initialState = {
    recipeName: '',
    loading: false,
    listOfRecipes: ''
}

 const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {},
     extraReducers: builder => {
        builder.addCase(GetRecipeByIngredients.pending, (state) => {state.loading = true});
        builder.addCase(GetRecipeByIngredients.fulfilled, (state, action) => {
            state.loading = false;
            state.listOfRecipes = action.payload});
        builder.addCase(GetRecipeByIngredients.rejected, (state) => {
            state.loading = false
        })
     }
})

export default recipeSlice.reducer