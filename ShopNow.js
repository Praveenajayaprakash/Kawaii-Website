import React from 'react'
import './Show_now.css'
import Show_nows from '../products/Show_nows'
// import SPhoto1 from '../images/SPhoto1.avif'
// import SPhoto2 from '../images/SPhoto2.webp'
// import SPhoto3 from '../images/SPhoto3.avif'
// import SPhoto4 from '../images/SPhoto4.avif'
// import SPhoto5 from '../images/SPhoto5.avif'
// import SPhoto6 from '../images/SPhoto6.avif'
// import SPhoto7 from '../images/SPhoto7.avif'
// import SPhoto8 from '../images/SPhoto8.webp'
// import SPhoto9 from '../images/SPhoto9.avif'
// import SPhoto10 from '../images/SPhoto10.avif'
// import SPhoto11 from '../images/SPhoto11.avif'
// import SPhoto12 from '../images/SPhoto12.avif'
// import SPhoto13 from '../images/SPhoto13.webp'
// import SPhoto14 from '../images/SPhoto14.avif'
// import SPhoto15 from '../images/SPhoto15.avif'
// import SPhoto16 from '../images/SPhoto16.avif'
// import SPhoto17 from '../images/SPhoto17.webp'
// import SPhoto18 from '../images/SPhoto18.avif'
// import SPhoto19 from '../images/SPhoto19.avif'
// import SPhoto20 from '../images/SPhoto20.avif'
// import SPhoto21 from '../images/SPhoto21.avif'
// import SPhoto22 from '../images/SPhoto22.avif'
// import SPhoto23 from '../images/SPhoto23.avif'
// import SPhoto24 from '../images/SPhoto24.webp'
// import SPhoto25 from '../images/SPhoto25.avif'
// import SPhoto26 from '../images/SPhoto26.avif'
// import SPhoto27 from '../images/SPhoto27.avif'
// import SPhoto28 from '../images/SPhoto28.avif'
// import SPhoto29 from '../images/SPhoto29.avif'
// import SPhoto30 from '../images/SPhoto30.avif'
// import SPhoto31 from '../images/SPhoto31.avif'
// import SPhoto32 from '../images/SPhoto32.avif'
// import SPhoto33 from '../images/SPhoto33.avif'
// import SPhoto34 from '../images/SPhoto34.avif'
// import SPhoto35 from '../images/SPhoto35.avif'
// import SPhoto36 from '../images/SPhoto36.avif'
// import SPhoto37 from '../images/SPhoto37.avif'
// import SPhoto38 from '../images/SPhoto38.avif'
// import SPhoto39 from '../images/SPhoto39.avif'
// import SPhoto40 from '../images/SPhoto40.avif'
// import SPhoto41 from '../images/SPhoto41.avif'
// import SPhoto42 from '../images/SPhoto42.avif'
// import SPhoto43 from '../images/SPhoto43.webp'
// import SPhoto44 from '../images/SPhoto44.avif'
// import SPhoto45 from '../images/SPhoto45.avif'
// import SPhoto46 from '../images/SPhoto46.avif'
// import SPhoto47 from '../images/SPhoto47.avif'
// import SPhoto48 from '../images/SPhoto48.avif'

const ShopNow = () => {
  return (
    <div>
      <div class="container">        
        <div class="row">
          <div class="col-lg-12">   
              <p class="SecP2Size1">ACCESSORIES</p>
              <h5 class="SecP2Size2">Complete your kawaii look with our must-have selection of accessories. From kawaii jewellery and adorable key-rings to cute hats and pastel phone accessories, we've got all the little things that make a big kawaii impact. 🌸🌟💕</h5>
          </div>
        </div>

        <div class="row">
          {Show_nows.map((item)=>(
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


        {/* <div class="row SecP3">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto1} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto2} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto3} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto4} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}


      {/* <div class="row SecP4">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto5} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto6} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto7} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto8} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}

      {/* <div class="row SecP5">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto9} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto10} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto11} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto12} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}

      {/* <div class="row SecP6">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto13} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto14} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto15} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto16} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}

      {/* <div class="row SecP7">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto17} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto18} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto19} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto20} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}

      {/* <div class="row SecP8">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto21} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto22} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto23} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto24} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP9">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto25} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto26} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto27} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto28} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}

      {/* <div class="row SecP10">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto29} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto30} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto31} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto32} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}

      {/* <div class="row SecP11">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto33} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto34} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto35} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto36} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP12">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto37} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto38} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto39} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto40} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div>

      <div class="row SecP13">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto41} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto42} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto43} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto44} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}

      {/* <div class="row SecP14">
          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto45} class="card-img-top" alt="Img Not Working" width="900" height="250px" />
              <div class="card-body">
                <p class="card-title size">Kawaii Cute Capybara Stationery</p>
                <p class="card-text">Pencil Case</p>
                <p class="card-text">From Rs.1,600.00</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto46} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Mochi Cat Kawaii Plushie</p>
                <p class="card-text">From Rs.3,700.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;4 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto47} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Study Essential ITA Multi Pocket School Travel Backpack</p>
                <p class="card-text">From Rs.2,600.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={SPhoto48} class="card-img-top" alt="Img Not Working" width="900px" height="250px" />
              <div class="card-body">
                <p class="card-title size">Shoppu Heart Professional USB Noise Reduction Pink Microphone For Mobile Phone</p>
                <p class="card-text">From Rs.10,400.00</p>
                <p class="card-text"><span class="reviewcolor"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></span>&nbsp; &nbsp;6 reviews</p>
                <button class="scartbuttonstyle">Add to Cart</button>
              </div>
            </div>
          </div>
      </div> */}
    </div>      
  </div>
  )
}

export default ShopNow