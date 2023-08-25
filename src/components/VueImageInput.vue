<template>
  <div :class="containerSize + ' container' + ' ' + border" @drop="handleDrop" @dragover.prevent>
    <template v-if="!imageSrc">
      <input class="input" type="file" v-on:change="onChange" :accept="mimes" multiple>
      <button @click.prevent="openInput" :class="size + ' btn ' + background + ' ' + textColor">{{ title }}</button>
    </template>
    <template v-if="imageSrc" :class="size">
      <img :src="imageSrc" :class="'w-full image ' + imageRounded">
      <div @click="deleteFile" :class="'close ' + closeBtn"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'VueImageInput',

  props: [
    'title', // Drop here
    'size',
    'background',
    'textColor',
    'border',
    'mimes', //'.jpg,.png',
    'imageRounded',
    'closeBtn'
  ],

  data() {
    return {
      imageSrc: '',
      file: [],
    }
  },

  methods: {
    onChange(event) {
      this.file = event.target.files[0]
      this.createImage()
    },

    openInput() {
      this.input.click()
    },

    createImage() {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.imageSrc = e.target.result
      };

      reader.readAsDataURL(this.file)
    },

    deleteFile() {
      this.imageSrc = ''
      this.file = []
    },

    handleDrop(event) {
      event.preventDefault()
      this.file = event.dataTransfer.files[0]
      this.createImage()
    }
  },

  computed: {
    input() {
      return document.querySelector('.input')
    },

    button() {
      return document.querySelector('.button')
    },

    containerSize() {
      return 'w' + this.size.slice(4)
    },
  },
}
</script>

<style scoped>
button {
  border: none;
  background: #dadada;
  font-weight: 600;
  font-size: 14px;
  width: calc(13rem + 20px);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px dashed #000;
  padding: 5px;
  gap: 35px;
  border-radius: 10px;
  width: calc(13rem + 20px);
  min-height: 1rem;
  max-height: 30rem;
}

.input {
  display: none;
}

.btn {
  cursor: pointer;
}

image {
  max-width: 100%;
  max-height: 80%;
}

.close {
  cursor: pointer;
  position: relative;
  padding-right: 5px;
  padding-bottom: 35px;
  margin-right: auto;
  margin-left: auto;
  width: 20px;
}

.close:before,
.close:after {
  content: "";
  position: absolute;
  width: 24px;
  height: 4px;
  background: red;
}

.close:before {
  transform: rotate(45deg);
}

.close:after {
  transform: rotate(-45deg);
}

.close:hover {
  opacity: 75%;
}

.close-black:after, .close-black:before {
  background: #000;
}

.close-blue:after, .close-blue:before {
  background: blue;
}

.close-white:after, .close-white:before {
  background: #fff;
}

.close-red:after, .close-red:before {
  background: red;
}

.close-green:after, .close-green:before {
  background: #0fca0f
}

.close-grey:after, .close-grey:before {
  background: grey;
}

.close-yellow:after, .close-yellow:before {
  background: yellow;
}

.close-dark-gray:after, .close-dark-gray:before {
  background: darkgray;
}

.close-maroon:after, .close-maroon:before {
  background: maroon;
}

.close-aqua:after, .close-aqua:before {
  background: aqua;
}

.close-lavender:after, .close-lavender:before {
  background: lavender;
}

.close-indigo:after, .close-indigo:before {
  background: indigo;
}

.close-fuchsia:after, .close-fuchsia:before {
  background: fuchsia
}

.hover-opacity-10:hover {
  opacity: 10%;
}

.hover-opacity-20:hover {
  opacity: 20%;
}

.hover-opacity-30:hover {
  opacity: 30%;
}

.hover-opacity-40:hover {
  opacity: 40%;
}

.hover-opacity-50:hover {
  opacity: 50%;
}

.hover-opacity-60:hover {
  opacity: 60%;
}

.hover-opacity-70:hover {
  opacity: 70%;
}

.hover-opacity-80:hover {
  opacity: 80%;
}

.hover-opacity-90:hover {
  opacity: 90%;
}

.hover-opacity-100:hover {
  opacity: 100%;
}

.size-4 {
  width: calc(1rem + 20px);
  height: 1rem;
}


.size-8 {
  width: calc(2rem + 20px);
  height: 2rem;
}


.size-12 {
  width: calc(3rem + 20px);
  height: 3rem;
}

.size-16 {
  width: calc(4rem + 20px);
  height: 4rem;
}

.size-20 {
  width: calc(5rem + 20px);
  height: 5rem;
}

.size-24 {
  width: calc(6rem + 20px);
  height: 6rem;
}

.size-28 {
  width: calc(7rem + 20px);
  height: 7rem;
}

.size-32 {
  width: calc(8rem + 20px);
  height: 8rem;
}

.size-36 {
  width: calc(9rem + 20px);
  height: 9rem;
}

.size-40 {
  width: calc(10rem + 20px);
  height: 10rem;
}

.size-44 {
  width: calc(11rem + 20px);
  height: 11rem;
}

.size-48 {
  width: calc(12rem + 20px);
  height: 12rem;
}

.size-52 {
  width: calc(13rem + 20px) + 20px;
  height: 13rem;
}

.size-56 {
  width: calc(14rem + 20px);
  height: 14rem;
}

.size-60 {
  width: calc(15rem + 20px);
  height: 15rem;
}

.size-64 {
  width: calc(16rem + 20px);
  height: 16rem;
}

.size-68 {
  width: calc(17rem + 20px);
  height: 17rem;
}

.size-72 {
  width: calc(18rem + 20px);
  height: 18rem;
}

.size-76 {
  width: calc(19rem + 20px);
  height: 19rem;
}

.size-80 {
  width: calc(20rem + 20px);
  height: 20rem;
}

.size-84 {
  width: calc(21rem + 20px);
  height: 21rem;
}

.size-88 {
  width: calc(22rem + 20px);
  height: 22rem;
}

.size-92 {
  width: calc(23rem + 20px);
  height: 23rem;
}

.size-96 {
  width: calc(24rem + 20px);
  height: 24rem;
}

.w-4 {
  width: calc(1rem + 20px);
}

.w-8 {
  width: calc(2rem + 20px);
}

.w-12 {
  width: calc(3rem + 20px);
}

.w-16 {
  width: calc(4rem + 20px);
}

.w-20 {
  width: calc(5rem + 20px);
}

.w-24 {
  width: calc(6rem + 20px);
}

.w-28 {
  width: calc(7rem + 20px);
}

.w-32 {
  width: calc(8rem + 20px);
}

.w-36 {
  width: calc(9rem + 20px);
}

.w-40 {
  width: calc(10rem + 20px);
}

.w-44 {
  width: calc(11rem + 20px);
}

.w-48 {
  width: calc(12rem + 20px);
}

.w-52 {
  width: calc(13rem + 20px) + 20px;
}

.w-56 {
  width: calc(14rem + 20px);
}

.w-60 {
  width: calc(15rem + 20px);
}

.w-64 {
  width: calc(16rem + 20px);
}

.w-68 {
  width: calc(17rem + 20px);
}

.w-72 {
  width: calc(18rem + 20px);
}

.w-76 {
  width: calc(19rem + 20px);
}

.w-80 {
  width: calc(20rem + 20px);
}

.w-84 {
  width: calc(21rem + 20px);
}

.w-88 {
  width: calc(22rem + 20px);
}

.w-92 {
  width: calc(23rem + 20px);
}

.w-96 {
  width: calc(24rem + 20px);
}


.w-full {
  width: 100%;
}

.bg-none {
  background: none;
}

.bg-default {
  background: #dadada;
}

.bg-white {
  background: #fff;
}

.bg-black {
  background: #000;
}

.bg-red {
  background: red;
}

.bg-green {
  background: #0fca0f;
}

.bg-grey {
  background: grey;
}

.bg-yellow {
  background: yellow;
}

.bg-dark-gray {
  background: darkgray;
}

.bg-maroon {
  background: maroon;
}

.bg-blue {
  background: blue;
}

.bg-aqua {
  background: aqua;
}

.bg-lavender {
  background: lavender;
}
.bg-indigo {
  background: indigo;
}

.bg-fuchsia {
  background: fuchsia
}

.text-black {
  color: #000;
}

.text-blue {
  color: blue;
}

.text-white {
  color: #fff;
}

.text-red {
  color: red;
}

.text-green {
  color: #0fca0f
}

.text-grey {
  color: grey;
}

.text-yellow {
  color: yellow;
}

.text-dark-gray {
  color: darkgray
}

.text-maroon {
  color: maroon;
}

.text-aqua {
  color: aqua;
}

.text-lavender {
  color: lavender;
}

.text-indigo {
  color: indigo;
}

.text-fuchsia {
  color: fuchsia
}

.border-none {
  border: none;
}

.border {
  border-width: 1px;
}

.border-2 {
  border-width: 2px;
}

.border-3 {
  border-width: 3px;
}

.border-4 {
  border-width: 4px;
}

.border-5 {
  border-width: 5px;
}

.border-black {
  border-color: #000;
}

.border-blue {
  border-color: blue;
}

.border-white {
  border-color: #fff;
}

.border-red {
  border-color: red;
}

.border-green {
  border-color: #0fca0f
}

.border-grey {
  border-color: grey;
}

.border-yellow {
  border-color: yellow;
}

.border-dark-gray {
  border-color: darkgray;
}

.border-maroon {
  border-color: maroon;
}

.border-aqua {
  border-color: aqua;
}

.border-lavender {
  border-color: lavender;
}

.border-indigo {
  border-color: indigo;
}

.border-fuchsia {
  border-color: fuchsia
}

.border-solid {
  border-style: solid;
}

.border-dashed {
  border-style: dashed;
}

.border-dotted {
  border-style: dotted;
}

.border-double {
  border-style: double;
}

.rounded-full {
  border-radius: 50%;
}

.rounded-2 {
  border-radius: 2px;
}

.rounded-4 {
  border-radius: 4px;
}

.rounded-6 {
  border-radius: 6px;
}

.rounded-8 {
  border-radius: 8px;
}

.rounded-10 {
  border-radius: 10px;
}

.rounded-12 {
  border-radius: 12px;
}

.rounded-14 {
  border-radius: 14px;
}

.rounded-16 {
  border-radius: 16px;
}

.rounded-18 {
  border-radius: 18px;
}

.rounded-20 {
  border-radius: 20px;
}

.rounded-22 {
  border-radius: 22px;
}

.rounded-24 {
  border-radius: 24px;
}

.rounded-26 {
  border-radius: 26px;
}

.rounded-28 {
  border-radius: 28px;
}

.rounded-30 {
  border-radius: 30px;
}

.rounded-32 {
  border-radius: 32px;
}
</style>