<template>
  <div class="cartContainer">
    <table class="v-line product-table">
      <caption v-if="$store.state.numberOfProductsInCart">
        Your Cart:
        {{
          $store.state.numberOfProductsInCart
        }}
        {{
          $store.state.numberOfProductsInCart > 1 ? 'items' : 'item'
        }}
      </caption>
      <caption v-else>
        Your Cart Is Empty.
      </caption>
      <tr
        v-for="productInCart in $store.state.productsInCart"
        :key="productInCart._id"
      >
        <td
          style="width:20%;cursor:pointer"
          @click="navigateTo(`/products/${productInCart._id}`)"
        >
          <img :src="productInCart.img" />
        </td>
        <td
          style="width:30%;cursor:pointer"
          @click="navigateTo(`/products/${productInCart._id}`)"
        >
          {{ productInCart.name }}
        </td>
        <td style="width:20%">
          <div class="inputField">
            <sup>Qty:</sup>
            <input
              class="decreaseBtn"
              type="button"
              value="-"
              @click="decrease(productInCart)"
            />
            <input
              class="input"
              type="text"
              :id="productInCart._id"
              :value="`${productInCart.quantity}`"
              disabled
            />
            <input
              class="increaseBtn"
              type="button"
              value="+"
              @click="increase(productInCart)"
            />
          </div>
        </td>
        <td style="width:15%">
          <span>${{ productInCart.price }}</span>
          <span style="font-size:0.8rem">ea</span>
        </td>
        <td style="width:15%;font-weight:bold;margin-top:">
          ${{ productInCart.total }}
          <br />
          <span
            style="font-size:0.8rem;font-weight:lighter;cursor:pointer"
            @click="removeAll(productInCart)"
            >Remove all</span
          >
        </td>
      </tr>
    </table>

    <SubtotalTable class="checkout-table" />
  </div>
</template>

<script>
import productService from '@/services/productService'
import SubtotalTable from '@/components/SubtotalTable'
export default {
  components: {
    SubtotalTable,
  },
  methods: {
    decrease(product) {
      const qty = parseInt(document.getElementById(product._id).value)
      if (!isNaN(qty) && qty > 1) {
        document.getElementById(product._id).value = qty - 1
        const payload = [product, -1]
        this.$store.commit('addItemInCart', payload)
      }
    },
    increase(product) {
      const qty = parseInt(document.getElementById(product._id).value)
      if (!isNaN(qty) && qty > 0) {
        document.getElementById(product._id).value = qty + 1
        const payload = [product, 1]
        this.$store.commit('addItemInCart', payload)
      }
    },
    removeAll(product) {
      const qty = parseFloat(document.getElementById(product._id).value)
      const payload = [product, -qty]
      this.$store.commit('addItemInCart', payload)
    },
  },
}
</script>

<style scoped>
.cartContainer {
  height: auto;
  width: 95%;
  position: relative;
  left: 2%;
  display: flex;
  flex-wrap: wrap;
  background-color: #ecf9f2;
  padding: 15px;
}
.v-line {
  border-right: 2px #339966 solid;
}

.product-table,
.checkout-table {
  text-align: right;
  font-size: 1.2rem;
  min-width: 220px;
  float: left;
}
.product-table {
  width: 65%;
}
.checkout-table {
  width: 35%;
  font-size: 1.2rem;
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
sup {
  font-size: 0.8rem;
}
.inputfield {
  width: 90%;
  position: absolute;
}
.input {
  width: 25%;
  position: relative;
  text-align: center;
}
.decreaseBtn,
.increaseBtn {
  position: relative;
  width: 15%;
  border: none;
  background: none;
  padding: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}
@media screen and (min-width: 541px) and (max-width: 800px) {
  .product-table {
    width: 95%;
    min-width: 265px;
  }
  .checkout-table {
    width: 95%;
    min-width: 265px;
  }
  .v-line {
    border-bottom: 2px #339966 solid;
    border-right: none;
  }
  .checkout-table {
    font-size: 1rem;
  }
}
@media screen and (max-width: 540px) {
  .product-table,
  .checkout-table {
    width: 95%;
    text-align: center;
  }
  .v-line {
    border-bottom: 2px #339966 solid;
    border-right: none;
    padding-bottom: 35px;
  }
  .checkout-table {
    font-size: 1rem;
  }
  .product-table {
    font-size: 1rem;
  }
  caption {
    font-size: 1rem;
  }
  tr {
    display: table;
    width: 100%;
  }
  td {
    display: table-row;
  }
}
</style>
