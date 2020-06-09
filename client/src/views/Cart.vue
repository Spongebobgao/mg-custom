<template>
  <div class="cartContainer">
    <table>
      <caption
        v-if="$store.state.numberOfProductsInCart"
      >Your Cart: {{$store.state.numberOfProductsInCart}} {{$store.state.numberOfProductsInCart>1?"items":"item"}}</caption>
      <caption v-else>Your Cart Is Empty.</caption>
      <tr v-for="(productInCart) in $store.state.productsInCart" :key="productInCart._id">
        <td style="width:25%;cursor:pointer" @click="navigateTo(productInCart._id)">
          <img :src="productInCart.img" />
        </td>
        <td
          style="width:25%;cursor:pointer"
          @click="navigateTo(productInCart._id)"
        >{{productInCart.name}}</td>
        <td style="width:20%">
          <div class="inputField">
            <sup>Qty:</sup>
            <input class="decreaseBtn" type="button" value="-" @click="decrease(productInCart)" />
            <input
              class="input"
              type="text"
              :id="productInCart._id"
              :value="`${productInCart.quantity}`"
              disabled
            />
            <input class="increaseBtn" type="button" value="+" @click="increase(productInCart)" />
          </div>
        </td>
        <td style="width:15%">
          <span>${{productInCart.price}}</span>
          <span style="font-size:0.8rem">ea</span>
        </td>
        <td style="width:15%;font-weight:bold;margin-top:">
          ${{productInCart.total}}
          <br />
          <span
            style="font-size:0.8rem;font-weight:lighter;cursor:pointer"
            @click="removeAll(productInCart)"
          >Remove all</span>
        </td>
      </tr>
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
import productService from "@/services/productService";
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
      const qty = parseFloat(document.getElementById(product._id).value);
      const payload = [product, -qty];
      this.$store.commit("addItemInCart", payload);
    },
    navigateTo(id) {
      this.$router.push(`/products/${id}`);
    }
  }
};
</script>

<style scoped>
.cartContainer {
  height: auto;
  width: 95%;
  position: relative;
  left: 5%;
}
table {
  width: 65%;
  text-align: right;
  font-size: 1.2rem;
  min-width: 220px;
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
sup {
  font-size: 0.8rem;
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
@media screen and (min-width: 651px) and (max-width: 850px) {
  table {
    width: 85%;
  }
}
@media screen and (min-width: 551px) and (max-width: 650px) {
  caption {
    font-size: 1.2rem;
  }
  table {
    width: 100%;
    font-size: 1rem;
  }
}
@media screen and (max-width: 550px) {
  caption {
    font-size: 1rem;
  }
  table {
    text-align: left;
    font-size: 1rem;
  }
  tr {
    display: table;
    width: 100%;
  }
  td {
    display: table-row;
  }
}
</style>