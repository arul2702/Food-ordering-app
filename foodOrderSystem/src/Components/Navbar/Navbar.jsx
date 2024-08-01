import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Contexts/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("home");
    const handleMenu=(e)=>{
        setMenu(e);
    }
    const {getTotalAmount} = useContext(StoreContext);
    
  return (

    <div className='navbar'>
        <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>handleMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>handleMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalAmount()>0?"dot":""}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
       
    </div>
  )
}

export default Navbar