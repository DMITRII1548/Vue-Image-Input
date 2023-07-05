import VueImageInput from './components/VueImageInput.vue'

export default {
  install: (app, options) => {
    app.component("VueImageInput", VueImageInput)
  }
}