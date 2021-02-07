import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GifItem } from './GifItem';

export const GridGif = ({ category }) => {


    const {data,loading}  = useFetchGif(category);

    return (
        <>
            <h3> {category} </h3>
            { loading && <p> Cargando... </p>}
            
            <ol className="card-container animate__animated animate__fadeIn">
                {
                    data.map((gif) =>
                        //  <GifItem key={ gif.id } gif= { gif }/>
                        <GifItem key={gif.id } {...gif} /> // {... gif } manda cada uno de los atributos como un props independiente
                    )
                }
            </ol>
        </>
    )
}
