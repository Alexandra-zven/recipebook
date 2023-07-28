import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Ingredient, SingleRecipe} from "../store/state.types";
import Button from "@mui/material/Button";

interface Props {
    recipe?: SingleRecipe
    ingredients: Ingredient[]
    status:  React.Dispatch<React.SetStateAction<string>>
}

export default function RecipeCards({recipe, ingredients, status}:Props) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {recipe?.label}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <img src={recipe?.image} width={'220px'} alt={'image'}/>
                </Typography>
                <Typography variant="body2">
                    {ingredients.map(e => <Typography>{' '}{e.food}</Typography>)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={()=>status(recipe?.label||'')}>See more details</Button>
            </CardActions>
        </Card>
    );
}