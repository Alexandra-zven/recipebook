export interface recipeState{
    recipeName: string
    loading: boolean
    listOfRecipes: SearchHits[]
}

export interface SearchHits {
    recipe: SingleRecipe
}

export interface SingleRecipe {
    label: string
    image: string
    url: string
    ingredients: Ingredient[]
}

export interface Ingredient {
    food: string
}