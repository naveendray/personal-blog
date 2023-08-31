import { useState } from "react";

const Writers = () => {
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')
        fetch('http://localhost:8000/authors',{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({"name": author})
        }).then(() => {
            console.log('done')
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
        </div>
     );
}
 
export default Writers;