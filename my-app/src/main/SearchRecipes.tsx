import React, {SyntheticEvent, useEffect} from 'react';
import {Autocomplete} from "@mui/material";
import TextField from "@mui/material/TextField";

const test = ['onion', 'lamb', 'beef', 'egg'];

const SearchRecipes = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<string | null>(null);

    const handlerCheckValue = (_: SyntheticEvent, value: string) => {
        if(value.length === 0){
             setOpen(false)
        }
        else{setOpen(true);
        }
    }

    const handlerSaveValue = (_: SyntheticEvent, value: string | null) => {
        setValue(value);
    }

    useEffect(()=>{
        console.log(value) //TODO: add search func
    }, [value])

    return (
        <div style={{border: '1px solid black'}}>
            <Autocomplete
                open={open}
                onInputChange={handlerCheckValue}
                onChange={handlerSaveValue}
                onClose={()=>{
                    setOpen(false);
                }}
                options={test}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Enter your ingredient" />}
            />
        </div>
    );
};

export default SearchRecipes;