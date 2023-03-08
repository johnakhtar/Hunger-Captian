import React from "react";
import img1 from "../assets/img/img-1.png";
import carticon from "../assets/img/carticon.png";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

function Addtocart() {
  return (
    <div>
      <Header />

      <ul class="cartitems">
        <li class="items">
          <img class="item1" src={img1} alt="" />
          <div class="itemsdetail">
            <p class="name">Chicken Submarine Burger</p>
            <p class="smallpara">
              Lorem Ipsum is simply a dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry’s <br />
              standard dummy text ever since the 1500s when an <br />
              unknown printer took a galley of type and scrambled <br />
              it to make a type specimen book.
            </p>
            <button class="buttoncart">
              {" "}
              <span id="plusminus">+</span> 1 <span id="plusminus"> - </span>{" "}
            </button>
            <p class="itemprice">$ 10.99</p> <br />
            <button class="cartbutton">Add to cart</button>
            <img class="carticon" src={carticon} alt="" />
          </div>
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default Addtocart;
