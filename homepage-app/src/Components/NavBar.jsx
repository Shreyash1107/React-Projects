import "./nav.css";
import Register from "./Register";
const NavBar=()=>{
    return(<>
        <div className="container">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            <Register/>
        </div>
    </>)
}
export default NavBar;