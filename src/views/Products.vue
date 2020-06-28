<template>
  <div class="container">
    <div
      @click="navigateTo(product._id)"
      class="container-item"
      v-for="(product) in products"
      :key="product._id"
    >
      <img :src="product.img" />
      <div class="description">
        {{product.name}}
        <span>${{product.price}}/{{product.weight}}</span>
        <br />
        <QtyButton :id="product._id" :view="view" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import productService from "@/services/productService";
import QtyButton from "@/components/QtyButton.vue";
export default {
  name: "Home",
  components: {
    QtyButton
  },
  data() {
    return {
      products: [],
      view: "products"
    };
  },
  async created() {
    this.products = (await productService.getAllProducts()).data;
  },
  methods: {
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
  text-align: center;
  box-shadow: 10px 10px 5px #609b9f;
  cursor: pointer;
  background-size: cover;
}
.description {
  color: #006666;
}

@media screen and (max-width: 500px) {
  .container {
    display: grid;
    grid-template-columns: auto;
  }
  .container-item {
    min-width: 240px;
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
</style>
