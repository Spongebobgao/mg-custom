<template>
  <div id="review-order-popup">
    <div id="item-details-in-review-order">
      <div>
        <h2>Your items:</h2>
      </div>
      <ul>
        <li v-for="(productInCart) in $store.state.productsInCart" :key="productInCart._id">
          <img :src="productInCart.img" />
        </li>
      </ul>
    </div>
    <hr />
    <div id="shipping-address-in-review-order">
      <h2>Your shipping address:</h2>
      <p style="text-indent:50px">{{user.fname}} {{user.lname}}</p>
      <p style="text-indent:50px">{{user.street}} {{user.apt}}</p>
      <p style="text-indent:50px">{{user.city}}, {{user.state}} {{user.zipcode}}</p>
    </div>
    <hr />
    <div id="payment-details-in-review-order">
      <h2>Your payment: {{creditCard?'Credit card':'Gift card'}}</h2>
      <div v-if="creditCard">
        <p style="text-indent:50px">{{billingAddress.street}} {{billingAddress.apt}}</p>
        <p
          style="text-indent:50px"
        >{{billingAddress.city}}, {{billingAddress.state}} {{billingAddress.zipcode}}</p>
      </div>
    </div>
    <div>
      <button id="cancel-review-order-btn" @click="$emit('cancelReview')">Cancel</button>
      <button id="place-order-btn" @click="placeOrder">Place order</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "payment", "billingAddress", "creditCard"],
  methods: {
    placeOrder() {
      alert("place order");
    }
  }
};
</script>

<style>
#review-order-popup {
  width: 95%;
  padding: 15px;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  float: fixed;
  top: 15%;
  left: 15%;
}
#item-details-in-review-order,
#shipping-address-in-review-order,
#payment-details-in-review-order {
  width: 75%;
  left: 15%;
  top: 15%;
}
#cancel-review-order-btn,
#place-order-btn {
  width: 25%;
  margin-left: 17%;
}
@media screen and (max-width: 800px) {
  #cancel-review-order-btn,
  #place-order-btn {
    width: 85%;
    margin-left: 5%;
  }
}
</style>