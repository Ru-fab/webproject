import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false
  };

  const products = [
    { id: 1, name: 'Laptop', image: 'laptop.jpg', price: '1,700,000 RWF' },
    { id: 2, name: 'Printer', image: 'printer.jpg', price: '500,000 RWF' },
    { id: 3, name: 'Keyboard', image: 'keyboard.jpg', price: '50,000 RWF' },
    { id: 4, name: 'Monitor', image: 'monitor.jpg', price: '400,000 RWF' },
    { id: 5, name: 'Mouse', image: 'mouse.jpg', price: '30,000 RWF' },
    { id: 6, name: 'Headphones', image: 'headphones.jpg', price: '150,000 RWF' }
  ];