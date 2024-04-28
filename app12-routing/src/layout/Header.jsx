import { Link, NavLink, useLocation } from "react-router-dom";
import { MENU_LIST } from "../utils/app.constant";

const Header = () => {
    const menuList = MENU_LIST;
    const location = useLocation();
    const activeRoute = location.pathname.split("/")[1];
    
    const menu = menuList.map((item) => {
        const active = (item.path.includes(activeRoute)) ? 'bg-gray-500 text-white': '';
        return <li className={`p-3 hover:bg-gray-500 hover:text-white font-semibold ${active}`} key={item.id}>
            <Link to={item.path}>{item.title}</Link>
            {/* <NavLink to={item.path} activeClassName="active">{item.title}</NavLink> */}
        </li>
    })
    return (
        <>
            <ul className="flex bg-gray-300">
                {menu}
            </ul>
        </>
    );
}

export default Header;