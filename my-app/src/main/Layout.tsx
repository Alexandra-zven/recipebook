import React from 'react';
import SearchRecipes from "../components/SearchRecipes";
import Details from "../components/Details";
import Grid from "@mui/material/Grid";
import './layout.css';

const Layout = () => {
    return (
        <div className={'layout'}>
            <Grid container className={'layout'}>
                <Grid item xs={4}>
                    <SearchRecipes/>
                </Grid>
                <Grid item xs={8} className={'grid-details'}>
                    <Details/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Layout;