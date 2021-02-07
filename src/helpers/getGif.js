

export const getGif = async ( category ) => {
    const url = 'https://api.giphy.com/v1/gifs/search?q='+encodeURI(category)+'&limit=10&api_key=b2eay4Ra4r6snWK3t5CLpxslc0GNYnry'
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images }) => {
        return { id, title, url: images?.downsized_medium.url }
    })
    return gifs;
}