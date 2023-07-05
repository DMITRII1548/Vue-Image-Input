# Vue3-picture-inut

This is a simple input for image

## Installation 

```npm i vue3-picture-input ```

## Getting starting 

Import package in src/main.js file

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import VuePictureInput from 'vue3-picture-input'
import "vue3-picture-input/dist/style.css"

const app = createApp(App)
app.use(VuePictureInput)
app.mount('#app')
```

## Usage
You get your first program with our component
```html
// src/App.vue
<template>
  <VueImageInput size="size-40" mimes=".png,.jpg" ref="imageinput" />
  <button @click="showFile">Show</button>
</template>

<script>

export default {
  name: 'App',

  methods: {
    showFile() {
      console.log(this.$refs.imageinput.file)
    },
  },
}
</script>

<style scoped></style>
```

## Properties



### size
### params

| param       | value   | 
| ----------- |:-------:| 
| size-4      | 1rem    | 
| size-8      | 2rem    | 
| size-12     | 3rem    | 
| size-16     | 4rem    | 
| size-20     | 5rem    | 
| size-24     | 6rem    | 
| size-28     | 7rem    | 
| size-32     | 8rem    | 
| size-36     | 9rem    | 
| size-40     | 10rem   | 
| size-44     | 11rem   | 
| size-48     | 12rem   | 
| size-52     | 13rem   | 
| size-56     | 14rem   | 
| size-60     | 15rem   | 
| size-64     | 16rem   | 
| size-68     | 17rem   | 
| size-72     | 18rem   | 
| size-76     | 19rem   | 
| size-80     | 20rem   | 
| size-84     | 21rem   | 
| size-88     | 22rem   | 
| size-92     | 23rem   | 
| size-96     | 24rem   | 


###background
###params

| param       | value   | 
| ----------- |:-------:| 
| bg-default  | #dadada | 
| bg-white    | #fff    | 
| bg-black    | #000    | 
| bg-red      | red     | 
| bg-green    | #0fcaof | 


###textColor
###params

| param       | value   | 
| ----------- |:-------:| 
| text-black  | #000    | 
| text-white  | #fff    | 
| text-red    | red     | 
| text-green  | #0fca0f | 


###border
###params

| param         | value                | 
| ------------- |:--------------------:| 
| border-none   | border: none         |
| border        | border-width: 1px    |
| border-2      | border-width: 2px    |
| border-3      | border-width: 3px    |
| border-4      | border-width: 4px    |
| border-5      | border-width: 5px    |
| border-black  | #000                 |
| border-white  | #fff                 |
| border-red    | red                  |
| border-green  | #0fca0f              |
| border-solid  | border-style: solid  |
| border-dashed | border-style: dashed |
| border-dotted | border-style: dotted |
| border-double | border-style: double |


