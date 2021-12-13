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

const Cakes = () => {
    return ( 
<div class="Rolls">
    <div class="container"> 
    <div class="row">
    <div class="col">
    <img src={Cake}/>
    </div>
    <div class="col">
    <t>Titile:</t><h5>London Fog Cake</h5>
    <t>Author:</t><h5>Augusta Aurora</h5>
    <t>Description:</t><h5>Essentially an Earl Grey tea latte, the London Fog beverage was first dreamed up in Vancouver, British Columbia. For this cake cover, we double down on the Earl Grey, featuring the light, bergamot-infused tea in both the rich cocoa cake and pillowy Swiss meringue buttercream. A final touch of salt from the caramel drizzle pushes this cake over the top to become a true showstopper. We adapted this cake from Tessa Huff’s (of the blog Style Sweet CA) cookbook Layered, subbing in Earl Grey Tea for the coffee in the cake, but otherwise sticking to the sweet original.</h5>
    </div>
    </div>
    <div class="row">
        <div class="col">
            <DropdownButton id="dropdown-basic-button" title="Ingredient:">
                <p>1 cup (200 grams) granulated sugar</p>
                <p>1 cup (220 grams) firmly packed light brown sugar</p>
                <p>⅓ cup (75 grams) canola oil</p>
                <p>2 large eggs (100 grams)</p>
                <p>1 large egg yolk (19 grams)</p>
                <p>2 teaspoons (8 grams) vanilla extract</p>
                <p>1 teaspoon (4 grams) almond extract</p>
                <p>2½ cups (313 grams) plain/all-purpose flour</p>
                <p>1 cup (85 grams) unsweetened cocoa powder</p>
                <p>2½ teaspoons (12.5 grams) baking powder</p>
                <p>1 teaspoon (3 grams) kosher salt</p>
                <p>¾ teaspoon (3.75 grams) bicarbonate of soda/baking soda</p>
                <p>1½ cups (360 grams) whole milk</p>
                <p>1 cup (240 grams) hot strong-brewed Earl Grey tea</p>
                <p>Earl Grey Buttercream (recipe follows)</p>
                <p>Salted Caramel Drizzle (recipe follows)</p>
                <p>Garnish: flaked sea salt</p>
            </DropdownButton>
        </div>

        <div class="col">
            <DropdownButton id="dropdown-basic-button" title="Instructions:">
            <p>1. Preheat oven to 350°F (180°C). Butter and flour 3 (8-inch) round cakes pans. Line bottom of pans with parchment paper.</p>
            <p>2. In a large bowl, stir together sugars and oil. Add eggs, egg yolk, and extracts, stirring to combine.</p>
            <p>3. In a medium bowl, sift together flour, cocoa, baking powder, salt, and baking soda. Gradually add flour mixture to sugar mixture alternately with milk, beginning and ending with flour mixture, stirring just until combined after each addition. Stir in hot tea just until combined. Divide batter among prepared pans.</p>
            <p>4. Bake until a wooden pick inserted in center comes out clean, about 25 minutes. Let cool in pans for 10 minutes. Remove from pans, and let cool completely on wire racks. Spread Earl Grey Buttercream between layers and lightly on top and sides of cake. Refrigerate until set, 15 to 20 minutes. Pour Salted Caramel Drizzle over cake, letting it drip over edges. Garnish with sea salt, if desired.</p>
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
 
export default Cakes;