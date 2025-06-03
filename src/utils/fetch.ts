
const API_KEY = "qVxhR4JcRXUmWNo5pn3JZR1JxTcyxDuBWVnzlXIr";
const API_URL = "https://api.nasa.gov/planetary/apod";

fetch(`${API_URL}?api_key=${API_KEY}`)

export default async (urlParametros?: string) => {
    try {
        const respuesta = await fetch(
            `${API_URL}?api_key=${API_KEY}${typeof urlParametros !== 'undefined' && urlParametros?.length > 0
                ? urlParametros
                : ''
            }`);
        const data = await respuesta.json();

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
} 