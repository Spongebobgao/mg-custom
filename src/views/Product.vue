<template>
  <div class="card">
    <div class="image">
      <img :src="product.img" :alt="product.name" />
    </div>
    <div class="text">
      <h1>{{ product.name }}</h1>
      <p>${{ product.price }} {{ product.weight }}</p>
      <p class="nutrients">{{ product.nutrients }}</p>
      <QtyButton :id="product._id" :view="view" :product="product" />
    </div>
  </div>
</template>

<script>
import productService from '@/services/productService'
import QtyButton from '@/components/QtyButton.vue'
export default {
  components: {
    QtyButton,
  },
  data() {
    return {
      product: {},
      view: 'product',
    }
  },
  async created() {
    this.product = (
      await productService.getProductById(this.$route.params.id)
    ).data
    this.product = this.product[0]
  },
  methods: {},
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-width: 250px;
  width: 75%;
  max-width: 1000px;
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
.nutrients {
  line-height: 1.5rem;
  font-family: 'Alata';
  margin-right: 5%;
}
</style>
