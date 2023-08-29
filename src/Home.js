import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data,isPending,error} = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="Home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading . . .</div>}
            {data && <BlogList data={data} />}
        </div>
     );
}
 
export default Home;