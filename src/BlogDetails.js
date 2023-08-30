import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = (props) => {
    const { id } = useParams();
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const handleClick = () => {
        console.log('clicked')
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method: 'DELETE'
        }).then(() => {
            console.log('deleted')
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details" >
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>Written by : {blog.author}</h2>
                    <p>{ blog.body }</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )
            }
        </div>
     );
}
 
export default BlogDetails;