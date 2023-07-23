// import {SearchActionType, SearchActionTypes} from "./search-reducers.types";
// import {SearchAction} from "../actions/searchAction";
// import {initialState as initialState} from "../state.const";
//
// export default function searchReducer(state = initialState, action: SearchActionType){
//     switch (action.type) {
//         case SearchActionTypes.ACTION_ADD_SEARCH_RESULT: return SearchAction.AddResult(state, action.payload);
//         case SearchActionTypes.ACTION_REMOVE_SEARCH_RESULT: return SearchAction.RemoveResult(state, action.payload);
//         default: return state;
//     }
// }

import {createSlice} from "@reduxjs/toolkit";

interface state{
    ingredients: string[]
}

const initialState: state = {
    ingredients: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        AddResult(state, action){
            const ingredient = action.payload;
            state.ingredients.push(ingredient)
        },
        RemoveResult(state, action){
            const ingredient = action.payload;
            state.ingredients = state.ingredients.filter(string => string !== ingredient)
        }
    }
})

export const {AddResult, RemoveResult} = searchSlice.actions

export default searchSlice.reducer;