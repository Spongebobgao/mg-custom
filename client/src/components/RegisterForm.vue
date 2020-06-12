<template>
  <div>
    <form class="create-account-form">
      <h3>Create new account</h3>
      <h4>Enjoy faster checkout with an account.</h4>
      <h4>Required field *</h4>
      <label for="fname">First Name*</label>
      <br />
      <input type="text" n id="fname" />
      <br />
      <label for="lname">Last Name*</label>
      <br />
      <input type="text" id="lname" />
      <br />
      <label for="new-email">Email address*</label>
      <br />
      <input type="text" n id="new-email" />
      <br />
      <label for="new-password">Password*</label>
      <br />
      <input type="password" id="new-password" />
      <br />
      <button id="create-account-btn">Create Account</button>
      <br />

      <button id="guest-continue-btn">Continue to checkout without an account</button>
    </form>
  </div>
</template>

<script>
export default {};
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