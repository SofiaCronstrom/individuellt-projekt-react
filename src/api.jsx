const apiKey = import.meta.env.VITE_API_KEY;

export const FetchImages = async (query) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
        headers: {
            Authorization: `Client-ID ${apiKey}`
        }
});
if (!response.ok){
    throw new Error('No network response');
}
const data = await response.json();
return data.results;
}