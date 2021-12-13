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

const Cookis = () => {
    return ( 
<div class="Rolls">
    <div class="container"> 
    <div class="row">
    <div class="col">
    <img src={Cookies}/>
    </div>
    <div class="col">
    <t>Titile:</t><h5>Cream Cheese-Filled Chocolate Chip Cookies</h5>
    <t>Author:</t><h5>Laura Helvia</h5>
    <t>Description:</t><h5>It’s hard to improve upon classic chocolate chip cookies, but we took up the challenge. We’re proud to present our most epic chocolate chip cookies yet: Cream Cheese-Filled Chocolate Chip Cookies. Adding cream cheese to the cookie dough gives this recipe all the chewy, puffy goodness you want out of a cookie, but it’s the cream cheese center that turns this recipe from something great into something extravagant. As for the technique behind the filling, have no fear. It’s a lot easier than you think, and our step-by-step visual tutorial will help you master it. Baker, beware: once you have a bite of these Cream Cheese-Filled Chocolate Chip Cookies, tried-and-true chocolate chip cookies may not cut it anymore.</h5>
    </div>
    </div>
    <div class="row">
        <div class="col">
            <DropdownButton id="dropdown-basic-button" title="Ingredient:">
                <p>½ cup (113 grams) unsalted butter, softened</p>
                <p>10 ounces (284 grams) cream cheese, softened and divided</p>
                <p>⅔ cup (147 grams) firmly packed dark brown sugar</p>
                <p>⅓ cup (67 grams) plus 3½ tablespoons (42 grams) granulated sugar, divided</p>
                <p>1 large egg (50 grams), room temperature</p>
                <p>1 tablespoon (13 grams) vanilla extract</p>
                <p>2 cups (250 grams) all-purpose flour</p>
                <p>1½ teaspoons (4.5 grams) cornstarch</p>
                <p>1 teaspoon (5 grams) baking soda</p>
                <p>1 teaspoon (2.25 grams) kosher salt, divided</p>
                <p>4.5 ounces (128 grams) 33.6% cacao milk chocolate, chopped (about ¾ cup)</p>
                <p>3 ounces (85 grams) 66% cacao semisweet chocolate, chopped (about ½ cup)</p>
            </DropdownButton>
        </div>

        <div class="col">
            <DropdownButton id="dropdown-basic-button" title="Instructions:">
            <p>1. 3 ounces (85 grams) 66% cacao semisweet chocolate, chopped (about ½ cup).</p>
            <p>2. In a large bowl, whisk together flour, cornstarch, baking soda, and ¾ teaspoon (2.25 grams) kosher salt. Add flour mixture to butter mixture all at once; beat at low speed just until combined. Fold in chocolate. Cover and refrigerate for 30 minutes.</p>
            <p>3. Preheat oven to 350°F (180°C). Line 2 rimmed baking sheets with parchment paper.</p>
            <p>4. In a medium bowl, stir together remaining 8 ounces (227 grams) cream cheese, remaining 3½ tablespoons (42 grams) granulated sugar, and remaining ¼ teaspoon kosher salt. Cover and freeze for 15 minutes.</p>
            <p>5. Divide dough into 48 portions (about 1 tablespoon [18 grams] each); shape each portion into a ball, and flatten into 1½- to 2-inch disks. Spoon about 1½ teaspoons (9 grams) cream cheese mixture in center of 1 dough disk, and cover with a second disk. Crimp edges to seal, and gently shape into a ball. (See technique images above.) Repeat with remaining dough disks and cream cheese mixture. Place dough balls 1½ to 2 inches apart on prepared pans. Gently flatten balls to ¾-inch thickness, crimping any cracks to seal, if necessary.</p>
            <p>6. Bake until edges are set and lightly golden, 8 to 10 minutes. Let cool on pans on wire racks for 2 minutes. Serve warm, or remove from pans, and let cool completely on wire racks.</p>
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
 
export default Cookis;