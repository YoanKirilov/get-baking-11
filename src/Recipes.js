import React from 'react';
import Rolls from './Rolls.jpg';
import Cake from './cake.jpg';
import Cookies from './cookies.jpg';
import Brownies from './Brownie.jpg';
import './Recipes.css';
import Container from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const Recipes = () => {
    return (  
            <div class="container">
          <div className="recipes">
            <h1>Recipes:</h1>
            <div class="row g-3">

                <div class="col-md-auto col-lg-3">
                    <div class="card">
            <img src={Rolls} alt="Rolls" class="card-img-top"/>
             <div class="card-body">
            <Card.Link href='./rolls'><h5 class="card-text">Rolls</h5></Card.Link>
            <p class="card-text">The perfect recipe for the Spring for everyone!</p>
                </div></div></div>

                <div class="col-md-auto col-lg-3">
                <div class="card">
            <img src={Cake} alt="Cake" class="card-img-top"/>
             <div class="card-body">
            <Card.Link href='./cakes'><h5 class="card-text">Cake</h5></Card.Link>
            <p class="card-text">The cookies for which the kids are going crazy.</p>
             </div></div></div>

             <div class="col-md-auto col-lg-3">
                <div class="card">
            <img src={Brownies} alt="Brownies" class="card-img-top"/>
             <div class="card-body">
            <Card.Link href='./brownies'><h5 class="card-text">Brownies</h5></Card.Link>
            <p class="card-text">Brownies which are easy to bake and very tasty!</p>
             </div></div></div>

             <div class="col-md-auto col-lg-3">
                <div class="card">
            <img src={Cookies} alt="Cookies" class="card-img-top"/>
             <div class="card-body">
            <Card.Link href='./cookies'><h5 class="card-text">Cookies</h5></Card.Link>
            <p class="card-text">The cookies for which the kids are going crazy.</p>
             </div>
             </div>
             </div> 
            </div>
            </div>
            
            <div className='recent-recipes'>
                <h1>Recent Recipes:</h1>
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
      src={Brownies}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Card.Link href='./brownies'><h3>Brownies</h3></Card.Link>
      <p>These Brownies are easy to bake and tasty and that's the reason behind why there are so popular.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>

        
    );
}
 
export default Recipes;
