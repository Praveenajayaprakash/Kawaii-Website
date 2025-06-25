import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.avif'

const Navbar = () => {
  return (
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class='SecN1'>
                    <div class="col-lg-12">
                        <h5>20% OFF! code 'BUNNY20'<span class="Sec1color">06:19:25:53</span></h5>
                        <h6>100% Free shipping to India</h6>
                    </div>
                </div>
            </div>


            <div class="row SecN2">
                <div class="col-lg-12 S2column2">
                    <ul>
                        <li class="padding1"><i class='bx bx-search-alt-2'></i></li>
                        <li class="Sec2Search padding1"><input type="search" placeholder="Search our store"/></li>
                        <li class="padding2"><img src={Logo} alt="imgage not working" width="305px" height="61px"/></li> 
                        <li> </li>
                        <li class="padding3">INDIA (INR ₹)</li>
                        <li class="padding4"><i class='bx bxs-user'></i></li>
                        <li class="padding5"><Link to='/cart'><i class='bx bx-shopping-bag'></i></Link></li>
                    </ul>
                </div>
            </div>

            <div className="row SecN3">
                <div className="col-lg-12">
                    <ul>
                        <li className="padding11"><Link to='/'>Home</Link></li>
                        <li className="padding12"><Link to='/popular'>Popular!</Link></li>
                        <li className="padding13"><Link to='/shop_now'>Shop Now</Link></li>
                        <li className="padding14">Wishlist</li>
                        <li className="padding15">Gift Card</li>
                        <li className="padding16">Shoppu Points</li>
                        <li className="padding17">Contact Us</li>
                        <li className="padding13"><Link to='/upload'>Doll Upload Form</Link></li>
                        <li className="padding13"><Link to='/uploadhats'>Hat Upload Form</Link></li>
                        <li className="padding13"><Link to='/validationform'>Validation Form</Link></li>
                        <li className="padding13"><Link to='/register'>Registration Form</Link></li>
                        <li className="padding13"><Link to='/login'>Login Form</Link></li>
                        <li className="padding13"><Link to='/singlegrid'>SingleGrid</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar