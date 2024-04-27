import { Link } from "react-router-dom";
import { MENU_LIST } from "../utils/app.constant";

const Header = () => {
    const menuList = MENU_LIST;
    const menu = menuList.map((item) => {
        return <li key={item.id}>
            <Link to={item.path}>{item.title}</Link>
        </li>
    })
    return (
        <>
            <ul>
                {menu}
            </ul>
        </>
    );
}

export default Header;