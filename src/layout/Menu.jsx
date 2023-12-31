import{ useLocation } from 'react-router-dom'
import { HouseIcon, UserGroupIcon } from "../icons";
import MenuItem from "./MenuItem";

const menu =[
    { id :1 , to :'/' , Icon : HouseIcon},
    { id :2 , to :'/friend' , Icon : UserGroupIcon}
]


export default function Menu() {
   const { pathname } = useLocation();
   console.log(pathname)
  return (
  <nav className=" flex justify-center items-center gap-5">
     { menu.map( el =>(
        <MenuItem key={el.id} to={el.to} Icon={el.Icon} active={pathname === el.to}/>
     ))}
      {/* <MenuItem to="/profile/123456" Icon={HouseIcon} active={ true }/> */}
  </nav>
  )
}
