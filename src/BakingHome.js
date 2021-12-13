import React from "react";
import Rolls from './Rolls.jpg';
import Cake from './cake.jpg';
import Cookies from './cookies.jpg';
import Brownies from './Brownie.jpg';
import Container from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Home = () => {
    
    return ( 
      <div class="container">
        <div className="home">
            <h1>Homepage</h1>
            <h2>Popular Recipes:</h2>
        <div className="slide">
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Rolls}
      alt="First slide"
    />
    <Carousel.Caption>
    <Card.Link href='./rolls'><h3>Cinnamon Rolls</h3></Card.Link>
      <p>These Cinnamon Rolls are our most popular recipe.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Cake}
      alt="Second slide"
    />
    <Carousel.Caption>
    <Card.Link href='./cakes'><h3>Cake</h3></Card.Link>
      <p>The recipe of this Cake is the most popular for the last month.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Cookies}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Card.Link href='./cookies'><h3>Cookies</h3></Card.Link>
      <p>These Cookies are easy to bake and tasty and that's the reason behind why there are so popular.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
       <div className="intro">
        <h1>Introduction:</h1>
        <a>We are aiming to encourage more people to bake at home. In our web-site you will find seasonal recipes, popular recipes and some extra recipes. </a>
        </div>
            
          <div className="seasonal">
            <h1>Seasonal Recipes:</h1>
            <div class="row g-3">

                <div class="col-md-auto col-lg-3">
                    <div class="card">
            <img src={Rolls} alt="Spring" class="card-img-top"/>
             <div class="card-body">
            <Card.Link href='./brownies'><h5 class="card-text">Spring</h5></Card.Link>
            <p class="card-text">The perfect recipe for the Spring for everyone!</p>
                </div></div></div>

                <div class="col-md-auto col-lg-3">
                <div class="card">
            <img src={Cake} alt="Summer" class="card-img-top"/>
             <div class="card-body">
            <Card.Link href='./cookies'><h5 class="card-text">Summer</h5></Card.Link>
            <p class="card-text">The cookies for which the kids are going crazy.</p>
             </div></div></div>

             <div class="col-md-auto col-lg-3">
                <div class="card">
            <img src={Brownies} alt="Autumn" class="card-img-top"/>
             <div class="card-body">
            <Card.Link href='./cakes'><h5 class="card-text">Autumn</h5></Card.Link>
            <p class="card-text">Brownies which are easy to bake and very tasty!</p>
             </div></div></div>

             <div class="col-md-auto col-lg-3">
                <div class="card">
            <img src={Cookies} alt="Winter" class="card-img-top"/>
             <div class="card-body">
            <Card.Link href='./rolls'><h5 class="card-text">Winter</h5></Card.Link>
            <p class="card-text">The cookies for which the kids are going crazy.</p>
             </div></div></div> 
            </div>   
        </div>
      </div>
    </div>
);
}
 
export default Home;