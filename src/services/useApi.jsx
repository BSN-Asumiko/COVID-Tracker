import { useState, useEffect } from "react";

const useApi = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}`);
                }
                const jsonData = await response.json();
                console.log("I am in useApi", jsonData)
                setData(jsonData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getData(url);
    }, [url]);

    return { data, loading, error };
};

export default useApi;
