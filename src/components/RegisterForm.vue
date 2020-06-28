<template>
  <div>
    <h3 id="error" v-if="error">Please fill in all the required fields</h3>

    <form class="create-account-form">
      <h3>Create new account</h3>
      <h4>Enjoy faster checkout with an account.</h4>
      <h4>Required field *</h4>
      <label for="fname">First Name*</label>
      <br />
      <input type="text" n id="fname" required />
      <br />
      <label for="lname">Last Name*</label>
      <br />
      <input type="text" id="lname" required />
      <br />
      <label for="new-email">Email address*</label>
      <br />
      <input type="text" n id="new-email" required />
      <br />
      <label for="new-password">Password*</label>
      <br />
      <input type="password" id="new-password" required />
      <br />
      <button type="button" id="create-account-btn" @click="register">
        Create Account
      </button>
      <br />
      <button
        type="button"
        id="guest-continue-btn"
        v-if="this.$route.name === 'Checkout'"
      >
        Continue to checkout without an account
      </button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      error: false,
    }
  },
  methods: {
    async register() {
      let user = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('new-email').value,
        password: document.getElementById('new-password').value,
        orders: {},
        newUser: true,
      }
      if (
        Object.values(user).some(
          (element) => element === null || element === ''
        )
      ) {
        this.error = true
        setTimeout(() => (this.error = false), 5000)
      } else {
        const a = (await AuthenticationService.authenticate(user)).data
        if (a) {
          alert('register done')
          delete user.newUser
          this.$store.commit('userLoggedIn', user)
          if (this.$route.name !== 'Account')
            this.$router.push('/checkout/fullfillment')
        } else {
          alert('email is in use')
        }
      }
    },
  },
}
</script>

<style>
#guest-continue-btn {
  width: 85%;
  height: 40px;
  border: none;
  background-color: white;
  margin-bottom: 5%;
  margin-top: 5%;
  color: #006666;
  font-size: 0.9rem;
  cursor: pointer;
}
#guest-continue-btn:hover {
  border: #006666 1px solid;
  border-radius: 25px;
  background-color: #ffebe6;
}
</style>
