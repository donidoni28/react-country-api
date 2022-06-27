import axios from "axios";
import React, { useEffect, useInsertionEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function useAxios2() {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            let response = await axios.get('https://restcountries.com/v2/all')
            try {
                setPost(response.data);
            } catch (error) {
                setError(error.msg)
            }  finally {
                setLoading(false)
            }
        }
        fetch()
    }, []);

    // if (!post) return null;
    return [post, loading]
}