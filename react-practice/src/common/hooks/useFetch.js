import { useRef, useState, useEffect } from 'react';

const useFetch = (path, pageLimit = 20, offset = 1) => {
    const uri = path;
    const [limit, setLimit] = useState(pageLimit);
    const [page, setPage] = useState(offset);
    const pageRef = useRef(offset) 
    const limitRef = useRef(pageLimit);

    // update the limitRef every time the limit is altered
    useEffect(() => {
        limitRef.current = limit;
        pageRef.current = page;
    }, [limit, page]);

    const fetchNextPage = () => {
        setPage(page + 1);
        return fetchData();
    }

    const fetchPage = (target) => {
        setPage(target);
        return fetchData();
    }

    const fetchData = async () => {
        const limit = limitRef.current;
        const offset = pageRef.current;

        const restPath = `${uri}?${new URLSearchParams({
            limit: limit,
            offset: offset,
        })}`;

        const res = await fetch(restPath);

        console.log('FOP', res);
        return res;
    }

    fetchData();

    // fetch(OPEN_HOLIDAY_API + 'Countries')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('foo', json);
    //     setCountries(json);
    //   })
    //   .finally(() => setIsLoading(false));
}

export default useFetch;