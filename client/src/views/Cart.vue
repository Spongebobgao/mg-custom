<template>
  <div class="cartContainer">
    <table>
      <caption>Your Cart: {{$store.state.numberOfProductsInCart}} {{$store.state.numberOfProductsInCart>1?"items":"item"}}</caption>
      <tr v-for="(productInCart) in $store.state.productsInCart" :key="productInCart._id">
        <td style="width:30%">
          <img :src="productInCart.img" />
        </td>
        <td style="width:25%">{{productInCart.name}}</td>
        <td style="width:15%">
          <div class="inputField">
            <sup>Qty:</sup>
            <input class="decreaseBtn" type="button" value="-" @click="decrease(productInCart)" />
            <input
              class="input"
              type="text"
              :id="productInCart._id"
              name="qty"
              :value="`${productInCart.quantity}`"
              disabled
            />
            <input class="increaseBtn" type="button" value="+" @click="increase(productInCart)" />
          </div>
        </td>
        <td style="width:15%">
          <span>$ {{productInCart.price}}</span>
          <span style="font-size:0.8rem">ea</span>
        </td>
        <td style="width:15%;font-weight:bold;margin-top:">
          $ {{productInCart.total}}
          <span
            style="font-size:0.9rem;font-weight:lighter;cursor:pointer"
            @click="removeAll(productInCart)"
          >Remove all</span>
        </td>
      </tr>

      <!-- <tr>
        <td style="text-align:right;font-size:0.9rem" colspan="5">Remove all</td>
      </tr>-->
      <tr>
        <td
          style="text-align:right;font-size:1.1rem"
          colspan="5"
          v-if="$store.state.totalOfProductsInCart>0"
        >Total: ${{$store.state.totalOfProductsInCart}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    decrease(product) {
      const qty = parseInt(document.getElementById(product._id).value);
      if (!isNaN(qty) && qty > 1) {
        document.getElementById(product._id).value = qty - 1;
        const payload = [product, -1];
        this.$store.commit("addItemInCart", payload);
      }
    },
    increase(product) {
      const qty = parseInt(document.getElementById(product._id).value);
      if (!isNaN(qty) && qty > 0) {
        document.getElementById(product._id).value = qty + 1;
        const payload = [product, 1];
        this.$store.commit("addItemInCart", payload);
      }
    },
    removeAll(product) {
      const qty = parseInt(document.getElementById(product._id).value);
      const payload = [product, -qty];
      this.$store.commit("addItemInCart", payload);
    }
  }
};
</script>

<style scoped>
.cartContainer {
  width: 80%;
  height: auto;
  position: relative;
  left: 5%;
}
table {
  width: 70%;
  text-align: right;
  font-size: 1.2rem;
}
th,
td {
  padding: 5px;
}
caption {
  padding: 8px;
  text-align: left;
  margin-top: 5px;
  font-size: 1.5rem;
  font-weight: bold;
}
img {
  width: 60%;
  object-fit: scale-down;
}
.inputfield {
  width: 90%;
  position: absolute;
}
.input {
  width: 25%;
  position: relative;
  text-align: center;
}
.decreaseBtn,
.increaseBtn {
  position: relative;
  width: 15%;
  border: none;
  background: none;
  padding: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}
/* tr:nth-child(even) {
  background-color: #dddddd;
} */
</style>