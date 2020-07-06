<template>
  <div id="review-order-popup">
    <div id="order-details">
      <div id="item-details-in-review-order">
        <div>
          <h2>Your items:</h2>
        </div>
        <ul>
          <li
            v-for="productInCart in $store.state.productsInCart"
            :key="productInCart._id"
          >
            <img :src="productInCart.img" />
          </li>
        </ul>
      </div>
      <hr />
      <div id="shipping-address-in-review-order">
        <h2>Your shipping address:</h2>
        <p style="text-indent:50px">{{ user.fname }} {{ user.lname }}</p>
        <p style="text-indent:50px">{{ user.street }} {{ user.apt }}</p>
        <p style="text-indent:50px">
          {{ user.city }}, {{ user.state }} {{ user.zipcode }}
        </p>
      </div>
      <hr />
      <div id="payment-details-in-review-order">
        <h2>Your payment: {{ creditCard ? 'Credit card' : 'Gift card' }}</h2>
        <div v-if="creditCard">
          <h4 style="text-indent:50px">Billing Address</h4>
          <p style="text-indent:50px">
            {{ billingAddress.street }} {{ billingAddress.apt }}
          </p>
          <p style="text-indent:50px">
            {{ billingAddress.city }}, {{ billingAddress.state }}
            {{ billingAddress.zipcode }}
          </p>
        </div>
      </div>
      <div>
        <button id="cancel-review-order-btn" @click="$emit('cancelReview')">
          Cancel
        </button>
        <button id="place-order-btn" @click="placeOrder">Place order</button>
      </div>
    </div>
    <div id="place-order-done">
      <h2 class="check-done">
        <i class="material-icons check-icon">check</i> Thank you for shopping
        with us
      </h2>
      <h2 class="check-done" style="text-indent:65px">
        Redirect to home page now
      </h2>
    </div>
  </div>
</template>

<script>
import PlaceOrderService from '@/services/PlaceOrderService'
export default {
  props: ['user', 'payment', 'billingAddress', 'creditCard'],
  methods: {
    async placeOrder() {
      //********need validate card info */
      //store user delivery address into database
      const userAddress = {
        phone: this.user.phone,
        street: this.user.street,
        apt: this.user.apt,
        city: this.user.city,
        state: this.user.state,
        zipcode: this.user.zipcode,
      }
      if (Object.keys(this.$store.state.productsInCart).length > 0) {
        let orderAndAddress = {}
        let order = { items: { ...this.$store.state.productsInCart } }
        for (const attr in order.items) {
          delete order.items[attr]._id
          delete order.items[attr].nutrients
        }
        order.total = this.$store.state.totalOfProductsInCart
        orderAndAddress.order = order
        orderAndAddress.address = userAddress
        if (this.$store.state.user) {
          order.userId = this.$store.state.user._id
          orderAndAddress.userId = this.$store.state.user._id
        }
        try {
          await PlaceOrderService.placeOrder(orderAndAddress)
          this.$store.commit('clearCart')
          document.getElementById('order-details').style.visibility = 'hidden'
          document.getElementById('place-order-done').style.visibility =
            'visible'
          setTimeout(() => {
            document.getElementById('place-order-done').style.visibility =
              'hidden'
            this.$router.push('/')
          }, 2000)
        } catch (err) {
          alert('Something went wrong.')
        }
      }
    },
  },
}
</script>

<style>
#review-order-popup,
#place-order-done {
  width: 95%;
  padding: 15px;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
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

#place-order-done {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 5;
  visibility: hidden;
}
.check-icon {
  color: green;
  font-weight: bolder;
  font-size: 3rem;
}
.check-done {
  margin: 15% 5% 5% 25%;
}
@media screen and (max-width: 800px) {
  #cancel-review-order-btn,
  #place-order-btn {
    width: 85%;
    margin-left: 5%;
  }
  #place-order-done {
    width: 80%;
    height: 80%;
    left: 10%;
  }
}
</style>
