import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GridGif } from './components/GridGif';

export const GifApp = () => {

    const [categories, setCategories] = useState([]);

    // const addCategory = ()=>{
    //     setCategories([...categories,'Super Campeones']);
    // }

    return (
        <>
            <h2>GifAPP</h2>
            <hr />
            <AddCategory setCategories={ setCategories }/>
            <ol>
                {
                categories
                .map(c =>  <GridGif category={c} key={ c } /> )
                }
            </ol>

        </>
    )
}
