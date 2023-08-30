import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h4>Sorry... The page you are tried to visit is not available. 404</h4>
            <Link to='/'>
                <p>Click on this link to go to the home page</p>
            </Link>
        </div>
     );
}
 
export default NotFound;