import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image'
             src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/Herotator/3000x1200_V1_Rec-June_PP._CB633387198_.jpg'
             alt='' 
            />

              <div className='home_row'>
               <Product 
                id='12454213'
                title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
                price={200}
                rating={4}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' 
                />
               <Product 
                 id="49538094"
                 title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                 price={799}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
               />
               <Product 
                 id="12495094"
                 title="
                 Lenovo IdeaPad Gaming 3 Intel Core i5 10th Gen 15.6-inch (39.6 cm) FHD 120Hz IPS Gaming Laptop (8GB/512 SSD/Windows."
                 price={52450}
                 rating={5}
                 image="https://m.media-amazon.com/images/I/61fpo-87DyL._AC_SX480_SY360_.jpg"
               />
               </div>
               
            <div className='home_row'>
            <Product
            id="4903850"
            title="Smart Watch Bluetooth Smart Fitness Band Watch with Heart Rate Activity Tracker Waterproof Body, Calorie Counter, Blood Pressure OLED Touchscreen for Men/Women"
            price={3999}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

            <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={2499}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />

          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={18599}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          </div>

         <div className='home_row'>
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={29999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />

         </div>
        </div>
    </div>
  )
}

export default Home