import React from 'react'
import './Home.css'
import Hbg1 from '../images/Hbg1.jpg'
import Hbg2 from '../images/Hbg2.jpg'
import Hbg3 from '../images/Hbg3.jpg'
// import HS2Photo1 from '../images/HS2Photo1.avif'
// import HS2Photo2 from '../images/HS2Photo2.avif'
// import HS2Photo3 from '../images/HS2Photo3.avif'
// import HS2Photo4 from '../images/HS2Photo4.avif'
// import HS3Photo1 from '../images/HS3Photo1.webp'
// import HS3Photo2 from '../images/HS3Photo2.webp'
// import HS3Photo3 from '../images/HS3Photo3.webp'
// import HS4Photo1 from '../images/HS4Photo1.avif'
// import HS4Photo2 from '../images/HS4Photo2.avif'
// import HS4Photo3 from '../images/HS4Photo3.avif'
// import HS4Photo4 from '../images/HS4Photo4.avif'
// import HS6Photo1 from '../images/HS6Photo1.avif'
// import HS6Photo2 from '../images/HS6Photo2.avif'
// import HS6Photo3 from '../images/HS6Photo3.avif'
// import HS6Photo4 from '../images/HS6Photo4.avif'
// import HS7Photo1 from '../images/HS7Photo1.avif'
// import HS7Photo2 from '../images/HS7Photo2.avif'
// import HS7Photo3 from '../images/HS7Photo3.avif'
// import HS7Photo4 from '../images/HS7Photo4.avif'
// import HS9Photo1 from '../images/HS9Photo1.avif'
// import HS9Photo2 from '../images/HS9Photo2.webp'
// import HS9Photo3 from '../images/HS9Photo3.avif'
// import HS9Photo4 from '../images/HS9Photo4.avif'
// import HS10Photo1 from '../images/HS10Photo1.avif'
// import HS10Photo2 from '../images/HS10Photo2.webp'
// import HS10Photo3 from '../images/HS10Photo3.avif'
// import HS10Photo4 from '../images/HS10Photo4.webp'
// import HS11Photo1 from '../images/HS11Photo1.avif'
// import HS11Photo2 from '../images/HS11Photo2.avif'
// import HS11Photo3 from '../images/HS11Photo3.avif'
// import HS11Photo4 from '../images/HS11Photo4.webp'
// import Homes from '../products/Homes'
import Homes1 from '../products/Homes1'

import {useSelector, useDispatch} from 'react-redux'
import {addToCart, deleteFromCart}  from '../store/cartslice/Cartslice'
import { useState,useEffect } from 'react'

const Home = () => {
  const cartitems = useSelector((state) => state.cart.cartItems);
  const dispatch=useDispatch();
  const addCart=(item)=> {
    dispatch (addToCart(item))
  }
  const deleteCart=(item) => {
    dispatch(deleteFromCart(item))
  }
   const[ProductItems,setProductsItems]=useState([]);
  
    useEffect(()=>{
        fetch(`http://localhost:6001/sns`)
        .then((res)=>res.json())
        .then((data)=>
            setProductsItems(data))
    },[])

  return (
    <div>
      <div class="row Sec1">
        <div class="col-lg-12 s1div1">
          <p class="Sec1color1">SHOP CUTE</p>
          <p class="Sec1color1">LIVE CUTE</p>
          <p class="Sec1color2">Kawaii cute Homewars and Accessories Delivered to Your Door</p>
          <button class="Sec1buttonstyle">SHOP TRENDING</button>&nbsp; &nbsp;
          <button class="Sec1buttonstyle">SHOP NEW IN</button>
        </div>
      </div>


      <div class="row">
        <h3><b>TRENDING THIS WEEK</b></h3>
        <p>Shop Most Popular</p>
        {/* {Homes.map((item)=>(
        <div class="col-lg-3">
        <div class="card" key={item.id}>
          <img src={item.image} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
          <div class="card-body">
            <p class="card-title size">{item.title}</p>
            <p class="card-text">{item.des}</p>
            <p class="card-text">Rs:{item.price}</p>
            {
              cartitems.find(Items=> Items.id===item.id)?
              (
                <button class="btn btn-danger cartbutton" onClick={()=> deleteCart(item)}>Remove From Cart</button>
              )
              :
              (
                <button class="btn btn-danger cartbutton" onClick={()=> addCart(item)}>Add To Cart</button>
              )
            }
          </div>
        </div>
        </div>
        ))} */}

         {ProductItems.map((item)=>(
        <div class="col-lg-3">
        <div class="card" key={item.id}>
          <img src={item.img} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
          <div class="card-body">
            <p class="card-title size">{item.title}</p>
            <p class="card-text">{item.des}</p>
            <p class="card-text">Rs:{item.price}</p>
            {
              cartitems.find(Items=> Items.id===item.id)?
              (
                <button class="btn btn-danger cartbutton" onClick={()=> deleteCart(item)}>Remove From Cart</button>
              )
              :
              (
                <button class="btn btn-danger cartbutton" onClick={()=> addCart(item)}>Add To Cart</button>
              )
            }
          </div>
        </div>
        </div>
        ))}
      </div>
       
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="3000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Hbg1} class="d-block w-100" alt="Not working" width="321px" height="400px"/>
                      </div>
          <div class="carousel-item">
            <img src={Hbg2} class="d-block w-100" alt="Not working" width="321px" height="400px"/>
          </div>
          <div class="carousel-item">
            <img src={Hbg3} class="d-block w-100" alt="Not working" width="321px" height="400px"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
   
    <div class="row">
        <h3><b>TRENDING THIS WEEK</b></h3>
        <p>Shop Most Popular</p>
{Homes1.map((item)=>(
 <div class="col-lg-3">
 <div class="card" key={item.id}>
   <img src={item.image} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
   <div class="card-body">
     <p class="card-title size">{item.title}</p>
     <p class="card-text">{item.des}</p>
     <p class="card-text">Rs:{item.price}</p>

     <button class="hcartbuttonstyle">Add to Cart</button> 
   </div>
 </div>
</div>
))}
</div>

</div>
  )
}

export default Home
    

    

        {/* <div class="col-lg-3">
          <div class="card">
            <img src={HS2Photo2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Mochi Cat Kawaii Plushie</p>
              <p class="card-text">From Rs.3,700.00</p>
              <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS2Photo3} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
              <p class="card-text">From Rs.2,600.00</p>
              <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS2Photo4} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
              <p class="card-text">From Rs.10,400.00</p>
              <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid Sec3">
        <div class="row">
          <div class="col-lg-4">
            <div class="card Sec3bc">
              <img src={HS3Photo1} class="card-img-top" alt="Img Not Working" width="210px" height="330px" />
              <div class="card-body">
                <h5 class="card-title Sec3color1">SHOP HOME DECOR</h5>
                <p class="card-text">Make Every Day Kawaii!</p>
                <button class="Sec3buttonstyle">SHOP HOME</button>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card Sec3bc">
              <img src={HS3Photo2} class="card-img-top" alt="Img Not Working"  width="210px" height="330px" />
              <div class="card-body">
                <h5 class="card-title Sec3color1">SAKURA COLLECTION</h5>
                <p class="card-text">Shop Pink and Pretty</p>
                <button class="Sec3buttonstyle">SHOP SAKURA SEASON</button>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card Sec3bc">
              <img src={HS3Photo3} class="card-img-top" alt="Img Not Working"  width="210px" height="330px" />
              <div class="card-body">
                <h5 class="card-title Sec3color1">DESK ACCESSORIES</h5>
                <p class="card-text">Study in Kawaii style..</p>
                <button class="Sec3buttonstyle">SHOP DESK</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row Sec4">
        <h3><b>NEW IN 2025</b></h3>
        <p>Shop New Collection</p>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS4Photo1} class="card-img-top" alt="Img Not Working" width="1000" height="250px" />
            <div class="card-body">
              <p class="card-title size">Summer Insulated Stainless Steel Water Bottle Straw</p>
              <p class="card-text">RS. 4,900.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS4Photo2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Kawaii Cute Snake Baby Plushie Doll 2025</p>
              <p class="card-text">From Rs.2,500.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS4Photo3} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Cat paw Beauty Facial Ice Roller </p>
              <p class="card-text">From Rs.1,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS4Photo4} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Cozy Sleeping Bag Cat Bed</p>
              <p class="card-text"> From Rs.3,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>
      </div>

      <div class="row Sec5">
        <h4><b> WHAT OUR CUSTOMERS SAY</b></h4>
        <div class="col-lg-6 Sec5style">
            <p>My boyfriend loved it as soon as it arrived, a perfect gift for people that like keyboards that make soft sounds, would gladly buy it again for myself but in pink! &lt;3</p>
        </div>
        <div class="col-lg-6 Sec5style">
            <p>Got as a birthday gift, and they absolutely love it! They named it after a critter from Star Trek Lower Desks called Moopsy (I don't know how it's spelled)! It is very cute and perfectly derpy! :</p>
        </div>
      </div>

      <div class="row Sec6">
        <h3><b>SOFT TOYS AND PLUSHIES</b></h3>
        <p>Shop Adorable Plushies</p>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS6Photo1} class="card-img-top" alt="Img Not Working" width="1000" height="250px" />
            <div class="card-body">
              <p class="card-title size">18/25cm Strawberry / Carrot Bunny Zipper Surprise Plushie</p>
              <p class="card-text">From Rs. 1,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS6Photo2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Mochi Cat Kawaii Plushie</p>
              <p class="card-text">From Rs.3,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>


        <div class="col-lg-3">
          <div class="card">
            <img src={HS6Photo3} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Little Clementine Capybara Plushie </p>
              <p class="card-text">From Rs.3,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS6Photo4} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Sakura Cherry Blossom Plushie Pillow</p>
              <p class="card-text"> From Rs.2,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>
      </div>


      <div class="row Sec7">
        <h3><b>CUTE AND COZY LIGHTS</b></h3>
        <p>Shop Crazy Lights</p>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS7Photo1} class="card-img-top" alt="Img Not Working" width="1000" height="250px" />
            <div class="card-body">
              <p class="card-title size">18/25cm Strawberry / Carrot Bunny Zipper Surprise Plushie</p>
              <p class="card-text">From Rs. 1,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS7Photo2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Mochi Cat Kawaii Plushie</p>
              <p class="card-text">From Rs.3,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>


        <div class="col-lg-3">
          <div class="card">
            <img src={HS7Photo3} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Little Clementine Capybara Plushie </p>
              <p class="card-text">From Rs.3,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS7Photo4} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Sakura Cherry Blossom Plushie Pillow</p>
              <p class="card-text"> From Rs.2,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>
      </div>

      <div class="row Sec9">
        <h3><b>CUTE AND COZY LIGHTS</b></h3>
        <p>Shop Crazy Lights</p>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS9Photo1} class="card-img-top" alt="Img Not Working" width="1000" height="250px" />
            <div class="card-body">
              <p class="card-title size">18/25cm Strawberry / Carrot Bunny Zipper Surprise Plushie</p>
              <p class="card-text">From Rs. 1,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS9Photo2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Mochi Cat Kawaii Plushie</p>
              <p class="card-text">From Rs.3,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>


        <div class="col-lg-3">
          <div class="card">
            <img src={HS9Photo3} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Little Clementine Capybara Plushie </p>
              <p class="card-text">From Rs.3,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS9Photo4} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Sakura Cherry Blossom Plushie Pillow</p>
              <p class="card-text"> From Rs.2,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>
      </div>


       <div class="row Sec10">
        <h3><b>CUTE AND COZY LIGHTS</b></h3>
        <p>Shop Crazy Lights</p>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS10Photo1} class="card-img-top" alt="Img Not Working" width="1000" height="250px" />
            <div class="card-body">
              <p class="card-title size">18/25cm Strawberry / Carrot Bunny Zipper Surprise Plushie</p>
              <p class="card-text">From Rs. 1,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS10Photo2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Mochi Cat Kawaii Plushie</p>
              <p class="card-text">From Rs.3,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>


        <div class="col-lg-3">
          <div class="card">
            <img src={HS10Photo3} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Little Clementine Capybara Plushie </p>
              <p class="card-text">From Rs.3,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS10Photo4} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Sakura Cherry Blossom Plushie Pillow</p>
              <p class="card-text"> From Rs.2,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>
      </div>


      <div class="row Sec11">
        <h3><b>CUTE AND COZY LIGHTS</b></h3>
        <p>Shop Crazy Lights</p>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS11Photo1} class="card-img-top" alt="Img Not Working" width="1000" height="250px" />
            <div class="card-body">
              <p class="card-title size">18/25cm Strawberry / Carrot Bunny Zipper Surprise Plushie</p>
              <p class="card-text">From Rs. 1,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS11Photo2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Mochi Cat Kawaii Plushie</p>
              <p class="card-text">From Rs.3,700.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>


        <div class="col-lg-3">
          <div class="card">
            <img src={HS11Photo3} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Little Clementine Capybara Plushie </p>
              <p class="card-text">From Rs.3,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="card">
            <img src={HS11Photo4} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
            <div class="card-body">
              <p class="card-title size">Sakura Cherry Blossom Plushie Pillow</p>
              <p class="card-text"> From Rs.2,000.00</p>
              <button class="hcartbuttonstyle">Add to Cart</button> 
            </div>
          </div>
        </div>
      </div>

      <div class="row Sec8">
        <h4><b class="Sec8color"> LIVE A CUTE LIFE EVERY DAY</b></h4>
        <div class="col-lg-12 Sec5style">
          <p>Shop cute gifts, Kawaii accessories, everyday items, bags, bottles and more.
              With Free Shipping worldwide on every order, delivered straight to your door.
              Your satisfaction is our priority, contact us if you have any questions.
              Happy Shopping!</p>  
          <button class="Sec8buttonstyle">SHOP NOW</button>      
        </div>
      </div> */}
    {/* </div>
  )
}

export default Home */}
