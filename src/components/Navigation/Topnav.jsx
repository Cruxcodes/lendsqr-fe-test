import React,{useEffect,useState} from 'react'
import image from '../../assets/img/Logo.png'
import Search from '../../assets/icons/Vector.png'
import Notifications from '../../assets/icons/Vector (1).png'
import Avatar from '../../assets/icons/avatar.png'
import {Link} from 'react-router-dom'

const Topnav = () => {

//   const [click, setClick] = useState<boolean>(false);
//   const [button, setButton] = useState<boolean>(true);
  

//   const handleClick = () => {
//     setClick(!click);
//   };
//   const closeMobileNav = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);
//     console.log(window.innerWidth)
//     useEffect(()=>{
//         if(window.innerWidth < 760){
//             show= true;
//             console.log(show)
//         }
//     },[window.innerWidth])
    // console.log(show)
  return (
    <div className="top-nav">
        <div className='top-nav_left'>
            <img src={image} alt="logo" className='logo'/>
           <form action="#!" className='search'>
                <input type="text" className='search-text'placeholder='Search for anything'/>
                <div className="search-icon">
                    <img src={Search} alt="icon"/>
                </div>
            </form>
        </div>


        <div className="top-nav_right">
            <Link to='' className='Link'>Docs</Link>
            <img src={Notifications} alt="" className="notification" />
            <div className="user">
                <img src={Avatar} alt="" />
                <p>Adetunji</p>
            </div>
        </div>

        

        

    </div>

  )
}

export default Topnav


