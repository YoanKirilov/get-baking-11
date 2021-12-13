import React from "react";
import './AllRecipes.css';
import Roll from './Rolls.jpg';
import Cake from './cake.jpg';
import Cookies from './cookies.jpg';
import Brownies from './Brownie.jpg';
import Container from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Browniess = () => {
    return ( 
<div class="Rolls">
    <div class="container"> 
    <div class="row">
    <div class="col">
    <img src={Brownies}/>
    </div>
    <div class="col">
    <t>Titile:</t><h5>Triple-Chocolate Brownies</h5>
    <t>Author:</t><h5>Mennatullah Isolde</h5>
    <t>Description:</t><h5>Cocoa powder, three kinds of chocolate, and a touch of creamy and sweet chickpea flour make these ultimate brownies a true fudgy decadence. A bonus? This is a simple stir-together recipe that can be mixed and baked in a flash.</h5>
    </div>
    </div>
    <div class="row">
        <div class="col">
            <DropdownButton id="dropdown-basic-button" title="Ingredient:">
                <p>1½ cups (255 grams) chopped 60% to 70% cacao dark chocolate, divided</p>
                <p>1¼ cups (213 grams) chopped milk chocolate, divided</p>
                <p>1 cup (227 grams) unsalted butter, cubed</p>
                <p>1 cup (200 grams) granulated sugar</p>
                <p>1 cup (220 grams) firmly packed dark brown sugar</p>
                <p>1¼ cups (156 grams) Bob’s Red Mill Organic All-Purpose Flour</p>
                <p>½ cup (60 grams) Bob’s Red Mill Chickpea Flour (see Note)</p>
                <p>¼ cup (21 grams) Dutch process cocoa powder</p>
                <p>2 teaspoons (6 grams) kosher salt</p>
                <p>1 teaspoon (2 grams) espresso powder</p>
                <p>4 large eggs (200 grams), lightly beaten</p>
                <p>2 teaspoons (8 grams) vanilla extract</p>
                <p>½ cup (85 grams) chopped white chocolate</p>
            </DropdownButton>
        </div>

        <div class="col">
            <DropdownButton id="dropdown-basic-button" title="Instructions:">
            <p>1. Preheat oven to 325°F (170°C). Spray a 13x9-inch baking pan with cooking spray. Line pan with parchment paper, letting excess extend over sides of pan.</p>
            <p>2. In the top of a double boiler, combine 1 cup (170 grams) dark chocolate, ¾ cup (128 grams) milk chocolate, and butter. Cook over simmering water, stirring occasionally, until melted and smooth. Turn off heat, and whisk in sugars. Remove from heat, and let cool slightly.</p>
            <p>3. In a medium bowl, sift together flours, cocoa, salt, and espresso powder. Set aside.</p>
            <p>4. Add eggs and vanilla to chocolate mixture, whisking until combined. Fold in flour mixture until a few bits of flour remain. Fold in white chocolate, remaining ½ cup (85 grams) dark chocolate, and remaining ½ cup (85 grams) milk chocolate. Spread batter into prepared pan.</p>
            <p>5. Bake until a wooden pick inserted in center comes out with a few moist crumbs, 35 to 40 minutes. Let cool completely in pan. Using excess parchment as handles, remove from pan, and cut into bars. Refrigerate in an airtight container for up to 1 week.</p>
            </DropdownButton>
        </div>
    </div>
    </div>
    <h1>Recipes you might also like:</h1>
    <div className="might">
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Roll}
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
    </div>
     );
}
 
export default Browniess;