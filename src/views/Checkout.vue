<template>
  <div class="check-out-page" v-if="$store.state.user === null">
    <div class="sign-in">
      <SignInForm />
    </div>
    <div class="guest-checkout">
      <div class="guest-checkout-content" v-if="!registered">
        <h3>No account? No problem.</h3>
        <h4>Continue to checkout without an account.</h4>
        <button
          id="guest-checkout-btn"
          @click="$router.push('/checkout/fullfillment')"
        >
          Continue
        </button>
        <p>Or</p>
        <button id="not-a-number" @click="register">Create Account</button>
      </div>
      <div class="guest-checkout-content" v-else>
        <RegisterForm />
      </div>
    </div>
    <div class="subtotal">
      <SubtotalTable />
    </div>
  </div>
</template>

<script>
import SignInForm from '@/components/SignInForm'
import RegisterForm from '@/components/RegisterForm'
import SubtotalTable from '@/components/SubtotalTable'
export default {
  components: {
    SignInForm,
    RegisterForm,
    SubtotalTable,
  },
  data() {
    return {
      registered: false,
    }
  },
  methods: {
    register() {
      this.registered = true
    },
  },
}
</script>

<style scoped>
.check-out-page {
  width: 96%;
  max-width: 1000px;
  margin: 2%;
  display: grid;
  grid-template-columns: 35% 35% 30%;
}
.sign-in,
.guest-checkout {
  width: 95%;
  margin: 2%;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
}

.subtotal {
  width: 95%;
  margin: 2%;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
}

.guest-checkout-content {
  width: 95%;
  margin-left: 6%;
  text-align: left;
  margin-right: 3%;
}

#forgetpass {
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: none;
  float: right;
  margin-right: 9%;
}

@media screen and (max-width: 750px) {
  .check-out-page {
    grid-template-columns: 95%;
  }

  .sign-in,
  .guest-checkout {
    width: 100%;
    min-width: 280px;
  }
  .subtotal {
    display: none;
  }
}
</style>
