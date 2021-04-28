import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_2x_v1._CB654576481_.png"
      ></img>
      <div className="home__row">
        <Product
          id="123455"
          title="Unfinished: A Memoir"
          price={3.5}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81MtLXww1YL._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="123477"
          title="New Apple iPhone 12 (128GB) - Blue"
          price={1299}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Gold (Latest Model)"
          price={999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product
          id="123488"
          title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Space Grey Aluminium Case with Black Sport Band"
          price={899}
          rating={4}
          image="https://m.media-amazon.com/images/I/71qMIJnrhFL._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Product
          id="123499"
          title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)"
          price={999}
          rating={5}
          image="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY436_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123455"
          title="Unfinished: A Memoir"
          price={3.5}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81MtLXww1YL._AC_UL320_SR320,320_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
