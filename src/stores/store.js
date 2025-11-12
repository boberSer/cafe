import {BASE_URL} from "@/consts";


export const api = async (url, options = {}) => {
    const response = await fetch(BASE_URL + url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token') || ''}`,
            ...options.headers,
        },
    })

    const data = await response.json()

    return data
}