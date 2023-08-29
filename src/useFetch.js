import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    setTimeout(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Could not feth data from the resourse");
            }
           return res.json()
        }).then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(err => {
            setError('Could not feth data from the resourseta');
            setIsPending(false);
        })
    },1000);
},[]);
return {data,isPending,error};
}

export default useFetch;