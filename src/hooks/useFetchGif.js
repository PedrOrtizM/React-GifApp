import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";
export const useFetchGif = (category) => {


    const [state, setState] = useState({ loading: true, data: [] });

    useEffect(() => {
        
        getGif(category).then((gifs) => {
            setState({ data: gifs, loading: false });
        });

    }, [category]); // array de dependecias, si la category cambia se vuelve a ejecutar el useEffect

    return state;


}
