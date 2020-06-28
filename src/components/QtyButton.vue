<template>
  <div>
    <div :class="view === 'products' ? 'inputField' : 'inputFieldInProduct'">
      <button class="decreaseBtn" @click.stop="decrease(id)">-</button>
      <input class="input" type="text" :id="id" value="1" @click.stop />
      <button class="increaseBtn" @click.stop="increase(id)">+</button>
    </div>
    <button
      :class="view === 'products' ? 'add-to-cart' : 'add-to-cart-in-product'"
      @click.stop="addToCart(product)"
    >
      Add To Cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'QtyButton',
  props: ['id', 'view', 'product'],
  methods: {
    decrease(id) {
      const qty = parseInt(document.getElementById(id).value)
      if (!isNaN(qty) && qty > 1) {
        document.getElementById(id).value = qty - 1
      }
    },
    increase(id) {
      const qty = parseInt(document.getElementById(id).value)
      if (!isNaN(qty) && qty > 0) {
        document.getElementById(id).value = qty + 1
      }
    },
    addToCart(product) {
      const qty = parseFloat(document.getElementById(product._id).value)
      if (!isNaN(qty) && qty > 0) {
        const payload = [product, qty]
        this.$store.commit('addItemInCart', payload)
      } else {
        alert('Please enter a valid number')
      }
    },
  },
}
</script>

<style scoped>
.inputField,
.inputFieldInProduct {
  display: flex;
  margin-top: 5px;
  border: #006666 1px solid;
  width: 35%;
  border-radius: 5px;
  overflow: hidden;
}
.inputFieldInProduct {
  width: 22%;
}
.inputField {
  margin-left: 32%;
}
.decreaseBtn,
.increaseBtn {
  border: none;
  background: white;
  box-shadow: none;
  width: 27.5%;
  cursor: pointer;
  position: relative;
}
.input {
  position: relative;
  width: 45%;
  text-align: center;
}
.decreaseBtn:hover,
.increaseBtn:hover {
  background: #ffebe6;
}
.add-to-cart,
.add-to-cart-in-product {
  border: #609b9f 1px solid;
  border-radius: 30px;
  cursor: pointer;
  margin: 10px;
  color: #006666;
  padding: 5px 10px 5px 10px;
}
.add-to-cart-in-product {
  margin-top: 25px;
}
.add-to-cart:hover,
.add-to-cart-in-product:hover {
  background-color: #ffebe6;
}
.add-to-cart:focus,
.add-to-cart-in-product:focus {
  outline: none;
}
.btnIncart {
  position: relative;
  width: 5%;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}
.btnIncart:hover {
  cursor: pointer;
}
sup {
  font-size: 0.8rem;
}
.inputInCart {
  width: 100%;
  position: absolute;
}
.inputbox {
  width: 25%;
  position: relative;
  text-align: center;
  font-size: 0.8rem;
}
</style>
