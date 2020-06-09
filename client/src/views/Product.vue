<template>
  <div class="card">
    <div class="image">
      <img :src="product.img" :alt="product.name" />
    </div>
    <div class="text">
      <h1>{{product.name}}</h1>
      <p>${{product.price}} {{product.weight}}</p>
      <p>Some text about the product</p>
      <QtyButton :id="product._id" :view="view" :product="product" />
    </div>
  </div>
</template>

<script>
import productService from "@/services/productService";
import QtyButton from "@/components/QtyButton.vue";
export default {
  components: {
    QtyButton
  },
  data() {
    return {
      product: {},
      view: "product"
    };
  },
  async created() {
    this.product = (
      await productService.getProductById(this.$route.params.id)
    ).data;
    this.product = this.product[0];
  },
  methods: {}
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
</style>