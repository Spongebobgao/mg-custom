<template>
  <div id="delivery-option">
    <h3 id="error" v-if="error">Please fill in all the required fields</h3>
    <div class="subtotal-table-in-checkout">
      <SubtotalTable />
    </div>
    <div>
      <div id="delivery">
        <h2 v-if="editDeliveryDone">
          <i class="material-icons icon">check_circle</i>
          <i class="material-icons icon">local_shipping</i>Delivery
        </h2>
        <h2 v-else><i class="material-icons icon">looks_one</i>Delivery</h2>
        <ul>
          <li
            v-for="productInCart in $store.state.productsInCart"
            :key="productInCart._id"
          >
            <img :src="productInCart.img" />
          </li>
        </ul>
        <label for="arrive-time">Arrives By</label>
        <br />
        <input type="text" id="arrive-time" value="Tomorrow" disabled />
      </div>
      <button @click="continueToShippingAddress" id="continue-to-address-btn">
        {{ editDeliveryDone ? 'Edit' : 'Continue' }}
      </button>
    </div>
    <hr />
    <div id="shipping-address">
      <h2 id="step-two-header">
        <i class="material-icons icon">{{
          editShippingAddressDone ? 'check_circle' : 'looks_two'
        }}</i>
        {{ editShippingAddressDone ? 'Sending to' : 'Enter delivery address' }}
      </h2>

      <div style="opacity:0.5" v-if="editShippingAddressDone">
        <p>Delivery Address: {{ user.fname }} {{ user.lname }}</p>
        <p style="text-indent:120px">{{ user.street }} {{ user.apt }}</p>
        <p style="text-indent:120px">
          {{ user.city }}, {{ user.state }} {{ user.zipcode }}
        </p>
        <p style="text-indent:70px">Email: {{ user.email }}</p>
      </div>
      <div
        id="shipping-address-details"
        v-if="!editShippingAddressDone && editDeliveryDone"
      >
        <h4>required field*</h4>
        <div id="primary-input">
          <label for="fname">First Name*</label>
          <br />
          <input type="text" id="fname" v-model="user.fname" />
          <br />
          <label for="lname">Last Name*</label>
          <br />
          <input type="text" id="lname" v-model="user.lname" />
          <br />
          <label for="phone">Phone Number*</label>
          <br />
          <input type="text" id="phone" v-model="user.phone" />
          <br />
          <label for="email">Email address for order notification*</label>
          <br />
          <input type="text" id="email" v-model="user.email" />
        </div>
        <div id="secondary-input">
          <UserAddress :user="user" />
        </div>
      </div>
      <button
        id="continue-to-pay-btn"
        @click="continueToPaymentMethod"
        v-if="
          (editShippingAddressDone && !editDeliveryDone) ||
            (editDeliveryDone && editShippingAddressDone) ||
            (editDeliveryDone && !editShippingAddressDone)
        "
      >
        {{ editShippingAddressDone ? 'Edit' : 'Continue' }}
      </button>
    </div>
    <hr />
    <div id="payment-method">
      <h2 id="step-three-header">
        <i class="material-icons icon">{{
          editPaymentDone ? 'check_circle' : 'looks_3'
        }}</i>
        {{ editPaymentDone ? 'Payment' : 'Enter payment method' }}
      </h2>
      <div
        id="payment-content"
        v-if="!editPaymentDone && editShippingAddressDone"
      >
        <div id="payment-type">
          <button id="credit-card" @click="chooseCreditCard">
            Credit Card
          </button>
          <button id="gift-card" @click="chooseGiftCard">Gift Card</button>
        </div>
        <div id="credit-card-details" v-if="creditCard">
          <h4>*required field</h4>
          <div id="credit-card-info">
            <h3>Card Information</h3>
            <hr />
            <br />
            <label for="cardholder-fname">First name on card*</label>
            <br />
            <input
              type="text"
              id="cardholder-fname"
              v-model="creditCardHolder.fname"
            />
            <br />
            <label for="cardholder-lname">Last name on card*</label>
            <br />
            <input
              id="cardholder-lname"
              tyep="text"
              v-model="creditCardHolder.lname"
            />
            <br />
            <label for="card-number">Card number*</label>
            <br />
            <input
              id="card-number"
              type="text"
              v-model="creditCardHolder.cardNumber"
            />
            <div id="security-info">
              <label>
                Expiration date*
                <span style="margin-left:38%">CVV*</span>
              </label>
              <div id="year-month-div">
                <div id="month-div">
                  <select id="month" v-model="creditCardHolder.expirationMonth">
                    <option>11</option>
                  </select>
                </div>
                <div id="year-div">
                  <select id="year" v-model="creditCardHolder.expirationYear">
                    <option>11</option>
                  </select>
                </div>
              </div>
              <div id="cvv-div">
                <input id="cvv" type="text" v-model="creditCardHolder.cvv" />
              </div>
            </div>
          </div>
          <div id="billing-address">
            <h3>Billing Address</h3>
            <hr />
            <input
              type="checkbox"
              id="same-as-delivery-address"
              @click="changeBillingAddress"
              :checked="sameAsdeliveryAddress ? true : false"
            />
            <label for="same-as-delivery-address"
              >Same as delivery address</label
            >
            <div v-if="sameAsdeliveryAddress">
              <p>{{ user.street }}{{ user.apt }}</p>
              <p>{{ user.city }}, {{ user.state }} {{ user.zipcode }}</p>
            </div>
            <div v-else>
              <UserAddress
                :user="billingAddress"
                @input="updateBillingAddress"
              />
            </div>
          </div>
          <div>
            <button id="apply-credit-card-btn" @click="applyCreditCard">
              Apply credit card
            </button>
          </div>
        </div>
        <div id="gift-card-details" v-if="giftCard">
          <h4>required field*</h4>
          <div class="gift-card-info">
            <label for="gift-card-number">Gift card number*</label>
            <br />
            <input
              type="text"
              id="gift-card-number"
              v-model="giftCardInfo.giftCardNumber"
            />
            <br />
            <label for="gift-card-pin">PIN/Security Code (4 digits)*</label>
            <br />
            <input type="text" id="gift-card-pin" v-model="giftCardInfo.pin" />
          </div>
          <div>
            <button id="apply-gift-card-btn" @click="applyGiftCard">
              Apply gift card
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      id="edit-payment-btn"
      v-if="editDeliveryDone && editShippingAddressDone && editPaymentDone"
      @click="editPayment"
    >
      Edit
    </button>
    <button
      id="review-order-btn"
      v-if="editDeliveryDone && editShippingAddressDone && editPaymentDone"
      @click="showReviewOrder"
    >
      Review your order
    </button>
    <div id="review-order">
      <ReviewOrder
        :user="user"
        :payment="creditCard ? 'creditCardHolder' : 'giftCardInfo'"
        :creditCard="creditCard"
        :billingAddress="billingAddress"
        @cancelReview="cancelReview"
      />
    </div>
    <div id="overlay"></div>
  </div>
</template>

<script>
import UserAddress from '@/components/UserAddress'
import SubtotalTable from '@/components/SubtotalTable'
import ReviewOrder from '@/components/ReviewOrder'
export default {
  components: {
    UserAddress,
    SubtotalTable,
    ReviewOrder,
  },
  data() {
    return {
      editDeliveryDone: false,
      editShippingAddressDone: false,
      editPaymentDone: false,
      creditCard: false,
      giftCard: false,
      sameAsdeliveryAddress: true,
      user: {
        fname: '',
        lname: '',
        phone: '',
        email: '',
        street: '',
        apt: null,
        city: '',
        state: '',
        zipcode: '',
      },
      billingAddress: {
        street: '',
        apt: null,
        city: '',
        state: '',
        zipcode: '',
      },
      creditCardHolder: {
        fname: '',
        lname: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: '',
      },
      giftCardInfo: {
        giftCardNumber: '',
        pin: '',
      },
      error: false,
    }
  },
  methods: {
    editPayment() {
      this.editPaymentDone = false
      document.getElementById('step-three-header').style.opacity = 1
    },
    showReviewOrder() {
      document.getElementById('review-order').style.visibility = 'visible'
      document.getElementById('overlay').style.visibility = 'visible'
    },
    cancelReview() {
      document.getElementById('review-order').style.visibility = 'hidden'
      document.getElementById('overlay').style.visibility = 'hidden'
    },
    updateBillingAddress(value) {
      this.billingAddress = value
    },
    continueToShippingAddress() {
      if (this.$store.state.user !== null) {
        this.user = {
          ...this.user,
          fname: this.$store.state.user.fname,
          lname: this.$store.state.user.lname,
          email: this.$store.state.user.email,
        }
      }
      const element = document.getElementById('delivery')
      if (this.editDeliveryDone) {
        this.editDeliveryDone = false
        element.style.opacity = 1
        if (!this.editShippingAddressDone) {
          document.getElementById('step-two-header').style.opacity = 0.5
        }
      } else {
        this.editDeliveryDone = true
        element.style.opacity = 0.5
        if (!this.editShippingAddressDone) {
          document.getElementById('step-two-header').style.opacity = 1
        }
      }
    },
    hideError() {
      setTimeout(() => (this.error = false), 5000)
    },
    continueToPaymentMethod() {
      if (Object.values(this.creditCardHolder).some((x) => x === '')) {
        this.creditCardHolder = {
          ...this.creditCardHolder,
          fname: this.user.fname,
          lname: this.user.lname,
        }
      }
      if (Object.values(this.user).some((element) => element === '')) {
        this.error = true
        this.hideError()
      } else {
        this.error = false
        const element = document.getElementById('step-two-header')
        if (!this.editShippingAddressDone) {
          this.editShippingAddressDone = true
          element.style.opacity = 0.5
          if (!this.editPaymentDone) {
            document.getElementById('step-three-header').style.opacity = 1
          }
          this.setBillingAddress()
        } else {
          this.editShippingAddressDone = false
          element.style.opacity = 1
          if (!this.editPaymentDone) {
            document.getElementById('step-three-header').style.opacity = 0.5
          }
        }
      }
    },
    setBillingAddress() {
      this.billingAddress = {
        street: this.user.street,
        apt: this.user.apt,
        city: this.user.city,
        state: this.user.state,
        zipcode: this.user.zipcode,
      }
    },
    chooseCreditCard() {
      this.creditCard = true
      this.giftCard = false
      this.error = false
    },
    chooseGiftCard() {
      this.creditCard = false
      this.giftCard = true
      this.error = false
    },
    applyCreditCard() {
      if (
        Object.values(this.creditCardHolder).some((element) => element === '')
      ) {
        this.error = true
        this.hideError()
      } else {
        if (!this.sameAsdeliveryAddress) {
          if (
            Object.values(this.billingAddress).some((element) => element === '')
          ) {
            this.error = true
            this.hideError()
          } else {
            this.applyCreditCardHelper()
          }
        } else {
          this.applyCreditCardHelper()
        }
      }
    },
    applyCreditCardHelper() {
      this.error = false
      this.editPaymentDone = true
      document.getElementById('step-three-header').style.opacity = 0.5
    },
    changeBillingAddress() {
      if (this.sameAsdeliveryAddress) {
        this.sameAsdeliveryAddress = false
        this.billingAddress = {
          street: '',
          apt: null,
          city: '',
          state: '',
          zipcode: '',
        }
      } else {
        this.sameAsdeliveryAddress = true
        this.setBillingAddress()
      }
    },
    applyGiftCard() {
      if (Object.values(this.giftCardInfo).some((element) => element === '')) {
        this.error = true
        this.hideError()
      } else {
        this.error = false
        this.editPaymentDone = true
        document.getElementById('step-three-header').style.opacity = 0.5
      }
    },
  },
}
</script>

<style>
#overlay {
  width: 100%;
  height: 100%;
  background-color: rgb(223, 222, 222);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.8;
  z-index: 2;
  visibility: hidden;
}
#review-order {
  position: fixed;
  width: 75%;
  height: 100%;
  top: 15%;
  z-index: 3;
  visibility: hidden;
}
.subtotal-table-in-checkout {
  width: 30%;
  position: fixed;
  top: 15%;
  right: 5%;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  opacity: 0.9;
}
#error {
  color: red;
  position: fixed;
  top: 10%;
  right: 35%;
  z-index: 2;
  padding: 15px;
  background-color: white;
  opacity: 0.8;
  border: red solid 1px;
  animation: hideError 5s;
}
@keyframes hideError {
  80% {
    top: 15%;
  }
  100% {
    top: 0%;
  }
}
#delivery-option {
  width: 75%;
  margin: auto;
}
.icon {
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
#continue-to-pay-btn,
#edit-payment-btn,
#apply-credit-card-btn,
#apply-gift-card-btn,
#review-order-btn {
  width: 15%;
  height: 30px;
  margin: 2% 15% 5% 50%;
  font-size: 1rem;
}
#review-order-btn,
#apply-credit-card-btn,
#apply-gift-card-btn {
  width: 25%;
}
#primary-input,
#secondary-input,
#credit-card-info,
#billing-address {
  width: 45%;
  float: left;
}
#gift-card-number,
#gift-card-pin {
  width: 45%;
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
#step-two-header,
#step-three-header {
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
  width: 100%;
  background-color: lightgray;
  color: lightgray;
  border-width: 0;
  height: 1px;
}
@media screen and (max-width: 800px) {
  #delivery-option {
    width: 95%;
  }
  #primary-input,
  #secondary-input,
  #credit-card-info,
  #billing-address {
    width: 85%;
  }

  #apply-credit-card-btn,
  #apply-gift-card-btn,
  #review-order-btn,
  #edit-payment-btn,
  #continue-to-address-btn,
  #continue-to-pay-btn {
    width: 50%;
  }
  .subtotal-table-in-checkout {
    position: relative;
    width: 60%;
    margin: auto;
  }
  #error {
    right: 25%;
  }
}
</style>
