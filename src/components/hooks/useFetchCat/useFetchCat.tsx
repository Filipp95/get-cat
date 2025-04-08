import { useEffect, useState } from "react";

interface Cat {
    id: string,
    url: string,
    width: number,
    height: number,
}

const useFetchCat = (refresh: boolean, enabled: boolean) => {
    const [cat, setCat] = useState<Cat[] | null>(null)

    const fetchCat = async () => {
        const API = 'https://api.thecatapi.com/v1/images/search';
        const response = await fetch(API)
        try {
            const data = await response.json();
            setCat(data);
        }
        catch (error) {
            console.log('failed to fetch', error)
        }
    }

    useEffect(() => {
        if (!refresh || !enabled) return 
        const getCats = setInterval(() => {
                console.log('Я включился', refresh, enabled)
                fetchCat()
            }, 5000)
        return () => clearInterval(getCats)
    }, [refresh, enabled])

    return {cat, fetchCat }

}

export default useFetchCat 