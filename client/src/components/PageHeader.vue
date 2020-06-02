<template>
  <div class="header">
    <a href="/">MG-CUSTOM</a>
    <p>YOU DESERVE ALL THE GOOD THINGS</p>
    <div class="header-right">
      <a href="javascript:void(0)" @click="openSidepanel">
        <i class="material-icons">menu</i>
      </a>
      <router-link to="/cart">
        <i class="material-icons">shopping_cart</i>
        <span class="item-number">{{$store.state.itemCount}}</span>
      </router-link>
    </div>
    <div class="sidepanel" id="sidepanel">
      <button class="closebtn" @click="closeSidepanel">×</button>
      <br />
      <button @click="navigateTo('/')">Home</button>
      <br />
      <button @click="navigateTo('/about')">About</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  // data() {
  //   return {
  //     itemCount: this.$store.state.itemCount
  //   };
  // },
  mounted() {
    console.log(this.$store.state.itemCount);
  },
  methods: {
    openSidepanel() {
      document.getElementById("sidepanel").style.width = "250px";
    },
    closeSidepanel() {
      document.getElementById("sidepanel").style.width = "0";
    },
    navigateTo(route) {
      this.$router.push(route);
      this.closeSidepanel();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
p {
  position: absolute;
  margin-left: 35%;
  font-size: 1.5rem;
  font-family: "Barrio";
}
.header {
  overflow: hidden;
  background-color: #609b9f;
  padding: 10px;
  position: sticky;
  top: 0;
}

.header a {
  float: left;
  color: #1d2f30;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 25px;
  border-radius: 4px;
  margin-top: 5px;
  margin-left: 5px;
  background-color: #9fc3c6;
  position: relative;
}

.header a:hover {
  background-color: #9fc3c6;
  color: white;
}

.header-right {
  float: right;
}
.header-right a {
  background-color: #609b9f;
}
.sidepanel {
  width: 0;
  position: fixed;
  z-index: 1;
  height: 99%;
  top: 7px;
  right: 0;
  background-color: #ffebe6;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  opacity: 0.9;
}
.sidepanel button {
  text-align: center;
  padding: 8px;
  margin: auto;
  text-decoration: none;
  font-size: 25px;
  color: #006666;
  font-weight: bold;
  display: block;
  transition: 0.3s;
  background-color: #ffebe6;
  border: none;
}
.sidepanel button:hover {
  cursor: pointer;
  background-color: #ffb3b3;
  border-radius: 5px;
}
.sidepanel button:focus {
  outline: none;
}
.sidepanel .closebtn {
  cursor: pointer;
  margin-right: 25px;
  font-size: 2.5rem;
  border: none;
  color: #006666;
  background-color: #ffebe6;
}
.closebtn:hover {
  color: #609b9f;
}
.closebtn:focus {
  outline: none;
  box-shadow: none;
  background-color: #ffb3b3;
}
.item-number {
  font-size: 0.8rem;
  float: right;
  position: absolute;
  top: 0;
  right: 5px;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: inline-block;
    text-align: left;
    font-size: 1rem;
  }

  .header-right {
    display: inline-block;
  }
  .sidepanel {
    top: 0;
  }
}
@media screen and (min-width: 501px) and (max-width: 650px) {
  p {
    margin-left: -400px;
  }
}
@media screen and (min-width: 651px) and (max-width: 850px) {
  p {
    font-size: 1rem;
  }
}
</style>
