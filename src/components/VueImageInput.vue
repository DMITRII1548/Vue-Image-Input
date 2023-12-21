<template>
  <div 
    :class="`${containerSize} container ${border}`" 
    :style="`border-color: ${borderColor}; padding: ${padding}; padding-left: ${paddingLeft}; padding-right: ${paddingRight}; padding-top: ${paddingTop}; padding-bottom: ${paddingBottom}`"
    @drop="handleDrop" 
    @dragover.prevent>
    <template v-if="!imageSrc">
      <input 
        class="input" 
        type="file" 
        v-on:change="onChange" 
        :accept="mimes"
        @input="$emit('update:file', $event.target.files[0])"
        multiple
        ref="input">
      <button 
        @click.prevent="openInput" 
        :class="`${size} btn`"
        :style="`background: ${background}; color: ${textColor}; font-size: ${fontSize}; border-radius: ${bgRounded}`">{{ title }}</button>
    </template>
    <template v-if="imageSrc">
      <img :src="imageSrc" class="w-full image" :style="`border-radius: ${imageRounded}`">
      <div 
        @click="deleteFile" 
        class="close"
        ref="close">
          <div class="close-before" :style="`background: ${closeBtnColor}`" ref="closeBefore"></div>
          <div class="close-after" :style="`background: ${closeBtnColor}`" ref="closeAfter"></div>
        </div>
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
    borderColor: String,
    mimes: String, //'.jpg,.png',
    imageRounded: String,
    closeBtnColor: String,
    closeBtn: String,
    bgRounded: String,
    padding: String, //default 5px
    paddingLeft: String,
    paddingRight: String,
    paddingTop: String,
    paddingBottom: String
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
      this.$refs.input.click()
    },

    createImage() {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.imageSrc = e.target.result
      };

      reader.readAsDataURL(this.file)
    },

    deleteFile() {
      this.$emit('update:file', [])
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
    containerSize() {
      return 'w' + this.size.slice(4)
    },
  },
}
</script>

<style scoped>
@import './../assets/css/style.css';
</style>