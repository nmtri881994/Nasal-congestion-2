import fetch from 'isomorphic-unfetch';

const APIRoot = "https://images-api.nasa.gov";

export const searchByKeyGetAllResult = (keyword) => {
    try {
        return fetch(`${APIRoot}/search?q=${keyword}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error(error);
        return null;
    }
}