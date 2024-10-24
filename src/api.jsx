const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_API_KEY;
console.log(import.meta.env.VITE_API_KEY);

export const FetchImages = async (query) => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
        //lJQXGl0MELzW4GMpyi04VqsRPuGu-bCa4Lr8jfOn194
        console.log(import.meta.env.VITE_UNSPLASH_ACCESS_KEY);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Could not fetch images:', error);
        throw error; // Rethrow the error for further handling
    }
};