<template>
  <div id="account">
    <div id="buttons" v-if="showButtons">
      <button
        class="btn-in-account"
        @click=";(showSignInForm = true), (showButtons = false)"
        v-if="$store.state.user === null"
      >
        <i class="material-icons login-icon">login</i>Sign In
      </button>
      <button
        class="btn-in-account"
        @click=";(showRegisterForm = true), (showButtons = false)"
        v-if="$store.state.user === null"
      >
        <i class="material-icons login-icon">person_add</i>Create Account
      </button>
      <button
        class="btn-in-account"
        @click=";(showTrackOrderForm = true), (showButtons = false)"
      >
        <i class="material-icons login-icon">storefront</i>Track Order
      </button>
      <button class="btn-in-account" @click="showAllOrders">
        <i class="material-icons login-icon">list</i>Orders
      </button>
      <button class="btn-in-account" @click="logout" v-if="$store.state.user">
        <i class="material-icons login-icon">highlight_off</i>Sign Out
      </button>
    </div>
    <div id="track-order" v-if="showTrackOrderForm">
      <button
        class="close-btn"
        @click=";(showTrackOrderForm = false), (showButtons = true)"
      >
        ×
      </button>
      <h3 style="margin-left:4%">Track My Order</h3>
      <label for="user-email">Please enter the email address</label>
      <br />
      <input
        id="user-email"
        :value="$store.state.user ? $store.state.user.email : ''"
      />
      <br />
      <label for="track-number">Please enter the tracking number</label>
      <br />
      <input id="track-number" />
      <br />
      <button id="track-order-btn" class="btn-in-account">Submit</button>
    </div>
    <div id="orders" v-if="showOrders && $store.state.orderHistory.length > 0">
      <button
        class="close-btn"
        @click=";(showOrders = false), (showButtons = true)"
      >
        ×
      </button>
      <div v-for="order in $store.state.orderHistory" :key="order._id">
        <table id="order-history-table">
          <th colspan="2">{{ order.date }}</th>
          <th colspan="4">Order total: {{ order.total }}</th>
          <tr v-for="item in order.items" :key="item._id">
            <td>{{ item.name }}</td>
            <td>${{ item.price }}ea</td>
            <td>{{ item.weight }}</td>
            <td><sup>Qty:</sup> {{ item.quantity }}</td>
            <td><sup>Total:</sup> ${{ item.total }}</td>
            <td><img :src="item.img" /></td>
          </tr>
        </table>
      </div>
    </div>
    <div
      id="no-order"
      v-if="
        showOrders &&
          $store.state.orderHistory.length === 0 &&
          $store.state.user !== null
      "
    >
      <button
        class="close-btn"
        @click=";(showOrders = false), (showButtons = true)"
      >
        ×
      </button>
      <br />
      <br />
      <h3 style="margin-left:20%;margin-right:20%">
        Sorry, you don't have any order history
      </h3>
    </div>
    <div id="sign-in-form" v-if="showSignInForm && $store.state.user === null">
      <button
        class="close-btn"
        @click=";(showSignInForm = false), (showButtons = true)"
      >
        ×
      </button>
      <SignInForm />
    </div>
    <div
      id="create-account"
      v-if="showRegisterForm && $store.state.user === null"
    >
      <button
        class="close-btn"
        @click=";(showRegisterForm = false), (showButtons = true)"
      >
        ×
      </button>
      <div id="form">
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script>
import SignInForm from '@/components/SignInForm'
import RegisterForm from '@/components/RegisterForm'

export default {
  components: {
    SignInForm,
    RegisterForm,
  },
  data() {
    return {
      showSignInForm: false,
      showRegisterForm: false,
      showTrackOrderForm: false,
      showOrders: false,
      showButtons: true,
    }
  },
  methods: {
    showAllOrders() {
      if (this.$store.state.user === null) {
        this.showSignInForm = true
        this.showButtons = false
      }
      this.showOrders = true
    },
    logout() {
      this.$store.commit('logout')
      this.showSignInForm = false
      this.showRegisterForm = false
      this.showTrackOrderForm = false
      ;(this.showOrders = false), (this.showButtons = true)
    },
  },
}
</script>

<style scoped>
#order-history-table {
  width: 95%;
  margin: auto;
  border-bottom-style: dashed;
}
.login-icon {
  float: left;
}
#no-order,
#orders,
#track-order,
#user-info,
#sign-in-form,
#buttons,
#create-account {
  width: 60%;
  min-width: 225px;
  max-width: 1000px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
}
#orders {
  min-width: 320px;
}
#no-order {
  height: 240px;
}

label[for='user-email'],
label[for='track-number'],
#user-email,
#track-number {
  margin-left: 4%;
}
#form {
  margin-left: 6%;
}
.btn-in-account {
  width: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
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
  #orders,
  #no-order,
  #track-order,
  #sign-in-form,
  #buttons,
  #create-account {
    width: 80%;
  }
  .btn-in-account {
    width: 80%;
  }
  #error {
    right: 15%;
    width: 55%;
    font-size: 0.9;
  }
}

@media screen and (max-width: 400px) {
  #orders {
    left: 8%;
  }
}
</style>
