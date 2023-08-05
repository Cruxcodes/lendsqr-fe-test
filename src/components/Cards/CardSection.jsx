import React from 'react'
import Card from './Card'
import image from '../../assets/icons/avatar.png'
const CardSection = () => {
  return (
    <div className='card-section'>        
        <Card icon={image} text="users" count={3243}/>
        <Card icon={image} text="users" count={3243}/>
        <Card icon={image} text="users" count={3243}/>
        <Card icon={image} text="users" count={3243}/>
    </div>
  )
}

export default CardSection