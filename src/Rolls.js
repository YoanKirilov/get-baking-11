import React from "react";
import './AllRecipes.css';
import Roll from './Rolls.jpg';
import Cake from './cake.jpg';
import Cookies from './cookies.jpg';
import Container from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Rolls = () => {
    return ( 
<div class="Rolls">
    <div class="container"> 
    <div class="row">
    <div class="col">
    <img src={Roll}/>
    </div>
    <div class="col">
    <t>Titile:</t><h5>Classic Cinnamon Rolls</h5>
    <t>Author:</t><h5>Hana Leandra</h5>
    <t>Description:</t><h5>The stickier, the better with this timeless treat. One of our favorite comfort foods, the recipe originated in Sweden, where they actually observe a Cinnamon Roll Day (Kanelbullens dag) on October 4, but we recommend celebrating these rolls every chance you get. Find more delicious yeasted bread recipes in our Bread 2020 special issue!</h5>
    </div>
    </div>
    <div class="row">
        <div class="col">
            <DropdownButton id="dropdown-basic-button" title="Ingredient:">
                <p>Cinnamon Roll Dough (recipe follows)</p>
                <p>¾ cup (165 grams) firmly packed light brown sugar</p>
                <p>1 tablespoon plus 1 teaspoon (8 grams) ground cinnamon</p>
                <p> ½ cup plus 3½ tablespoons (162 grams) unsalted butter, softened and divided</p>
                <p> 1 large egg (50 grams), lightly beaten</p>
                <p> ½ cup (112 grams) cream cheese, softened</p>
                <p> 1½ cups (180 grams) confectioners’ sugar</p>
                <p>  1 tablespoon (15 grams) whole milk, room temperature</p>
            </DropdownButton>
        </div>

        <div class="col">
            <DropdownButton id="dropdown-basic-button" title="Instructions:">
            <p>1. Spray a 10-inch round cake pan or a 13×9-inch rimmed baking sheet with cooking spray.</p>
            <p>2. Lightly punch down Cinnamon Roll Dough. Cover and let stand for 5 minutes. Turn out dough onto a lightly floured surface, and roll into an 18×12-inch rectangle.</p>
            <p>3. In a small bowl, combine brown sugar and cinnamon. Spread ½ cup plus 2 tablespoons (141 grams) butter onto dough, and sprinkle with sugar mixture, leaving a ½-inch border on one long side. Brush beaten egg onto border. Starting with long side opposite border, roll dough into a log, pinching seam to seal. Trim ends. Slice into 12 rolls, and place on prepared sheet. Let rise in a warm, draft-free place (75°F/24°C) until puffed and rolls are touching, about 30 minutes.</p>
            <p>4. Place a sheet of foil on bottom rack of oven, and preheat oven to 350°F (180°C).</p>
            <p>5. Bake until a wooden pick inserted in center comes out clean, about 25 minutes. Let cool in pan for 10 minutes. Remove from pan.</p>
            <p>6. In the bowl of a stand mixer fitted with the paddle attachment, beat cream cheese and remaining 1½ tablespoons (21 grams) butter at medium speed until creamy, 4 to 5 minutes. With mixer on low speed, gradually add confectioners’ sugar, beating until fluffy. Stir in milk until combined. Spread frosting onto warm rolls.</p>
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
 
export default Rolls;