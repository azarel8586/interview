import { useRef, useState, useEffect } from 'react';

export function useFetch(uri, initialLimit = 10) {
    const [limit, setLimit] = useState(initialLimit);
    const limitRef = useRef(limit);

    useEffect(()=> {
        limitRef.current = limit;
    }, [limit]);

    const fetchPage = async (pageParam = 0) => {
        const limit = limitRef.current;
        const offset = pageParam;
        const path = `${uri}?${new URLSearchParams({
            'limit': limit,
            'offset': offset
        })}`;

        const response = await fetch(path);
        console.log("res", response);

        if (!response.ok) {
            throw new Error('Error fetching data: ', response.statusText);
        }

        const data = await response.json();
        console.log("data", data);
        return data;
    }

    return { fetchPage, setLimit };
}