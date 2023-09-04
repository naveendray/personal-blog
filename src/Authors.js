import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Authors = () => {

    const [authors, setAuthors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:8000/authors")
            .then((response) => response.json())
            .then((data) => {
                setAuthors(data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const author = {
            name: e.target.elements.authorName.value,
        };

        const nextId = Math.max(...authors.map((author) => author.id)) + 1;
        author.id = nextId;

        fetch("http://localhost:8000/authors", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(author),
        })
            .then(() => {
                setAuthors([...authors, author]);
                e.target.elements.authorName.value = '';
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleDelete = (id) => {
        fetch("http://localhost:8000/authors/" + id, {
            method: "DELETE",
        })
            .then(() => {
                setAuthors(authors.filter((author) => author.id !== id));
            })
            .catch((e) => {
                console.log(e);
            });
    };
    

    return (
        <div className="create">
            <h1>Authors</h1>

            <form onSubmit={handleSubmit}>
                <label>Author Name:</label>
                <input type="text" name="authorName" />
                <button>Add Author</button>
            </form>

            <ul>
                {authors.map((author) => (
                    <li key={author.id}>
                        {author.name+" "}
                        <button onClick={() => handleDelete(author.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        
        </div>
    );
};

export default Authors;
