import { useState, useEffect } from "react";

const useApi = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error (`Error ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            }   catch(error) {
                console.error(error.message);
            }
        }  
        getData(url);
    }, [url])

    return data;
}

export default useApi;