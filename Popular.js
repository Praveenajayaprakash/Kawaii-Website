import React from 'react'
import './Popular.css'
import Populars from '../products/Populars'
// import HS2Photo1 from '../images/HS2Photo1.avif'
// import HS2Photo2 from '../images/HS2Photo2.avif'
// import HS2Photo3 from '../images/HS2Photo3.avif'
// import HS2Photo4 from '../images/HS2Photo4.avif'
// import PPhoto1 from '../images/PPhoto1.avif'
// import PPhoto2 from '../images/PPhoto2.avif'
// import PPhoto3 from '../images/PPhoto3.webp'
// import PPhoto4 from '../images/PPhoto4.avif'
// import PPhoto5 from '../images/PPhoto5.avif'
// import PPhoto6 from '../images/PPhoto6.avif'
// import PPhoto7 from '../images/PPhoto7.avif'
// import PPhoto8 from '../images/PPhoto8.avif'
// import PPhoto9 from '../images/PPhoto9.avif'
// import PPhoto10 from '../images/PPhoto10.avif'
// import PPhoto11 from '../images/PPhoto11.avif'
// import PPhoto12 from '../images/PPhoto12.avif'
// import PPhoto13 from '../images/PPhoto13.avif'
// import PPhoto14 from '../images/PPhoto14.avif'
// import PPhoto15 from '../images/PPhoto15.avif'
// import PPhoto16 from '../images/PPhoto16.avif'
// import PPhoto17 from '../images/PPhoto17.avif'
// import PPhoto18 from '../images/PPhoto18.avif'
// import PPhoto19 from '../images/PPhoto19.avif'
// import PPhoto20 from '../images/PPhoto20.avif'
// import PPhoto21 from '../images/PPhoto21.avif'
// import PPhoto22 from '../images/PPhoto22.avif'
// import PPhoto23 from '../images/PPhoto23.avif'
// import PPhoto24 from '../images/PPhoto24.webp'
// import PPhoto25 from '../images/PPhoto25.avif'
// import PPhoto26 from '../images/PPhoto26.webp'
// import PPhoto27 from '../images/PPhoto27.avif'
// import PPhoto28 from '../images/PPhoto28.avif'
// import PPhoto29 from '../images/PPhoto29.avif'
// import PPhoto30 from '../images/PPhoto30.avif'
// import PPhoto31 from '../images/PPhoto31.avif'
// import PPhoto32 from '../images/PPhoto32.avif'
// import PPhoto33 from '../images/PPhoto33.avif'
// import PPhoto34 from '../images/PPhoto34.avif'
// import PPhoto35 from '../images/PPhoto35.avif'
// import PPhoto36 from '../images/PPhoto36.avif'
// import PPhoto37 from '../images/PPhoto37.avif'
// import PPhoto38 from '../images/PPhoto38.avif'
// import PPhoto39 from '../images/PPhoto39.avif'
// import PPhoto40 from '../images/PPhoto40.avif'
// import PPhoto41 from '../images/PPhoto41.avif'
// import PPhoto42 from '../images/PPhoto42.avif'
// import PPhoto43 from '../images/PPhoto43.avif'
// import PPhoto44 from '../images/PPhoto44.webp'

const Popular = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <p class="SecP1Pleft">Home- Trending this week</p> 
          </div>
          <div class="col-lg-9">
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">   
              <p class="SecP2Size1">TRENDING THIS WEEK</p>
              <h5 class="SecP2Size2">Explore the latest trends in the world of Kawaii and shop this weeks bestsellers! ✨</h5>
          </div>
        </div>

        <div class="row">
{Populars.map((item)=>(
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
      


          {/* <div class="col-lg-3">
            <div class="card">
              <img src={HS2Photo2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
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
                <button class="pcartbuttonstyle">Add to Cart</button>
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
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>


      <div class="row SecP4">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto1} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto3} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto4} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP5">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto5} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto6} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto7} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto8} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP6">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto9} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto10} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto11} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto12} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP7">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto13} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto14} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto15} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto16} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP8">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto17} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto18} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto19} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto20} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP9">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto21} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto22} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto23} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto24} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP10">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto25} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto26} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto27} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto28} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP11">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto29} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto30} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto31} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto32} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP12">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto33} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto34} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto35} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto36} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP13">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto37} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto38} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto39} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto40} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP14">
          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto41} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto42} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto43} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={PPhoto44} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="pcartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}
    </div>      
  </div>
  )
}

export default Popular
    