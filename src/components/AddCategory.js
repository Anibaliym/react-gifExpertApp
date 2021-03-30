import React, { useState } from 'react';
import { PropTypes } from 'prop-types'

const AddCategory = ( { setcategories } ) => {

    const [inputValue, setinpuValue] = useState(''); 

    const handledInputChange = (e) => {
        setinpuValue(e.target.value); 
    }

    const handledSubmit = (e) => {
        e.preventDefault();


        if(inputValue.trim().length > 2){
            setcategories(cats => [ inputValue, ...cats ]);
            setinpuValue('');
        }
        else {
            console.log('ningún valor'); 
        }

    }

    return (
        <form onSubmit={ handledSubmit }>
            <input type ='text' value = { inputValue } onChange = { handledInputChange }></input>
        </form>
    );
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired        
}

export default AddCategory; 


