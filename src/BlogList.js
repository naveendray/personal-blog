import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {

    const blogs = props.data;
    const title = props.title;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
               {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{ blog.title }</h2>
                    </Link>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
      );
}
 
export default BlogList;