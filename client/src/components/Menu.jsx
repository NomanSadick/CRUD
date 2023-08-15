import { NavLink } from "react-router-dom";
const Menu = () => {
    return (
        <div>
            <div>
                <NavLink to={"/"}>Product List</NavLink>
                <NavLink to={"/create"}>Product Create</NavLink>
            </div>
        </div>
    );
};

export default Menu;