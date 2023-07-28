import {configureStore, Middleware} from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";
import recipeReducer from "./reducers/recipeReducer";
import GetRecipeByIngredients from "../api/api";

const myMiddleware: Middleware = (store) => (next) => (action) => {
    if (action.type === GetRecipeByIngredients.pending.type) {
        console.log('Fetching user...');
    }

    return next(action);
};
export const store = configureStore({
    reducer: {
        searchReducer: searchReducer,
        recipeReducer: recipeReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myMiddleware)
})


