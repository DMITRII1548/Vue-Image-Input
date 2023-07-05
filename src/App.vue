<template>
  <VueImageInput size="size-40" mimes=".png,.jpg" v-shot:default="file" ref="imageinput" />
  <button @click="showFile">Show</button>
</template>

<script>
import VueImageInput from './components/VueImageInput.vue'

export default {
  name: 'App',

  methods: {
    showFile() {
      console.log(this.$refs.imageinput.file)
    },
  },

  components: {
    VueImageInput,
  },
}
</script>

<style scoped></style>
