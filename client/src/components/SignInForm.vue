<template>
  <div>
    <form class="sign-in-form">
      <h3>Sign In</h3>
      <label for="email">Email address (required)</label>
      <br />
      <input type="text" n id="email" required />
      <br />
      <label for="password">Password (required)</label>
      <br />
      <input type="password" id="password" required />
      <br />
      <a id="forgetpass" href="/forgetpass">Forgot Password?</a>
      <button type="button" id="sign-in-btn" @click="signIn">Sign In</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  methods: {
    async signIn() {
      const member = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      };
      console.log(member);
      const user = (await AuthenticationService.signIn(member)).data;
      if (user) {
        alert("sign in successfully");
        this.$router.push("/checkout/fullfillment");
      } else {
        alert("Please enter the correct credential");
      }
    }
  }
};
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
#place-order-btn {
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
#place-order-btn:hover {
  background-color: #ffebe6;
}
</style>