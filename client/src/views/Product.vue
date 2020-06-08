<template>
  <div class="card">
    <div class="image">
      <img :src="product.img" :alt="product.name" />
    </div>
    <div class="text">
      <h1>{{product.name}}</h1>
      <p>${{product.price}} {{product.weight}}</p>
      <p>Some text about the product</p>
      <p>
        <button @click="addToCart">Add to Cart</button>
      </p>
    </div>
  </div>
</template>

<script>
import productService from "@/services/productService";
export default {
  data() {
    return {
      product: {}
    };
  },
  async created() {
    this.product = (
      await productService.getProductById(this.$route.params.id)
    ).data;
    this.product = this.product[0];
  },
  methods: {
    addToCart() {
      const payload = [this.product, 1];
      this.$store.commit("addItemInCart", payload);
    }
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-width: 250px;
  max-width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.image {
  width: 40%;
  margin: auto;
}
.text {
  width: 60%;
}
img {
  width: 80%;
}
button {
  background-color: #9acdd1;
  border: #9acdd1 1px solid;
  border-radius: 25px;
  padding: 5px 15px;
  cursor: pointer;
  margin-top: 25px;
}
button:hover {
  background-color: #ffebe6;
}
</style>