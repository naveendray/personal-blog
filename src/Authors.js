import useFetch from "./useFetch";
import { useState } from "react";
import AuthorsList from "./AuthorsList";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Authors = () => {

    const {data,isPending,error} = useFetch("http://localhost:8000/authors");
    const [author, setAuthor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')
        fetch('http://localhost:8000/authors',{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({"name": author})
        }).then(() => {
            setAuthor('');
            history.push('/create')
        }).catch((e) => {
            console.log(e)
        })
    }

    return ( 
        <div className="create">

            <form onSubmit={handleSubmit}>
                <label>Author's Name:</label>
                <input 
                    type="text" 
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button>Save Author</button>
            </form>

            {error && <div>{ error }</div>}
            {isPending && <div>Loading . . .</div>}
            {data && <AuthorsList data={data} title="Authors list"/>}
        </div>
     );
}
 
export default Authors;