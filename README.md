# Vue3-picture-inut

This is a simple input for image

![screen](https://github.com/DMITRII1548/Vue-Image-Input/blob/master/assets/Screenshot_1.png)
![screen](https://github.com/DMITRII1548/Vue-Image-Input/blob/master/assets/Screenshot_2.png)
## What's new?
1. added new colors: ![aqua](https://placehold.co/15x15/aqua/aqua.png) `aqua`, ![lavender](https://placehold.co/15x15/lavender/lavender.png) `lavender`, ![indigo](https://placehold.co/15x15/indigo/indigo.png) `indigo`, ![fuchsia](https://placehold.co/15x15/fuchsia/fuchsia.png) `fuchsia`.

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

| param         | value                                                                      | 
| ------------- |:--------------------------------------------------------------------------:| 
| bg-none       | none                                                                       | 
| bg-default    | ![#dadada](https://placehold.co/15x15/dadada/dadada.png) `#dadada`         | 
| bg-white      | ![#fff](https://placehold.co/15x15/fff/fff.png) `#fff`                     | 
| bg-black      | ![#000](https://placehold.co/15x15/000/000.png) `#000`                     | 
| bg-blue       | ![blue](https://placehold.co/15x15/blue/blue.png) `blue`                   | 
| bg-red        | ![red](https://placehold.co/15x15/red/red.png) `red`                       | 
| bg-grey       | ![grey](https://placehold.co/15x15/grey/grey.png) `grey`                   |
| bg-green      | ![#0FCA0F](https://placehold.co/15x15/0FCA0F/0FCA0F.png) `#0FCA0F`         | 
| bg-yellow     | ![yellow](https://placehold.co/15x15/yellow/yellow.png) `yellow`           |
| bg-dark-gray  | ![darkgray](https://placehold.co/15x15/darkgray/darkgray.png) `darkgray`   |
| bg-maroon     | ![maroon](https://placehold.co/15x15/maroon/maroon.png) `maroon`           |
| bg-aqua       | ![aqua](https://placehold.co/15x15/aqua/aqua.png) `aqua`                   |
| bg-indigo     | ![indigo](https://placehold.co/15x15/indigo/indigo.png) `indigo`           |
| bg-lavender   | ![lavender](https://placehold.co/15x15/lavender/lavender.png) `lavender`   |
| bg-fuchsia    | ![fuchsia](https://placehold.co/15x15/fuchsia/fuchsia.png) `fuchsia`       |

### textColor
Text color
### params

| param           | value                                                                    | 
| --------------- |:------------------------------------------------------------------------:| 
| text-black      | ![#000](https://placehold.co/15x15/000/000.png) `#000`                   | 
| text-blue       | ![blue](https://placehold.co/15x15/blue/blue.png) `blue`                 | 
| text-white      | ![#fff](https://placehold.co/15x15/fff/fff.png) `#fff`                   | 
| text-red        | ![red](https://placehold.co/15x15/red/red.png) `red`                     | 
| text-grey       | ![grey](https://placehold.co/15x15/grey/grey.png) `grey`                 |
| text-green      | ![#0FCA0F](https://placehold.co/15x15/0FCA0F/0FCA0F.png) `#0FCA0F`       | 
| text-yellow     | ![yellow](https://placehold.co/15x15/yellow/yellow.png) `yellow`         |
| text-dark-gray  | ![darkgray](https://placehold.co/15x15/darkgray/darkgray.png) `darkgray` |
| text-maroon     | ![yellow](https://placehold.co/15x15/maroon/maroon.png) `maroon`         |
| text-aqua       | ![aqua](https://placehold.co/15x15/aqua/aqua.png) `aqua`                   |
| text-indigo     | ![indigo](https://placehold.co/15x15/indigo/indigo.png) `indigo`           |
| text-lavender   | ![lavender](https://placehold.co/15x15/lavender/lavender.png) `lavender`   |
| text-fuchsia    | ![fuchsia](https://placehold.co/15x15/fuchsia/fuchsia.png) `fuchsia`       |


### border
Border params: border-style, border-width, 
### params

| param             | value                                                                        | 
| ----------------- |:----------------------------------------------------------------------------:| 
| border-none       | border: none                                                                 |
| border            | border-width: 1px                                                            |
| border-2          | border-width: 2px                                                            |
| border-3          | border-width: 3px                                                            |
| border-4          | border-width: 4px                                                            |
| border-5          | border-width: 5px                                                            |
| border-black      | ![#000](https://placehold.co/15x15/000/000.png) `#000`                       |
| border-blue       | ![blue](https://placehold.co/15x15/blue/blue.png) `blue`                     |
| border-white      | ![#fff](https://placehold.co/15x15/fff/fff.png) `#fff`                       |
| border-red        | ![red](https://placehold.co/15x15/red/red.png) `red`                         |
| border-grey       | ![grey](https://placehold.co/15x15/grey/grey.png) `grey`                     |
| border-green      | ![#0FCA0F](https://placehold.co/15x15/0FCA0F/0FCA0F.png) `#0FCA0F`           |
| border-yellow     | ![yellow](https://placehold.co/15x15/yellow/yellow.png) `yellow`             |
| border-dark-gray  | ![darkgray](https://placehold.co/15x15/darkgray/darkgray.png) `darkgray`     |
| border-maroon     | ![yellow](https://placehold.co/15x15/maroon/maroon.png) `maroon`             |
| border-aqua       | ![aqua](https://placehold.co/15x15/aqua/aqua.png) `aqua`                     |
| border-indigo     | ![indigo](https://placehold.co/15x15/indigo/indigo.png) `indigo`             |
| border-lavender   | ![lavender](https://placehold.co/15x15/lavender/lavender.png) `lavender`     |
| border-fuchsia    | ![fuchsia](https://placehold.co/15x15/fuchsia/fuchsia.png) `fuchsia`         |
| border-solid      | border-style: solid                                                          |
| border-dashed     | border-style: dashed                                                         |
| border-dotted     | border-style: dotted                                                         |
| border-double     | border-style: double                                                         |


### imageRounded
thank this prop you can round image 

### params

| param        | value   | 
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

### closeBtn 
styles for closeBtn 

### params 

When :hover

| param             | value           | 
| ----------------- |:---------------:| 
| hover-opacity-10  | opacity: 10%    |
| hover-opacity-20  | opacity: 20%    |
| hover-opacity-30  | opacity: 30%    |
| hover-opacity-40  | opacity: 40%    |
| hover-opacity-50  | opacity: 50%    |
| hover-opacity-60  | opacity: 60%    |
| hover-opacity-70  | opacity: 70%    |
| hover-opacity-80  | opacity: 80%    |
| hover-opacity-90  | opacity: 90%    |
| hover-opacity-100 | opacity: 100%   |

| param            | value                                                                      | 
| ---------------- |:--------------------------------------------------------------------------:| 
| close-black      | ![#000](https://placehold.co/15x15/000/000.png) `#000`                     |
| close-blue       | ![blue](https://placehold.co/15x15/blue/blue.png) `blue`                   |
| close-white      | ![#fff](https://placehold.co/15x15/fff/fff.png) `#fff`                     |
| close-red        | ![red](https://placehold.co/15x15/red/red.png) `red`                       |
| close-green      | ![#0FCA0F](https://placehold.co/15x15/0FCA0F/0FCA0F.png) `#0FCA0F`         |
| close-grey       | ![grey](https://placehold.co/15x15/grey/grey.png) `grey`                   |
| close-yellow     | ![yellow](https://placehold.co/15x15/yellow/yellow.png) `yellow`           |
| close-dark-gray  | ![darkgray](https://placehold.co/15x15/darkgray/darkgray.png) `darkgray`   |
| close-maroon     | ![yellow](https://placehold.co/15x15/maroon/maroon.png) `maroon`           |
| close-aqua       | ![aqua](https://placehold.co/15x15/aqua/aqua.png) `aqua`                   |
| close-indigo     | ![indigo](https://placehold.co/15x15/indigo/indigo.png) `indigo`           |
| close-lavender   | ![lavender](https://placehold.co/15x15/lavender/lavender.png) `lavender`   |
| close-fuchsia    | ![fuchsia](https://placehold.co/15x15/fuchsia/fuchsia.png) `fuchsia`       |

### mimes
accepted types of files

#### recomended '.png,.jpg'


### title 
This is text at your component 
