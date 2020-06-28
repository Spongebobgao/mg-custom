<template>
  <div>
    <table class="subtotal-table">
      <tr>
        <th>
          Subtotal
          <span v-if="$store.state.numberOfProductsInCart > 0"
            >({{ $store.state.numberOfProductsInCart }}
            {{
              $store.state.numberOfProductsInCart > 1 ? 'items' : 'item'
            }}):</span
          >
        </th>
        <td>${{ $store.state.totalOfProductsInCart }}</td>
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
      <tr
        v-if="
          this.$route.name === 'Cart' && $store.state.numberOfProductsInCart > 0
        "
      >
        <th colspan="2">
          <button @click="navigateTo" class="check-out-btn">Check Out</button>
        </th>
      </tr>
    </table>

    <div
      class="item-details"
      v-if="
        (this.$route.name === 'Checkout' ||
          this.$route.name === 'DeliveryOptions') &&
          $store.state.numberOfProductsInCart > 0
      "
    >
      <button class="show-hide-details" @click="showOrHide">
        {{ show ? 'Hide item details -' : 'Show item details +' }}
      </button>
      <table v-if="show">
        <tr
          v-for="productInCart in $store.state.productsInCart"
          :key="productInCart._id"
        >
          <td>
            <img :src="productInCart.img" />
          </td>
          <td>{{ productInCart.name }}</td>
          <td>Qty: {{ productInCart.quantity }}</td>
          <td>
            <span>${{ productInCart.price }}</span>
            <span style="font-size:0.8rem">ea</span>
          </td>
          <td>${{ productInCart.total }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    navigateTo() {
      if (this.$store.state.user !== null) {
        this.$router.push('/checkout/fullfillment')
      } else {
        this.$router.push('/checkout/sign-in')
      }
    },
    showOrHide() {
      this.show ? (this.show = false) : (this.show = true)
    },
  },
}
</script>

<style scoped>
.subtotal-table {
  width: 95%;
  margin-top: 5%;
}
.subtotal-table th,
.subtotal-table td {
  padding: 8px;
}
.check-out-btn,
.show-hide-details {
  border: #609b9f 1px solid;
  border-radius: 25px;
  width: 50%;
  color: #006666;
  font-size: 1rem;
  cursor: pointer;
}
.check-out-btn {
  font-size: 1.2rem;
  margin-top: 15px;
  margin-right: 3%;
  padding: 5px;
}
.check-out-btn:hover,
.show-hide-details:hover {
  background-color: #ffebe6;
}
.item-details {
  width: 95%;
  font-size: 1rem;
  text-align: center;
  margin: auto;
}
.item-details table {
  width: 95%;
}
.item-details tr {
  display: table;
  width: 95%;
}
.item-details td {
  display: table-row;
}
.item-details img {
  width: 15%;
}
</style>
