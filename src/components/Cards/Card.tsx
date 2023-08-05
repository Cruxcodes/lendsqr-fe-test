import React from 'react'
interface Props{
    icon:string;
    text:string;
    count:number;
}
const Card:React.FC<Props>= ({icon,text,count}) => {
  return (
    <div className='card'>
        <img src={icon} alt="icon" />
        <p className='tag-text'>{text}</p>
        <p className="number-count">{count}</p>
    </div>
  )
}

export default Card