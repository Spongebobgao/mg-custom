<template>
  <div class="header">
    <router-link to="/">MG-CUSTOM</router-link>
    <p>YOU DESERVE ALL THE GOOD THINGS</p>
    <div class="header-right">
      <router-link class="all-products" to="/products">
        <img src="../assets/product-icon.svg" class="product-icon" />
        <span class="tooltiptext">All Products</span>
      </router-link>
      <a href="javascript:void(0)" @click="openSidepanel">
        <i class="material-icons">menu</i>
      </a>
      <router-link @mouseenter.native="showMinicart" to="/cart">
        <i class="material-icons">shopping_cart</i>
        <span class="item-number">{{
          $store.state.numberOfProductsInCart
        }}</span>
      </router-link>
      <router-link to="/account">
        <i class="material-icons">account_circle</i>
      </router-link>
    </div>
    <div class="sidepanel" id="sidepanel">
      <button class="closebtn" @click="closeSidepanel">×</button>
      <br />
      <button @click="navigateTo('/')">Home</button>
      <br />
      <button @click="navigateTo('/about')">About</button>
    </div>
    <CartPopup />
  </div>
</template>

<script>
import CartPopup from '@/components/CartPopup'
export default {
  name: 'PageHeader',
  components: {
    CartPopup,
  },
  data() {
    return {}
  },
  mounted() {
    document.addEventListener(
      'click',
      () => (this.$store.state.hoverCart = false)
    )
    document.addEventListener(
      'scroll',
      () => (this.$store.state.hoverCart = false)
    )
  },
  beforeDestroy() {
    document.removeEventListener(
      'click',
      () => (this.$store.state.hoverCart = false)
    )
    document.removeEventListener(
      'scroll',
      () => (this.$store.state.hoverCart = false)
    )
  },
  methods: {
    openSidepanel() {
      document.getElementById('sidepanel').style.width = '250px'
    },
    closeSidepanel() {
      document.getElementById('sidepanel').style.width = '0'
    },
    navigateTo(route) {
      this.$router.push(route)
      this.closeSidepanel()
    },
    showMinicart() {
      if (
        this.$route.name === 'Home' ||
        this.$route.name === 'Products' ||
        this.$route.name === 'Product' ||
        this.$route.name === 'About' ||
        this.$route.name === 'Account'
      ) {
        this.$store.commit('changeHoverCart', true)
        // setTimeout(this.setHoverCart, 3000);
      }
    },
    setHoverCart() {
      this.$store.commit('changeHoverCart', false)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
p {
  position: absolute;
  margin-left: 35%;
  font-size: 1.3rem;
  font-family: 'Barrio';
}
.product-icon {
  width: 22px;
  height: 22px;
}
.tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: #ffebe6;
  color: #1d2f30;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 5;
  font-size: 0.9rem;
  opacity: 0.9;
  margin-left: 35%;
}

.all-products:hover .tooltiptext {
  visibility: visible;
}
.header {
  overflow: hidden;
  min-width: 300px;
  background-color: #609b9f;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 3;
  box-shadow: 5px 10px 8px #888;
}

.header a {
  float: left;
  color: #1d2f30;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 25px;
  border-radius: 4px;
  margin-top: 5px;
  margin-left: 5px;
  background-color: #9fc3c6;
  position: relative;
}

.header a:hover {
  background-color: #9fc3c6;
  color: white;
}

.header-right {
  float: right;
}
.header-right a {
  background-color: #609b9f;
}
.sidepanel {
  width: 0;
  position: fixed;
  z-index: 1;
  height: 99%;
  top: 7px;
  right: 0;
  background-color: #ffebe6;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  opacity: 0.9;
}
.sidepanel button {
  text-align: center;
  padding: 8px;
  margin: auto;
  text-decoration: none;
  font-size: 25px;
  color: #006666;
  font-weight: bold;
  display: block;
  transition: 0.3s;
  background-color: #ffebe6;
  border: none;
}
.sidepanel button:hover {
  cursor: pointer;
  background-color: #ffb3b3;
  border-radius: 5px;
}
.sidepanel button:focus {
  outline: none;
}
.sidepanel .closebtn {
  cursor: pointer;
  margin-right: 25px;
  font-size: 2.5rem;
  border: none;
  color: #006666;
  background-color: #ffebe6;
}
.closebtn:hover {
  color: #609b9f;
}
.closebtn:focus {
  outline: none;
  box-shadow: none;
  background-color: #ffb3b3;
}
.item-number {
  font-size: 0.8rem;
  float: right;
  position: absolute;
  top: 0;
  right: 5px;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: inline-block;
    text-align: left;
    font-size: 0.8rem;
    padding: 5px;
  }
  .header-right {
    display: inline-block;
    font-size: 0.8rem;
  }
  .sidepanel {
    top: 0;
  }
  .item-number {
    top: -5px;
    right: 0px;
  }
}
@media screen and (min-width: 501px) and (max-width: 715px) {
  p {
    display: none;
  }
  .header a {
    font-size: 1rem;
  }
}
@media screen and (min-width: 710px) and (max-width: 780px) {
  p {
    margin-left: 28%;
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 781px) and (max-width: 850px) {
  p {
    font-size: 1rem;
    margin-left: 27%;
  }
}
@media screen and (min-width: 851px) and (max-width: 1000px) {
  p {
    font-size: 1.2rem;
    margin-left: 28%;
  }
}
</style>
