import React from "react";
import "../CSS/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="React Material-UI Cookbook: Build captivating user experiences using React and Material-UI"
            price={39.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41VbpRj10RL._SX404_BO1,204,203,200_.jpg"
          />
    
          <Product
            id="3254354345"
            title="Shuanghu Gaming Chair Office Chair Ergonomic PC Computer Chair with Reclining Racing Chair with Headrest and Lumbar Support Gaming Chair for Adults Teens Desk Chair (Black + Red)"
            price={115.68}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Ibd6gb-rL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Hori Nintendo Switch Split Pad Pro (Blue) Ergonomic Controller for Handheld Mode - Officially Licensed By Nintendo - Nintendo Switch"
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61bUfFoGV2L._SL1122_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={69.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816mZ4dV7JL._AC_SL1500_.jpg"
          />
      
          <Product
            id="49538094"
            title="PlayStation 5 Console"
            price={599.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Best Choice Products Faux Leather Upholstered Modern Convertible Folding Futon Sofa Bed for Compact Living Space, Apartment, Dorm, Bonus Room w/Removable Armrests, Metal Legs, 2 Cupholders - Black"
            price={189.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71XyIAuxGuL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;