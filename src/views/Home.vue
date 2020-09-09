<template>
  <div class="slidershow">
    <div id="loader" v-if="!homeSlideImages.length"></div>
    <template v-else>
      <div class="slides">
        <input
          v-for="n in 4"
          :key="n"
          type="radio"
          name="radioBtn"
          :id="'r' + `${n}`"
          :checked="n === 1"
        />
        <div
          :class="['slide' + `${index + 1}`]"
          v-for="(img, index) in homeSlideImages"
          :key="img._id"
        >
          <p :class="['text' + `${index + 1}`]">{{ img.text }}</p>
          <img :src="img.img" />
        </div>

        <div class="navigation">
          <label
            v-for="n in 4"
            :key="n"
            :for="'r' + `${n}`"
            class="dot"
            :id="'dot' + `${n}`"
            @click="selectSlide(n)"
          ></label>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import homeSlideService from '../services/homeSlideService'
export default {
  data() {
    return {
      homeSlideImages: [],
      automoveInterval: null,
      clickedSlide: 1,
      currentSlide: 1,
    }
  },
  async created() {
    this.homeSlideImages = (await homeSlideService.getSlideShowImgs()).data
  },
  mounted() {
    this.automoveInterval = setInterval(this.move, 3000)
  },
  beforeDestroy() {
    clearInterval(this.automoveInterval)
  },
  methods: {
    move() {
      let radioBtn = document.getElementsByName('radioBtn')
      let length = radioBtn.length
      if (this.currentSlide < length) {
        this.moveHelper(radioBtn, length, false)
      } else if (this.currentSlide === length) {
        this.moveHelper(radioBtn, length, true)
      }
    },
    moveHelper(radioBtn, length, lastSlide) {
      radioBtn[this.currentSlide - 1].checked = false
      this.moveSlide(this.currentSlide, 'moveCurrentSlideOut')
      if (!lastSlide) {
        radioBtn[this.currentSlide].checked = true
        this.clickedSlide = ++this.currentSlide
      } else {
        this.currentSlide = this.clickedSlide = 1
        radioBtn[this.clickedSlide - 1].checked = true
      }
      this.moveSlide(this.clickedSlide, 'moveNextSlideIn')
    },
    selectSlide(index) {
      clearInterval(this.automoveInterval)
      if (this.clickedSlide != index) {
        this.currentSlide = this.clickedSlide
        this.clickedSlide = index
        this.moveCurrentAndNext()
        this.currentSlide = this.clickedSlide
      }
      this.automoveInterval = setInterval(this.move, 3000)
    },
    moveCurrentAndNext() {
      this.moveSlide(this.currentSlide, 'moveCurrentSlideOut')
      this.moveSlide(this.clickedSlide, 'moveNextSlideIn')
    },
    moveSlide(slideNumber, className) {
      let element = document.getElementsByClassName('slide' + slideNumber)[0]
      element.classList.add(className)
      setTimeout(function() {
        element.classList.remove(className)
      }, 1000)
    },
  },
}
</script>
<style>
.slidershow {
  width: 65%;
  max-width: 850px;
  min-width: 300px;
  height: auto;
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 5%;
  bottom: 1%;
}
.slides {
  width: 100%;
  height: 600px;
  position: relative;
}
.slide1,
.slide2,
.slide3,
.slide4 {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
}
.slide1 img,
.slide2 img,
.slide3 img,
.slide4 img {
  width: 100%;
  height: 95%;
  object-fit: scale-down;
}
.text1,
.text2,
.text3,
.text4 {
  width: 75%;
  position: absolute;
  top: 20%;
  margin-left: 5%;
  font-size: 2rem;
  color: white;
  display: flex;
  text-shadow: 2px 2px 8px black, 0 0 5px #609b9f;
  opacity: 0;
}
.navigation {
  position: absolute;
  bottom: 30%;
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
  margin: 8px;
  cursor: pointer;
  transition: 0.6s;
}
.dot:hover {
  opacity: 1;
}
input[name='radioBtn'] {
  position: absolute;
  visibility: hidden;
}
#r1:checked ~ .navigation #dot1,
#r2:checked ~ .navigation #dot2,
#r3:checked ~ .navigation #dot3,
#r4:checked ~ .navigation #dot4 {
  opacity: 1;
}
#r1:checked ~ .slide1,
.text1 {
  opacity: 1;
}
.moveCurrentSlideOut {
  animation: moveCurrentSlideOut 1s linear;
}
@keyframes moveCurrentSlideOut {
  from {
    margin-left: 0%;
    opacity: 1;
  }
  to {
    margin-left: -100%;
    opacity: 1;
  }
}
.moveNextSlideIn {
  animation: moveNextSlideIn 1s linear;
}
@keyframes moveNextSlideIn {
  from {
    margin-left: 100%;
    opacity: 1;
  }
  to {
    margin-left: 0%;
    opacity: 1;
  }
}
#r2:checked ~ .slide2,
.text2 {
  opacity: 1;
}
#r3:checked ~ .slide3,
.text3 {
  opacity: 1;
}
#r4:checked ~ .slide4,
.text4 {
  opacity: 1;
}
@media screen and (max-width: 550px) {
  .slidershow {
    width: 90%;
  }
  .text1,
  .text2,
  .text3,
  .text4 {
    font-size: 1.2rem;
    top: 33%;
  }
  .navigation {
    bottom: 15%;
  }
}

@media screen and (min-width: 551px) and (max-width: 768px) {
  .text1,
  .text2,
  .text3,
  .text4 {
    font-size: 1.5rem;
    top: 30%;
  }
  .navigation {
    bottom: 15%;
  }
}

#loader {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  z-index: 99;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #609b9f;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
