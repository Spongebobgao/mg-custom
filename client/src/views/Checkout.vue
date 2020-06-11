<template>
  <div class="check-out-page">
    <div class="sign-in">
      <form class="sign-in-form">
        <h3>Sign In</h3>
        <label for="email">Email address (required)</label>
        <br />
        <input type="text" n id="email" />
        <br />
        <label for="password">Password (required)</label>
        <br />
        <input type="password" id="password" />
        <br />
        <a id="not-a-number" href="/register">Register Now</a>

        <a id="forgetpass" href="/forgetpass">Forget Password?</a>
        <button id="sign-in-btn">Sign In</button>
      </form>
    </div>
    <div class="guest-checkout">
      <div class="guest-checkout-content">
        <h3>No account? No problem.</h3>
        <h4>Continue to checkout without an account.</h4>
        <button id="guest-checkout-btn">Continue</button>
      </div>
    </div>
    <div class="subtotal">
      <table>
        <tr>
          <th>
            Subtotal
            <span
              v-if="$store.state.numberOfProductsInCart>0"
            >({{$store.state.numberOfProductsInCart}} {{$store.state.numberOfProductsInCart>1?'items':'item'}}):</span>
          </th>
          <td>${{$store.state.totalOfProductsInCart}}</td>
        </tr>
        <tr>
          <th>Delivery:</th>
          <td>Free</td>
        </tr>
        <tr>
          <th>Est. taxes & fees:</th>
          <td>$9.9</td>
        </tr>
        <tr>
          <th>Est. total:</th>
          <td>$99.9</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.check-out-page {
  width: 96%;
  margin: 2%;
  /* border: 1px solid black; */
  display: flex;
  flex-wrap: wrap;
}
.sign-in,
.guest-checkout {
  width: 37%;
  margin: 2%;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
}
.guest-checkout {
  height: 250px;
}
.subtotal {
  width: 25%;
  height: 200px;
  margin: 2%;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
}
table {
  width: 95%;
  margin-top: 11%;
}
th,
td {
  padding: 8px;
}
.sign-in-form,
.guest-checkout-content {
  width: 95%;
  margin-left: 6%;
  text-align: left;
}
.guest-checkout-content {
  margin-right: 3%;
  width: 93%;
}
#email,
#password {
  width: 90%;
  height: 45px;
  margin-bottom: 5%;
  margin-top: 2%;
  border: 1px solid rgb(122, 121, 121);
  border-radius: 2px;
}
#email:focus,
#password:focus {
  border: 2px solid black;
}

.sign-in-form label {
  color: rgb(122, 121, 121);
  font-size: 1rem;
}
#sign-in-btn,
#guest-checkout-btn {
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
#guest-checkout-btn:hover {
  background-color: #ffebe6;
}
#forgetpass,
#not-a-number {
  font-size: 0.9rem;
}
#forgetpass {
  float: right;
  margin-right: 9%;
}
.guest-checkout {
  width: 25%;
}

@media screen and (min-width: 300px) and (max-width: 650px) {
  .sign-in,
  .guest-checkout {
    width: 100%;
  }
  .subtotal {
    display: none;
  }
}
</style>