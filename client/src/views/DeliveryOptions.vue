<template>
  <div id="delivery-option">
    <div>
      <div id="delivery">
        <h2 v-if="editDelivery">
          <i class="material-icons">check_circle</i>
          <i class="material-icons">local_shipping</i>Delivery
        </h2>
        <h2 v-else>
          <i class="material-icons">looks_one</i>Delivery
        </h2>
        <ul>
          <li v-for="(productInCart) in $store.state.productsInCart" :key="productInCart._id">
            <img :src="productInCart.img" />
          </li>
        </ul>
        <label for="arrive-time">Arrives By</label>
        <br />
        <input type="text" id="arrive-time" value="Tomorrow" disabled />
      </div>
      <button
        @click="continueToShippingAddress"
        id="continue-to-address-btn"
      >{{editDelivery?'Edit':'Continue'}}</button>
    </div>
    <div id="shipping-address">
      <h2>
        <i class="material-icons">looks_two</i>Enter delivery address
      </h2>
      <div id="shipping-address-details" v-if="editDelivery">
        <h4>Required field*</h4>
        <div id="primary-input">
          <label for="fname">First Name*</label>
          <br />
          <input type="text" id="fname" />
          <br />
          <label for="lname">Last Name*</label>
          <br />
          <input type="text" id="lname" />
          <br />
          <label for="phone">Phone Number*</label>
          <br />
          <input type="text" id="phone" />
          <br />
          <label for="email">Email address for order notification*</label>
          <br />
          <input type="text" id="email" />
        </div>
        <div id="secondary-input">
          <label for="street">Street Address*</label>
          <br />
          <input type="text" id="street" />
          <br />
          <label for="apt">Apt, suite, etc (optional)</label>
          <br />
          <input type="text" id="apt" />
          <br />
          <label for="city">City*</label>
          <br />
          <input type="text" id="city" />
          <br />
          <div>
            <div id="state-div">
              <label for="state">State*</label>
              <br />
              <select id="state">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div id="zip-div">
              <label for="zipcode">ZIP Code*</label>
              <input type="text" id="zipcode" />
            </div>
          </div>
        </div>
        <button id="continue-to-pay-btn" @click="continueToPaymentMethod">Continue</button>
      </div>
    </div>
    <div id="payment-method">
      <h2>
        <i class="material-icons">looks_3</i>Enter payment method
      </h2>
      <div id="payment-type">
        <button id="credit-card">Credit Card</button>
        <button id="gift-card">Gift Card</button>
      </div>
      <div id="credit-card-details">
        <h4>*required field</h4>
        <div id="credit-card-info">
          <h3>Card Information</h3>
          <hr />
          <br />
          <label for="cardholder-fname">First name on card*</label>
          <br />
          <input type="text" id="cardholder-fname" />
          <br />
          <label for="cardholder-lname">Last name on card*</label>
          <br />
          <input id="cardholder-lname" tyep="text" />
          <br />
          <label for="card-number">Card number*</label>
          <br />
          <input id="card-number" type="text" />
          <div id="security-info">
            <label>
              Expiration date*
              <span style="margin-left:38%">CVV*</span>
            </label>
            <div id="year-month-div">
              <div id="month-div">
                <select id="month">
                  <option>11</option>
                </select>
              </div>
              <div id="year-div">
                <select id="year">
                  <option>11</option>
                </select>
              </div>
            </div>
            <div id="cvv-div">
              <input id="cvv" type="text" />
            </div>
          </div>
          <div id="billing-address"></div>
        </div>
      </div>
      <div id="gift-card-details">
        <h4>Required field*</h4>
        <div class="gift-card-info">
          <label for="gift-card-number">Gift card number*</label>
          <br />
          <input type="text" id="gift-card-number" />
        </div>
        <div class="gift-card-info">
          <label for="gift-card-pin">PIN/Security Code (4 digits)*</label>
          <br />
          <input type="text" id="gift-card-pin" />
        </div>
        <button id="apply-gift-card-btn" @click="applyGiftCard">Apply gift card</button>
      </div>
      <button id="review-order-btn">Review your order</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editDelivery: false
    };
  },
  methods: {
    continueToShippingAddress() {
      const element = document.getElementById("delivery");
      if (this.editDelivery) {
        this.editDelivery = false;
        element.style.opacity = 1;
        document.getElementById("shipping-address").style.opacity = 0.5;
      } else {
        this.editDelivery = true;
        element.style.opacity = 0.5;
        document.getElementById("shipping-address").style.opacity = 1;
      }
    },
    continueToPaymentMethod() {},
    applyGiftCard() {}
  }
};
</script>

<style>
#delivery-option {
  width: 75%;
  margin: auto;
}
.material-icons {
  width: 35px;
  height: 35px;
  margin-right: 5px;
}
img {
  width: 75px;
  height: auto;
}
ul li {
  list-style-type: none;
  display: inline;
  margin-right: 25px;
}
#arrive-time {
  width: 35%;
  height: 35px;
  margin-top: 5px;
  border-radius: 5px;
}
#continue-to-address-btn,
#continue-to-pay-btn {
  width: 15%;
  height: 30px;
  margin: 2% 5% 5% 70%;
  font-size: 1rem;
}
#primary-input,
#secondary-input,
#payment-method {
  width: 45%;
  float: left;
}
#gift-card-details {
  width: 95%;
}
#gift-card-number,
#gift-card-pin {
  width: 90%;
}
#state-div,
#zip-div,
#year-div,
#month-div,
#cvv-div {
  float: left;
}
#year-month-div {
  width: 65%;
}
#cvv-div {
  width: 30%;
}
#year-div,
#month-div {
  width: 50%;
}
#cvv {
  width: 80%;
}
#state-div {
  width: 65%;
}
#zip-div {
  width: 28%;
}
#shipping-address {
  opacity: 0.5;
}
#credit-card,
#gift-card {
  width: 125px;
  height: 55px;
  padding: 15px;
  font-size: 1.1rem;
  margin-right: 5px;
  cursor: pointer;
  background: none;
  border: 1px gray solid;
}
#credit-card:hover,
#gift-card:hover,
#credit-card:focus,
#gift-card:focus {
  border: 2px black solid;
}
hr {
  width: 45%;
  float: left;
}
</style>