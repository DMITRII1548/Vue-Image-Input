# Vue3-picture-inut

This is a simple input for image

![screen](https://github.com/DMITRII1548/Vue-Image-Input/blob/master/assets/Screenshot_1.png)
![screen](https://github.com/DMITRII1548/Vue-Image-Input/blob/master/assets/Screenshot_2.png)

## What's new?

1. Added new background class: bg-none

2. Added blue color

3. Add new prop imageRounded

## Installation 

```npm i vue3-picture-input ```

## Getting starting 

Import package in src/main.js file

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import VueImageInput from 'vue3-picture-input'
import "vue3-picture-input/dist/style.css"

const app = createApp(App)
app.use(VueImageInput)
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
Size of your input

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


### background
Background color

### params

| param       | value   | 
| ----------- |:-------:| 
| bg-none     | none    | 
| bg-default  | #dadada | 
| bg-white    | #fff    | 
| bg-black    | #000    | 
| bg-blue     | blue    | 
| bg-red      | red     | 
| bg-grey     | grey    |
| bg-green    | #0fcaof | 


### textColor
Text color
### params

| param       | value   | 
| ----------- |:-------:| 
| text-black  | #000    | 
| text-blue   | blue    | 
| text-white  | #fff    | 
| text-red    | red     | 
| text-grey   | grey    |
| text-green  | #0fca0f | 



### border
Border params: border-style, border-width, 
### params

| param         | value                | 
| ------------- |:--------------------:| 
| border-none   | border: none         |
| border        | border-width: 1px    |
| border-2      | border-width: 2px    |
| border-3      | border-width: 3px    |
| border-4      | border-width: 4px    |
| border-5      | border-width: 5px    |
| border-black  | #000                 |
| border-blue   | blue                 |
| border-white  | #fff                 |
| border-red    | red                  |
| border-grey   | grey                 |
| border-green  | #0fca0f              |
| border-solid  | border-style: solid  |
| border-dashed | border-style: dashed |
| border-dotted | border-style: dotted |
| border-double | border-style: double |


### imageRounded
thank this prop you can round image 

### params

| param       | value   | 
| ------------ |:-------:| 
| rounded-full | 50%     |
| rounded-2    | 2px     | 
| rounded-4    | 4px     | 
| rounded-6    | 6px     | 
| rounded-8    | 8px     | 
| rounded-10   | 10px    | 
| rounded-12   | 12px    | 
| rounded-14   | 14px    | 
| rounded-16   | 16px    | 
| rounded-18   | 18px    | 
| rounded-20   | 20px    | 
| rounded-22   | 22px    | 
| rounded-24   | 24px    | 
| rounded-26   | 26px    |
| rounded-28   | 28px    |
| rounded-30   | 30px    |
| rounded-32   | 32px    |


### mimes
accepted types of files

#### recomended '.png,.jpg'


### title 
This is text at your component 
