import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

// const instanse = axios.create({
//     baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes',
//     headers: {
//         'X-RapidAPI-Key': '256c560a16msh53e882a697931e0p139bc0jsnc599c4f6e2bf',
//         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     },
// })
//
// const GetRecipeByIngredients = () => {
//     let temp = instanse.get('/findByIngredients', {
//         params: {
//             ingredients: 'apples,flour,sugar',
//             number: '5',
//             ignorePantry: 'true',
//             ranking: '1'
//         }
//     })
//     console.log(temp);
//     return temp;
// }

const instanse = axios.create({
    baseURL: 'https://api.edamam.com',
})

const GetRecipeByIngredients = createAsyncThunk(
    'recipe/getRecipe',
    async (ingredient: string[]) => {
        return instanse.get('/api/recipes/v2', {
            params: {
                type: 'public',
                app_id: '59b49ff4',
                app_key: '4c955368211b3c8e229d2defc8f91be8',
                q: ingredient.join(',')
            }
        }).then(res => res.data)
    }
)

export default GetRecipeByIngredients;