import { href, NavLink } from "react-router-dom"

export const ItemNavbar = ({contentItem,myStyles, route}) => {
  return (
   <li >
    <NavLink className={myStyles} to={route}  href={href}>{contentItem}</NavLink>
   
   </li>
  )
}
