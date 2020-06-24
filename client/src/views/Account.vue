<template>
  <div id="account">
    <div id="buttons">
      <button class="btn-in-account" @click="showSignInForm=true">Sign In</button>
      <button class="btn-in-account" @click="showRegisterForm=true">Create Account</button>
    </div>
    <div id="sign-in-form" v-if="showSignInForm">
      <button class="close-btn" @click="showSignInForm=false">X</button>
      <SignInForm />
    </div>
    <div id="create-account" v-if="showRegisterForm">
      <button class="close-btn" @click="showRegisterForm=false">X</button>
      <div id="form">
        <RegisterForm />
      </div>
    </div>
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
      showRegisterForm: false
    };
  }
};
</script>

<style>
#account {
  width: 100%;
  margin: auto;
  min-width: 225px;
}
#sign-in-form,
#buttons,
#create-account {
  width: 50%;
  position: absolute;
  top: 15%;
  left: 25%;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  background-color: white;
}
#form {
  margin-left: 6%;
}
.btn-in-account {
  width: 50%;
  margin-left: 25%;
}
.close-btn {
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  float: right;
  background: none;
  border: none;
  cursor: pointer;
}
.close-btn:hover {
  background: #609b9f;
  color: white;
}
@media screen and (max-width: 600px) {
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