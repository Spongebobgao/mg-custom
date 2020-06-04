<template>
  <div class="slidershow">
    <div class="slides">
      <input v-for="n in 4" :key="n" type="radio" name="radioBtn" :id="'r'+`${n}`" :checked="n===1" />
      <div :class="['slide'+`${index+1}`]" v-for="(img,index) in homeSlideImages" :key="img._id">
        <p class="text">{{img.text}}</p>
        <img :src="img.img" />
      </div>
      <div class="navigation">
        <label
          v-for="n in 4"
          :key="n"
          :for="'r'+`${n}`"
          class="dot"
          :id="'dot'+`${n}`"
          @click="selectSlide('dot'+`${n}`,n-1,4)"
        ></label>
      </div>
    </div>
  </div>
</template>
<script>
import homeSlideService from "../services/homeSlideService";
export default {
  data() {
    return {
      homeSlideImages: [],
      automoveInterval: null,
      indexOfSlide: 0
    };
  },
  async created() {
    this.homeSlideImages = (await homeSlideService.getSlideShowImgs()).data;
  },
  mounted() {
    this.automoveInterval = setInterval(this.move, 3000);
  },
  methods: {
    move() {
      let element = document.getElementsByName("radioBtn");
      let length = element.length;
      if (this.indexOfSlide < length - 1) {
        element[this.indexOfSlide].checked = false;
        element[this.indexOfSlide++].checked = true;
      } else if (this.indexOfSlide === length - 1) {
        element[this.indexOfSlide].checked = true;
        this.indexOfSlide = 0;
        element[0].checked = false;
      }
    },
    selectSlide(id, index) {
      clearInterval(this.automoveInterval);
      this.indexOfSlide = index;
      this.automoveInterval = setInterval(this.move, 3000);
    }
  }
};
</script>
<style scoped>
.slidershow {
  width: 65%;
  height: auto;
  overflow: hidden;
  position: absolute;
  top: 15%;
  left: 20%;
  bottom: 7%;
}
.slides {
  width: 400%;
  height: 600px;
  display: flex;
}
.slide1,
.slide2,
.slide3,
.slide4 {
  width: 25%;
  transition: 0.6s;
}
.slide1 img,
.slide2 img,
.slide3 img,
.slide4 img {
  width: 100%;
  height: 95%;
  object-fit: scale-down;
}
.text {
  width: 75%;
  position: absolute;
  top: 20%;
  margin-left: 5%;
  font-size: 2rem;
  color: white;
  display: flex;
  text-shadow: 2px 2px 8px black, 0 0 5px #609b9f;
}
.navigation {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
.dot {
  position: relative;
  width: 15px;
  height: 15px;
  border: 2px solid #609b9f;
  background-color: white;
  opacity: 0.6;
  border-radius: 25px;
  margin: 6px;
  cursor: pointer;
}
.dot:hover {
  opacity: 1;
}
input[name="radioBtn"] {
  position: absolute;
  visibility: hidden;
}
#r1:checked ~ .navigation #dot1,
#r2:checked ~ .navigation #dot2,
#r3:checked ~ .navigation #dot3,
#r4:checked ~ .navigation #dot4 {
  opacity: 1;
}
#r1:checked ~ .slide1 {
  margin-left: 0;
}
#r2:checked ~ .slide1 {
  margin-left: -25%;
}
#r3:checked ~ .slide1 {
  margin-left: -50%;
}
#r4:checked ~ .slide1 {
  margin-left: -75%;
}
@media screen and (max-width: 500px) {
  .slidershow {
    top: 0;
    left: 5%;
    width: 90%;
  }
  .navigation {
    bottom: 35%;
  }
  .text {
    font-size: 1.2rem;
    top: 35%;
  }
  .dot {
    width: 10px;
    height: 10px;
  }
}
@media screen and (min-width: 501px) and (max-width: 650px) {
  .navigation {
    bottom: 20%;
  }
  .text {
    font-size: 1.5rem;
    top: 40%;
  }
}
@media screen and (min-width: 651px) and (max-width: 761px) {
  .navigation {
    bottom: 15%;
  }
  .text {
    font-size: 1.5rem;
    top: 35%;
  }
}
@media screen and (min-width: 760px) and (max-width: 900px) {
  .navigation {
    bottom: 10%;
  }
  .text {
    font-size: 1.5rem;
    top: 30%;
  }
}
</style>