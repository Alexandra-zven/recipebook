import React from 'react';
import SearchRecipes from "./SearchRecipes";
import Details from "./Details";
import Grid from "@mui/material/Grid";
import ChoosenIngredients from "./ChoosenIngredients";

const Layout = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={4}>
                    <SearchRecipes/>
                    <ChoosenIngredients/>
                </Grid>
                <Grid item xs={8}>
                    <Details/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Layout;