<template>
  <div
    @click="navigateTo('/cart')"
    class="mini-cart"
    @mouseover="$store.state.hoverCart = true"
    @mouseleave="$store.state.hoverCart = false"
    v-if="$store.state.hoverCart"
  >
    <h6 v-if="$store.state.totalOfProductsInCart > 0">
      Shopping cart total: ${{ $store.state.totalOfProductsInCart }}
    </h6>
    <h6 v-else>Your Cart Is Empty.</h6>
    <button
      v-if="$store.state.totalOfProductsInCart > 0"
      @click.stop="
        navigateTo(
          $store.state.user ? 'checkout/fullfillment' : '/checkout/sign-in'
        )
      "
    >
      Check Out
    </button>
    <table
      v-for="productInCart in $store.state.productsInCart"
      :key="productInCart._id"
      @click.stop="navigateTo(`products/${productInCart._id}`)"
    >
      <tr>
        <td>
          <img :src="productInCart.img" />
        </td>
        <td>{{ productInCart.name }}</td>
        <td>
          <span>${{ productInCart.price }}</span>
          <span style="font-size:0.8rem">ea</span>
        </td>
        <td>${{ productInCart.total }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CartPopup',
  methods: {
    navigateTo(route) {
      if (this.$route.path !== route) {
        this.$router.push(route)
      }
    },
  },
}
</script>

<style scoped>
.mini-cart {
  width: 250px;
  height: 60%;
  position: fixed;
  z-index: 1;
  top: 91px;
  right: 1%;
  padding: 12px;
  background-color: rgb(243, 226, 226);
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  animation: show-mini-cart 2s;
  animation-delay: -1s;
  cursor: pointer;
}

@keyframes show-mini-cart {
  from {
    right: -10%;
  }
  to {
    right: 1%;
    top: 15%;
  }
}
button {
  position: absolute;
  top: 13%;
  left: 35%;
  cursor: pointer;
  border: #ffebe6 1px solid;
  border-radius: 25px;
  color: black;
  font-size: 1rem;
}
button:hover {
  background-color: #609b9f;
  color: white;
}
table {
  width: 100px;
  height: 100px;
  font-size: 1rem;
  text-align: center;
  border: 1px solid white;
  box-shadow: 5px 5px 5px lightgray;
  margin: auto;
}

h6 {
  text-align: center;
  margin: 15px 2px 25px 2px;
  font-size: 1.2rem;
  font-weight: bold;
}
img {
  width: 65px;
  height: 65px;
  object-fit: scale-down;
}
tr {
  display: table;
  width: 100%;
}
td {
  display: table-row;
}
</style>
