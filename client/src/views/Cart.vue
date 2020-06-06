<template>
  <div class="cartContainer">
    <table>
      <caption>Your Cart: {{$store.state.numberOfProductsInCart}} items</caption>
      <tr v-for="(productInCart,index) in $store.state.productsInCart" :key="index">
        <td style="width:40%">
          <img :src="productInCart.img" />
        </td>
        <td style="width:20%">{{productInCart.name}}</td>
        <td style="width:10%">{{productInCart.quantity}}</td>
        <td style="width:15%">
          $ {{productInCart.price}}
          <span style="font-size:0.8rem">each</span>
        </td>
        <td style="width:15%;font-weight:bold">$ {{productInCart.total}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cartContainer {
  width: 80%;
  height: auto;
  position: relative;
  left: 5%;
}
table,
th,
td {
  border-collapse: collapse;
  width: 70%;
  text-align: center;
}
th,
td {
  padding: 15px;
}
caption {
  padding: 8px;
  text-align: left;
  margin-top: 5px;
  font-size: 1.5rem;
  font-weight: bold;
}
img {
  width: 70%;
  object-fit: scale-down;
}
/* tr:nth-child(even) {
  background-color: #dddddd;
} */
</style>