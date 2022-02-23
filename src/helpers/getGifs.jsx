const getGifs = async(category) => {
    const apiKey = 'b8xiM4Xq6ey8m6tFPxpPFE49Tl3hjlRc'
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=${apiKey}`
    
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}

export default getGifs;