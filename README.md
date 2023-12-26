# Vue3-picture-input

This is a simple input for image

![screen](https://github.com/DMITRII1548/Vue-Image-Input/blob/master/assets/Screenshot_1.png)
![screen](https://github.com/DMITRII1548/Vue-Image-Input/blob/master/assets/Screenshot_2.png)

## [WebSite](http://vue3pictureinput.sytes.net)

## [Migrate docs from 2 to 3 version](http://vue3pictureinput.sytes.net/migrate/from_2_to_3_version)

## [Docs for this version with examples](http://vue3pictureinput.sytes.net/versions/v3/5)

## We need your ideas for new updates
If you any idea for update.
Please, click [here](http://vue3pictureinput.sytes.net/ideas/create) and fill in this form.

## What's new?
1. Improved, optimized and minified component

2. Deleted choicing colors with classes. Now, you can set colors in attrs

### Before
```html
<template>
  <VueImageInput size="size-40" mimes=".png,.jpg" ref="imageinput" border="border-navy"/>
</template>

<script>
import { VueImageInput } from 'vue3-picture-input'
import "vue3-picture-input/style.css"

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
```

### After

```html
<template>
  <VueImageInput size="size-40" mimes=".png,.jpg" ref="imageinput" borderColor="navy"/>
</template>

<script>
import { VueImageInput } from 'vue3-picture-input'
import "vue3-picture-input/style.css"

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
```

3. Added new classes for border width: border-6, border-7, border-8, border-9, border-10.

4. Added strong types for properties.

5. Added new way for getting putted file.

### Before

```html
<template>
  <VueImageInput size="size-40" mimes=".png,.jpg" ref="imageinput" borderColor="navy"/>
</template>

<script>
import { VueImageInput } from 'vue3-picture-input'
import "vue3-picture-input/style.css"

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
```

### After

```html
<template>
  <VueImageInput
    size="size-40"
    mimes=".png,.jpg"
    title="Drop file here"
    v-model:file="file"/>
  <button @click="showFile">Show</button>
</template>

<script>
import { VueImageInput } from 'vue3-picture-input'
import "vue3-picture-input/style.css"

export default {
  name: 'App',

  data() {
    return {
      file: []
    }
  },

  methods: {
    showFile() {
      console.log(this.file)
    },
  },

  components: {
    VueImageInput,
  },
}
</script>

<style scoped></style>
```

6. Deleted  classed for padding. Now you need write padding this way:

```html
<template>
  <VueImageInput
    size="size-40"
    mimes=".png,.jpg"
    title="Drop file here"
    padding="5px"
    paddingLeft="10px"
    v-model:file="file"/>
  <button @click="showFile">Show</button>
</template>

<script>
import { VueImageInput } from 'vue3-picture-input'
import "vue3-picture-input/style.css"

export default {
  name: 'App',

  data() {
    return {
      file: []
    }
  },

  methods: {
    showFile() {
      console.log(this.file)
    },
  },

  components: {
    VueImageInput,
  },
}
</script>

<style scoped></style>
```
7. Deleted rounded class. New way to round image or background:

```html
<template>
  <VueImageInput
    size="size-72"
    mimes=".png,.jpg"
    title="Drop file here"
    imageRounded="10px"
    bgRounded="15px"
    v-model:file="file"/>
  <button @click="showFile">Show</button>
</template>

<script>
import { VueImageInput } from 'vue3-picture-input'
import "vue3-picture-input/style.css"

export default {
  name: 'App',

  data() {
    return {
      file: []
    }
  },

  methods: {
    showFile() {
      console.log(this.file)
    },
  },

  components: {
    VueImageInput,
  },
}
</script>

<style scoped></style>
```

8. You must set font-size for title into pixels, percents and other ways in css

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  fontSize="16px"/>
```

## Installation
NPM:
```npm i vue3-picture-input ```

YARN:
``` yarn add vue3-picture-input ```

## Getting starting 

## Usage
Import the package into your component. You will get your first program with this component.
```html
// src/App.vue
<template>
  <VueImageInput
    size="size-72"
    mimes=".png,.jpg"
    title="Drop file here"/>
  <button>Show</button>
</template>

<script>
import { VueImageInput } from 'vue3-picture-input'
import "vue3-picture-input/style.css"

export default {
  name: 'App',

  components: {
    VueImageInput,
  },
}
</script>

<style scoped></style>
```

In this code you have imported your component and have added his styles.

### If you want to get your putted image as file use v-model:file:
In this code implemented getting putted file functionality.
```html
<template>
  <VueImageInput
    size="size-72"
    mimes=".png,.jpg"
    title="Drop file here"/>
  <button @click="showFile">Show</button>
</template>

<script>
import VueImageInput from './components/VueImageInput.vue'

export default {
  name: 'App',

  data() {
    return {
      file: []
    }
  },

  methods: {
    showFile() {
      console.log(this.file)
    },
  },

  components: {
    VueImageInput,
  },
}
</script>

<style scoped></style>

```

## Properties

### size
Size of this component

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

### background
Background inside this component.

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  background="#7a7a7a"/>
```

### textColor
Text color for title

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  textColor="#7a7a7a"
  title="Drop file here"/>
```

### border
Border params: border-style, border-width, 
### params

| param             | value                                                                          | 
| ----------------- |:------------------------------------------------------------------------------:| 
| border-none       | border: none                                                                   |
| border            | border-width: 1px                                                              |
| border-2          | border-width: 2px                                                              |
| border-3          | border-width: 3px     we                                                         |
| border-4          | border-width: 4px                                                              |
| border-5          | border-width: 5px                                                              |
| border-6          | border-width: 6px                                                              |
| border-7          | border-width: 7px                                                              |
| border-8          | border-width: 8px                                                              |
| border-9          | border-width: 9px                                                              |
| border-10         | border-width: 10px                                                             |
| border-solid      | border-style: solid                                                            |
| border-dashed     | border-style: dashed                                                           |
| border-dotted     | border-style: dotted                                                           |
| border-double     | border-style: double                                                           |

### borderColor
Border color

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  borderColor="#000"/>
```
### bgRounded
Round background of this component.

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  bgRounded="50%"/>
```

### imageRounded
Thank this prop you can round an image

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  bgRounded="50%"/>
```

### closeBtn 
Styles for closeBtn

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

### closeBtnColor
Color for close button

```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  closeBtnColor="blue"/>
```
### mimes
Accepted types of files

#### recomended '.png,.jpg'


### title 
This is text at your component 

### fontSize
Font size of your title

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  fontSize="16px"/>
```

### padding
Padding of the container component

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  padding="16px"/>
```

### paddingLeft
Padding left of the container component

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  paddingLeft="16px"/>
```

### paddingRight
Padding right of the container component

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  paddingRight="16px"/>
```

### paddingTop
Padding top of the container component

Example usage:

```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  paddingTop="16px"/>
```

### paddingBottom
Padding bottom of the container component

Example usage:
```html
<VueImageInput
  size="size-72"
  mimes=".png,.jpg"
  paddingBottom="16px"/>
```

## Customize styles 

If you want customize styles or add your own styles.

You need to make next: 

1. Delete styles of component. 
```js
// import "vue3-picture-input-test/style.css"
```

2. Add your own slyles.
```js 
import 'url of your styles'
```

Or you can write styles in your style tag in your component.
```html 
<style scoped>
  /* Example styles */

  .border-11 {
    border-width: 11px;
  }
</style>
```