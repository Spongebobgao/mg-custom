<template>
  <div>
    <form class="sign-in-form">
      <h3 id="error" v-if="error">Please fill in all the required fields</h3>
      <h3>Sign In</h3>
      <label for="email">Email address (required)</label>
      <br />
      <input type="text" id="email" />
      <br />
      <label for="password">Password (required)</label>
      <br />
      <input type="password" id="password" />
      <br />
      <a id="forgetpass" href="/forgetpass">Forgot Password?</a>
      <button type="button" id="sign-in-btn" @click="signIn">Sign In</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import orderService from '@/services/orderService'
export default {
  data() {
    return {
      error: false,
    }
  },
  methods: {
    async signIn() {
      const member = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        newUser: false,
      }
      if (
        Object.values(member).some(
          (element) => element === null || element === ''
        )
      ) {
        this.error = true
        setTimeout(() => (this.error = false), 5000)
      } else {
        const validUser = (await AuthenticationService.authenticate(member))
          .data
        if (validUser !== '') {
          delete validUser.password
          alert('sign in successfully')
          this.$store.commit('userLoggedIn', validUser)
          await this.getUserOrders(validUser._id)
          console.log(this.$store.state.orderHistory)
          if (this.$route.name !== 'Account')
            this.$router.push('/checkout/fullfillment')
        } else {
          alert('Please enter the correct credential')
        }
      }
    },
    async getUserOrders(id) {
      try {
        this.orderHistory = (await orderService.getUserOrder(id)).data.docs
        this.$store.commit('orderHistory', this.orderHistory)
      } catch (err) {
        console.log('something went wrong')
      }
    },
  },
}
</script>

<style>
.sign-in-form,
.create-account-form {
  width: 95%;
  text-align: left;
}
.sign-in-form {
  max-height: 400px;
  margin-left: 6%;
}
#user-email,
#track-number,
#email,
#password,
#fname,
#lname,
#new-email,
#new-password,
#phone,
#street,
#apt,
#city,
#state,
#zipcode,
#cardholder-fname,
#cardholder-lname,
#card-number,
#month,
#year,
#cvv,
#gift-card-number,
#gift-card-pin {
  width: 90%;
  height: 45px;
  margin-bottom: 5%;
  margin-top: 2%;
  border: 1px solid rgb(122, 121, 121);
  border-radius: 2px;
  font-size: 1.2rem;
  padding: 0 0 0 15px;
}
#email:focus,
#password:focus,
#fname:focus,
#lname:focus,
#new-email:focus,
#new-password:focus {
  border: 2px solid black;
}
label {
  color: rgb(122, 121, 121);
  font-size: 1rem;
}
#forgetpass {
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  float: right;
  margin-right: 9%;
}
#sign-in-btn,
#not-a-number,
#create-account-btn,
#guest-checkout-btn,
#continue-to-address-btn,
#continue-to-pay-btn,
#apply-gift-card-btn,
#apply-credit-card-btn,
#edit-payment-btn,
#review-order-btn,
#cancel-review-order-btn,
#place-order-btn,
.btn-in-account {
  width: 85%;
  height: 40px;
  margin-bottom: 5%;
  margin-top: 5%;
  border: #609b9f 1px solid;
  border-radius: 25px;
  color: #006666;
  font-size: 1.2rem;
  cursor: pointer;
}
#sign-in-btn:hover,
#not-a-number:hover,
#guest-checkout-btn:hover,
#create-account-btn:hover,
#continue-to-address-btn:hover,
#apply-gift-card-btn:hover,
#apply-credit-card-btn:hover,
#review-order-btn:hover,
#continue-to-pay-btn:hover,
#edit-payment-btn:hover,
#cancel-review-order-btn:hover,
#place-order-btn:hover,
.btn-in-account:hover {
  background-color: #ffebe6;
}
</style>
