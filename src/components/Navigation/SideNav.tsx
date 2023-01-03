import React from 'react'
import NavItem from './NavItem'
import image from '../../assets/icons/user-friends 1.svg'
import { Customers,Business,Settings} from '../../shared/Navdata'
import { v4 as uuidv4 } from 'uuid';
const SideNav = () => {
  return (
    <>
      <div>
        <p className='nav-heading'>CUSTOMERS</p>
        {Customers.map((item)=>{
          const id = uuidv4();
          return <NavItem key={id} {...item}/>        
        })}
      </div>

      <div>
        <p className='nav-heading'>BUSINESSES</p>
        {Business.map((item)=>{
          const id = uuidv4();
          return <NavItem key={id} {...item}/>        
        })}
      </div>

      <div>
        <p className='nav-heading'>SETTINGS</p>
        {Settings.map((item)=>{
          const id = uuidv4();
          return <NavItem key={id} {...item}/>        
        })}
      </div>
    </>
  )
}

export default SideNav