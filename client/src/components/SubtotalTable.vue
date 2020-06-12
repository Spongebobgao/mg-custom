<template>
  <div>
    <table>
      <tr>
        <th>
          Subtotal
          <span
            v-if="$store.state.numberOfProductsInCart>0"
          >({{$store.state.numberOfProductsInCart}} {{$store.state.numberOfProductsInCart>1?'items':'item'}}):</span>
        </th>
        <td>${{$store.state.totalOfProductsInCart}}</td>
      </tr>
      <tr>
        <th>Delivery:</th>
        <td>Free</td>
      </tr>
      <tr>
        <th>Est. taxes & fees:</th>
        <td>$9.9</td>
      </tr>
      <tr>
        <th>Est. total:</th>
        <td>$99.9</td>
      </tr>
      <tr v-if="this.$route.name==='Cart'">
        <th colspan="2">
          <button @click="navigateTo('/checkout')" class="check-out-btn">Check Out</button>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
table {
  width: 95%;
  margin-top: 5%;
}
th,
td {
  padding: 8px;
}
.check-out-btn {
  border: #609b9f 1px solid;
  border-radius: 25px;
  width: 50%;
  color: #006666;
  padding: 5px;
  font-size: 1.2rem;
  margin-top: 15px;
  margin-right: 3%;
  cursor: pointer;
}
.check-out-btn:hover {
  background-color: #ffebe6;
}
</style>