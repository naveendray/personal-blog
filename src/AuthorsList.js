

const AuthorsList = (props) => {
    const authors = props.data;
    const title = props.title;
    

    const handleDelete = (id) => {
        fetch('http://localhost:8000/authors/'+id,{
            method: "DELETE"
        }).then(() => {
            console.log('deleted')

        })
    }

    return ( 
        <div className="authors-list">
            <h2>{title}</h2>
            {
                authors.map((author) => (
                    <div className="author-preview" key={author.id}>
                         <p>{author.name}</p>
                         <button onClick={() => handleDelete(author.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
     );
}
 
export default AuthorsList;