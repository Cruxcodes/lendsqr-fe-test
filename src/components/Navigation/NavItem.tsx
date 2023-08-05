import React from 'react'
import { NavLink } from 'react-router-dom';
interface Props{
    icon: string;
    iconInfo: string;
    Link: string;
}
const NavItem:React.FC<Props>= ({icon,Link,iconInfo}) => {
  return (
    <NavLink to={Link} className='nav-link'>
    <div className='nav-item'>
        <img src={icon} alt="Icon" className="nav-item_img" />
        <p className="nav-item_info">{iconInfo}</p>
    </div>
    </NavLink>
  )
}

export default NavItem