<template>
  <div class="cartContainer">
    <table>
      <caption>Your Cart: {{$store.state.numberOfProductsInCart}} items</caption>
      <tr v-for="(productInCart,index) in $store.state.productsInCart" :key="index">
        <td style="width:30%">
          <img :src="productInCart.img" />
        </td>
        <td style="width:25%">{{productInCart.name}}</td>
        <td style="width:15%">Qty: {{productInCart.quantity}}</td>
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
table {
  width: 70%;
  text-align: left;
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
/* tr:nth-child(even) {
  background-color: #dddddd;
} */
</style>