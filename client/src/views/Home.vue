<template>
  <div class="container">
    <div class="container-item" v-for="product in products" :key="product._id">
      <a target="_blank" href="#">
        <img :src="product.img" />
      </a>
      <div class="description">
        <a target="_blank" href="#">
          {{product.name}}
          <br />
          <span>{{product.price}} {{product.weight}}</span>
        </a>
      </div>
      <button class="add-to-cart" @click="addToCart">Add To Cart</button>
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
      itemCount: 0
    };
  },
  async created() {
    this.products = (await productService.getAllProducts()).data;
  },
  methods: {
    addToCart() {
      this.$store.commit("increment");
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
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
  margin: 25px 50px 25px 50px;
}
.container-item {
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
