<template>
  <div id="account">
    <div id="buttons">
      <button class="btn-in-account" @click="showSignInForm=true" v-if="$store.state.user===null">
        <i class="material-icons login-icon">login</i>Sign In
      </button>
      <button class="btn-in-account" @click="showRegisterForm=true" v-if="$store.state.user===null">
        <i class="material-icons login-icon">person_add</i>Create Account
      </button>
      <button class="btn-in-account" @click="showTrackOrderForm=true">
        <i class="material-icons login-icon">storefront</i>Track Order
      </button>
      <button class="btn-in-account" @click="showOrders=true">
        <i class="material-icons login-icon">list</i>Orders
      </button>
    </div>
    <div id="track-order" v-if="showTrackOrderForm">
      <button class="close-btn" @click="showTrackOrderForm=false">×</button>
      <h3 style="margin-left:4%">Track My Order</h3>
      <label for="user-email">Please enter the email address</label>
      <br />
      <input id="user-email" :value="$store.state.user?$store.state.user.email:''" />
      <br />
      <label for="track-number">Please enter the tracking number</label>
      <br />
      <input id="track-number" />
      <br />
      <button id="track-order-btn" class="btn-in-account">Submit</button>
    </div>
    <div id="orders" v-if="showOrders">
      <button class="close-btn" @click="showOrders=false">×</button>
      <ul>
        <li>order1</li>
        <br />
        <li>order2</li>
      </ul>
    </div>
    <div id="sign-in-form" v-if="showSignInForm&&$store.state.user===null">
      <button class="close-btn" @click="showSignInForm=false">×</button>
      <SignInForm />
    </div>
    <div id="create-account" v-if="showRegisterForm&&$store.state.user===null">
      <button class="close-btn" @click="showRegisterForm=false">×</button>
      <div id="form">
        <RegisterForm />
      </div>
    </div>
    <!-- <div id="user-info" v-if="$store.state.user">
      <div id="my-order-history">
        <h3>Order History</h3>
      </div>
    </div>-->
  </div>
</template>

<script>
import SignInForm from "@/components/SignInForm";
import RegisterForm from "@/components/RegisterForm";
export default {
  components: {
    SignInForm,
    RegisterForm
  },
  data() {
    return {
      showSignInForm: false,
      showRegisterForm: false,
      showTrackOrderForm: false,
      showOrders: false
    };
  }
};
</script>

<style>
.login-icon {
  float: left;
}
#orders,
#track-order,
#user-info,
#sign-in-form,
#buttons,
#create-account {
  width: 60%;
  min-width: 225px;
  position: absolute;
  top: 15%;
  left: 20%;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
}
label[for="user-email"],
label[for="track-number"],
#user-email,
#track-number {
  margin-left: 4%;
}
#form {
  margin-left: 6%;
}
.btn-in-account {
  width: 50%;
  margin: 15px 25% 25px 25%;
}
.close-btn {
  width: 50px;
  height: 50px;
  font-size: 2.5rem;
  float: right;
  background: none;
  border: none;
  cursor: pointer;
}
.close-btn:hover {
  font-weight: bold;
  font-size: 3rem;
}
@media screen and (max-width: 600px) {
  #track-order,
  #sign-in-form,
  #buttons,
  #create-account {
    width: 80%;
    left: 10%;
  }
  .btn-in-account {
    width: 80%;
    margin-left: 10%;
  }
  #error {
    right: 15%;
    width: 55%;
    font-size: 0.9;
  }
}
</style>