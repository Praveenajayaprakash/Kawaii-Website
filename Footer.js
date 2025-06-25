import React from 'react'
import './Footr.css'
import FLogo from '../images/FLogo.webp'


const Footer = () => {
  return (
    <div>
        <div class="FSec1"> 
          <div class="row Sec1">
            <div class="col-lg-12 s1div1">
              <ul class="Sec1ulstyling">
                <button class="buttonbgcolor">20%</button> &nbsp;&nbsp;&nbsp;
                <button class="buttonbgcolor">OFF</button>&nbsp;&nbsp;&nbsp;
                <button class="buttonbgcolor">CODE:</button>&nbsp;&nbsp;&nbsp;
                <button class="buttonbgcolor">BUNNY20</button>
              </ul>
              <p class="Sec1pstyling1">HAPPY EASTER</p>
              <p class="Sec1pstyling2"> Apply code in checkout and see you order total drop!</p>
          </div>
        </div> 

          <div class="row Sec2">
            <div class="col-lg-12">
              <p><b>SUBSCRIBE AND BE THE FIRST TO KNOW!</b></p>
              <p class="Sec2psize">Subscribe to our Newsletter and be the first to know about the latest news, fun blogs, sales and!</p>
              <p>discounts</p>
              <input type="email" placeholder="Enter email here"/>
              <button class="Sec2buttonstyle"> Subsricbe</button>
            </div>
          </div>

          <div class="row Sec3">
            <div class="col-lg-3">
              <ul class="Sec3decoration">
                <li class="Headingcolor">Shop Collections</li>
                <li>Home Decor</li>
                <li>Kawaii Fashion</li>
                <li>Acessories</li>
                <li>Stationery & School Supplies</li>
                <li>Soft Toys & Plushies</li>
                <li>Mystery Stationery Lucky Bag</li>
                <li>Gift Card <i class='bx bxs-heart'></i></li>
              </ul>
            </div>
            <div class="col-lg-3">
                <li class="Headingcolor">Useful links</li>
                <li>About us</li>
                <li>Reviews</li>
                <li>F.A.Q</li>
                <li>Sizing Chart</li>
                <li>Shipping & Delivery</li>
                <li>Kawaii News Blog</li>
                <li>Tract Your Order</li>
            </div>
            <div class="col-lg-3">
              <p class="Headingcolor"> Contact us</p>
              <p> Have questions or need help with an order. Please contact us using our contact form and a member of the team will be very happy to help.</p>
            </div>
            <div class="col-lg-3">
                <p>Join over 100K on Instagram and Follow Us @thekawaiishoppu</p>
                <ul class="Fflex">
                  <li><i class='bx bxl-facebook-square'></i></li>
                  <li><i class='bx bxl-instagram' ></i></li>
                  <li><i class='bx bxl-instagram' ></i></li>
                  <li><i class='bx bxl-pinterest'></i></li>
                  <li><i class='bx bxl-pinterest'></i></li>
                  <li><img src={FLogo} alt="not working" weight="20px" height="20px"/></li>
                </ul>
                <button class="buttonbgcolor1"><i class='bx bxs-heart'></i> Follow on shop</button>
            </div>
        </div>

        <div class="row Sec4">
          <div class="col-lg-6">
            <p>Shipping Policy | Refund Policy | Terms of Service | Privacy Policy</p>
            <p>Copyright © 2025 The Kawaii Shoppu.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer