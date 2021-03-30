import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GitExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']); 

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory setcategories={ setcategories } />
            <hr></hr>      

            <ol>
                {
                    categories.map((category, index) => {
                        return <li key={ category }> { category } </li>; 
                    })
                }
            </ol>


            {/* <ol>
                {
                    categories.map(category => (
                        <GifGrid key={ category } category = { category }/>
                    ))
                }
            </ol> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={ category } category={ category }  />       
                    ))
                }
            </ol>



        </>
    )
}

export default GitExpertApp;