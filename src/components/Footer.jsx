import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <footer className='Footer'>
    <div className="footerUp">
        <div className="footerMenu">
            <h1 className="fMenuTitle">About Us</h1>
            <ul className="fList">
            <Link to="/company" className='Link'>
                <li className="fListItem">Company</li>
            </Link>
            <Link to="/contact" className='Link'>
                <li className="fListItem">Contact</li>
            </Link>
            <Link to="/support" className='Link'>
                <li className="fListItem">Support</li>
            </Link>
            <Link to="/store" className='Link'>
                <li className="fListItem">Store</li>
            </Link>
            </ul>
        </div>
        <div className="footerMenu">
        <Link to="/brands" className='Link'>
            <h1 className="fMenuTitle">Brands</h1>
            </Link>
            <ul className="fList">
            <Link to="/brands/willier" className='Link'>
                <li className="fListItem">Willier</li>
            </Link>
            <Link to="/brand/mavic" className='Link'>
                <li className="fListItem">Mavic</li>
            </Link>
            <Link to="/brands/oakley" className='Link'>
                <li className="fListItem">Oakley</li>
            </Link>
            <Link to="/brands/stc" className='Link'>
                <li className="fListItem">Stc</li>
            </Link>
            </ul>
        </div>
        <div className="footerMenu">
        <Link to="/products" className='Link'>
            <h1 className="fMenuTitle">Products</h1>
        </Link>
            <ul className="fList">
            <Link to="/products/bikes" className='Link'>
                <li className="fListItem">Bikes</li>
            </Link>
            <Link to="/products/accessory" className='Link'>
                <li className="fListItem">Accessory</li>
            </Link>
            <Link to="/products/clothes" className='Link'>
                <li className="fListItem">Clothes</li>
            </Link>
            <Link to="/products/nutrition" className='Link'>
                <li className="fListItem">Nutrition</li>
            </Link>
            </ul>
        </div>
        <div className="footerMenu">
            <h1 className="fMenuTitle">Coded & assisted by</h1>
            <div className="fIcons">
                <img src="https://res.cloudinary.com/ironbike/image/upload/v1650056735/Main/ironhack-logo_dzpi90.png" alt="ironHack" className="fIcon"/>
                <img src="https://res.cloudinary.com/ironbike/image/upload/v1650058983/Main/002-linkedin_riiaqw.png" alt="linkedin" className="fIcon"/>
                <img src="https://res.cloudinary.com/ironbike/image/upload/v1650058983/Main/001-stripe_huaqam.png" alt="stripe" className="fIcon"/>
                <img src="https://res.cloudinary.com/ironbike/image/upload/v1650059181/Main/react_ilbhst.png" alt="react" className="fIcon"/>
            </div>
            <div className="fIcons">
                <img src="https://res.cloudinary.com/ironbike/image/upload/v1650060073/Main/001-visual-basic_lctxan.png" alt="vscode" className="fIcon"/>
                <img src="https://res.cloudinary.com/ironbike/image/upload/v1650060073/Main/002-html-5_tzr3kz.png" alt="html-5" className="fIcon"/>
                <img src="https://res.cloudinary.com/ironbike/image/upload/v1650060073/Main/004-css-3_g4xb7p.png" alt="css-3" className="fIcon"/>
                <img src="https://res.cloudinary.com/ironbike/image/upload/v1650060073/Main/003-js_hhshrh.png" alt="js" className="fIcon"/>
            </div>
        </div>
    </div>
        <div className="footerDown">
            <span className="copyright"> ©Iron Bike . All rights reserved. 2022.</span>
        </div>
</footer>

    )
}

export default Footer