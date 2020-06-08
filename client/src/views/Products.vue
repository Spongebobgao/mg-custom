<template>
  <div class="container">
    <div
      @click="navigateTo(product._id)"
      class="container-item"
      v-for="(product,index) in products"
      :key="product._id"
    >
      <img :src="product.img" />
      <div class="description">
        {{product.name}}
        <span>${{product.price}}/{{product.weight}}</span>
        <br />
        <div class="inputField">
          <button class="decreaseBtn" @click.stop="decrease('qty'+`${index+1}`)">-</button>
          <input class="input" type="text" :id="['qty'+`${index+1}`]" name="qty" value="1" />
          <button class="increaseBtn" @click="increase('qty'+`${index+1}`)">+</button>
        </div>
      </div>
      <button class="add-to-cart" @click="addToCart(product,['qty'+`${index+1}`])">Add To Cart</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import productService from "@/services/productService";

export default {
  name: "Home",
  data() {
    return {
      products: [],
      quantity: 1
    };
  },
  async created() {
    this.products = (await productService.getAllProducts()).data;
  },
  methods: {
    addToCart(product, id) {
      const qty = parseFloat(document.getElementById(id).value);
      if (!isNaN(qty) && qty > 0) {
        const payload = [product, qty];
        this.$store.commit("addItemInCart", payload);
      } else {
        alert("Please enter a valid number");
      }
    },
    decrease(id) {
      const qty = parseInt(document.getElementById(id).value);
      if (!isNaN(qty) && qty > 1) {
        document.getElementById(id).value = qty - 1;
      }
    },
    increase(id) {
      const qty = parseInt(document.getElementById(id).value);
      if (!isNaN(qty) && qty > 0) {
        document.getElementById(id).value = qty + 1;
      }
    },
    navigateTo(id) {
      this.$router.push(`/products/${id}`);
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.inputField {
  display: flex;
  margin-top: 5px;
  margin-left: 32%;
  border: #006666 1px solid;
  width: 35%;
  border-radius: 5px;
  overflow: hidden;
}
.decreaseBtn,
.increaseBtn {
  border: none;
  background: white;
  box-shadow: none;
  width: 27.5%;
  cursor: pointer;
  position: relative;
}
.input {
  position: relative;
  width: 45%;
  text-align: center;
}
.decreaseBtn:hover,
.increaseBtn:hover {
  background: #ffebe6;
}

img {
  object-fit: scale-down;
  width: 70%;
  height: 150px;
}
.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 15px;
  margin: 25px;
}
.container-item {
  min-width: 240px;
  text-align: center;
  box-shadow: 10px 10px 5px #609b9f;
  cursor: pointer;
  background-size: cover;
}
.description {
  color: #006666;
}
.description a {
  text-decoration: none;
  margin-top: 15px;
}
.add-to-cart {
  border: #609b9f 1px solid;
  border-radius: 30px;
  cursor: pointer;
  margin: 10px;
  color: #006666;
  padding: 5px 10px 5px 10px;
}
.add-to-cart:hover {
  background-color: #ffebe6;
}
.add-to-cart:focus {
  outline: none;
}
@media screen and (max-width: 500px) {
  .container {
    display: grid;
    grid-template-columns: auto;
  }
}
@media screen and (min-width: 501px) and (max-width: 650px) {
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 651px) and (max-width: 850px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
/* @media screen and (min-width: 901px) {
  .container {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
} */
</style>
