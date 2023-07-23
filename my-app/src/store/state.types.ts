export default interface InitialState {
    ingredients: string[],
    recipe?: OneRecipe
}

export interface OneRecipe {
    name: string,
    description: string
}