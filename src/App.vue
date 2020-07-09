<template>
  <div id="app">
    <PageHeader />
    <router-view />
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    PageHeader,
  },
  created() {
    let storeData = () => {
      //store cart data in localStroage
      if (typeof localStorage !== undefined) {
        localStorage.setItem(
          'productsInCart',
          JSON.stringify(this.$store.state.productsInCart)
        )
        localStorage.setItem(
          'numberOfProductsInCart',
          this.$store.state.numberOfProductsInCart
        )
        localStorage.setItem(
          'totalOfProductsInCart',
          this.$store.state.totalOfProductsInCart
        )
      }
      //store user related data to sessionStorage
      sessionStorage.setItem('user', JSON.stringify(this.$store.state.user))
      sessionStorage.setItem(
        'orderHistory',
        JSON.stringify(this.$store.state.orderHistory)
      )
    }
    window.addEventListener('beforeunload', storeData)
    this.$store.commit('getLocalStorage')
  },
}
</script>
<style></style>
