import {SingleRecipe} from "../store/state.types";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

interface Props{
    recipe?: SingleRecipe
    status: React.Dispatch<React.SetStateAction<string>>
}

const OneRecipe = ({recipe, status}: Props) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {recipe?.label}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <img src={recipe?.image} width={'220px'} alt={'image'}/>
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={()=>status('')}>Back</Button>
            </CardActions>
        </Card>
    );
};

export default OneRecipe;