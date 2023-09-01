import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/authors")
            .then(response => response.json())
            .then(data => setAuthors(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const blog = { title, body, author }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsLoading(false);
            // history.go(-1);
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Blog body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author: </label>

                <select
                     value={author}
                     onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="">Select an author</option>
                    {authors.map(author => (
                        <option key={author.id} value={author.name}>
                            {author.name}
                        </option>
                    ))}
                </select>

                {!isLoading && <button>Add blog</button>}
                {isLoading && <button>Adding blog</button>}
            </form>
        </div>
    );
}

export default Create;