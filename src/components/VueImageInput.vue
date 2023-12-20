<template>
  <div :class="`${containerSize} container ${border} ${padding}`" @drop="handleDrop" @dragover.prevent>
    <template v-if="!imageSrc">
      <input class="input" type="file" v-on:change="onChange" :accept="mimes" multiple>
      <button @click.prevent="openInput" :class="`${size} btn ${background} ${textColor} ${fontSize} ${bgRounded}`">{{ title }}</button>
    </template>
    <template v-if="imageSrc" :class="size">
      <img :src="imageSrc" :class="`w-full image ${imageRounded}`">
      <div @click="deleteFile" :class="`close ${closeBtn}`"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'VueImageInput',

  props: {
    title: String, // Drop here
    fontSize: String,
    size: String,
    background: String,
    textColor: String,
    border: String,
    mimes: String, //'.jpg,.png',
    imageRounded: String,
    closeBtn: String,
    bgRounded: String,
    padding: String, //default 5px
  },

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
@import './../assets/css/style.css';
</style>