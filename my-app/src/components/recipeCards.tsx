import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Ingredient, SingleRecipe} from "../store/state.types";
import Button from "@mui/material/Button";
import './recipeCards.css'
import {Tooltip} from "@mui/material";

interface Props {
    recipe?: SingleRecipe
    ingredients: Ingredient[]
    status:  React.Dispatch<React.SetStateAction<string>>
}

export default function RecipeCards({recipe, ingredients, status}:Props) {
    return (
        <Card sx={{ height: 400, minWidth: 275 }}>
            <CardContent>
                <Tooltip title={recipe?.label}>
                <p className={'recipe-card-label'}>
                    {recipe?.label}
                </p>
                </Tooltip>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <img src={recipe?.image} width={'220px'} alt={'image'}/>
                </Typography>
                <p className={'recipe-card-ingredients'}>
                    {ingredients.reduce((previousValue: string[], currentValue)=>{
                        return [...previousValue, currentValue.food]
                    }, []).join(', ')}
                </p>
                </CardContent>
            <CardActions>
                <Button onClick={()=>status(recipe?.label||'')}>See more details</Button>
            </CardActions>
        </Card>
    );

}