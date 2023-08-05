import React from 'react'
import NavItem from './NavItem'
import { Customers,Business,Settings} from '../../shared/Navdata'
import { v4 as uuidv4 } from 'uuid';
import briefcase from '../../assets/icons/briefcase.png'
import home from '../../assets/icons/home 1 (1).png'
const SideNav = () => {
  return (
    
    <div className="side-nav">

<div className="nav-link switch">
      <div className='nav-item '>
        <img src={briefcase} alt="Icon" className="nav-item_img" />
        <select name="rate" className='nav-item_info' id="">
          <option value="this" >Switch Organization</option>
          <option value="this">Option 1</option>
          <option value="this">Option 2</option>
          <option value="this">Option 3</option>
        </select>
      </div>
</div>

        <NavItem icon={home} iconInfo='Dashboard' Link='/null'/>

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
    </div>
  )
}

export default SideNav