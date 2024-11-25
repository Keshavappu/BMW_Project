import React from "react";
import Slider from "react-slick";


const CarSlider = () => {
  const sliderSettings = {
    dots: true, // Adds navigation dots
    infinite: true, // Allows infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 6, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const carData = [
    { id: 6, title: "THE Z4", img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/Z4/10183/1685003672330/front-left-side-47.jpg"  },
    { id: 1, title: "THE i5 M60", img: "https://cdn.prod.website-files.com/5ec85520c4dfff034b036be2/6585f59415f218dc69265f62_bmw15.webp" },
    { id: 2, title: "THE M235", img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-performance-automobile/m235-xdrive-gran-coupe/bmw-m235-xdrive-gran-coupe-hd-07.jpg" },
    { id: 3, title: "THE M2", img: "https://r44performance.com/cdn/shop/articles/BMW-F87-M2-Competition-Modified.jpg?v=1710949620&width=1500" },
    
    { id: 5, title: "THE i7 M760e ", img: "https://www.bmw.in/content/dam/bmw/common/all-models/m-series/m760e-xdrive/2023/highlights/bmw-7-series-i7-m70-sd-bmw-individual-03.jpg" },
    { id: 4, title: "THE M340", img: "https://k9a2s5e2.rocketcdn.me/wp-content/uploads/2022/03/BMW-M340-Ceramic-Coating-14.jpg" },
   
    { id: 7, title: "THE M40i", img: "https://static0.topspeedimages.com/wordpress/wp-content/uploads/2023/06/bmw-m8_competition_gran_coupe-2023-1280-04.jpg" },
  ];

  return (
    <div className="slider-container">
      <h2 className="slider-title">MORE NEW M MODELS</h2>
      <p className="slider-subtitle">Experience now.</p>
      <Slider {...sliderSettings}>
        {carData.map((car) => (
          <div key={car.id} className="card">
            <img src={car.img} alt={car.title} className="card-image"  height="250px" width="200px"/>
            <h3 className="card-title">{car.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
