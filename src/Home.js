import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:49812/blogs")
        // fetch("http://json-service:8000/blogs")
        // fetch("http://localhost:8000/blogs")
        .then(res => {
         return res.json()
      }).then(data => {
          setBlogs(data);
      })
    }, []);

    return ( 
        <div className="Home">
            {blogs && <BlogList blogs={blogs} />}
        </div>
     );
}
 
export default Home;