# Vue3-picture-input

This is a simple input for image

![screen](https://github.com/DMITRII1548/Vue-Image-Input/blob/master/assets/Screenshot_1.png)
![screen](https://github.com/DMITRII1548/Vue-Image-Input/blob/master/assets/Screenshot_2.png)

## [WebSite](http://vue3pictureinput.sytes.net)

## What's new?
1. Added new colors: ![slateblue](https://placehold.co/15x15/slateblue/slateblue.png) `slateblue`, ![magenta](https://placehold.co/15x15/magenta/magenta.png) `magenta`, ![snow](https://placehold.co/15x15/snow/snow.png) `snow`, ![sandybrown](https://placehold.co/15x15/sandybrown/sandybrown.png) `sandybrown`, , ![violet](https://placehold.co/15x15/violet/violet.png) `violet`.

2. Added a new property padding.

## Installation 

```npm i vue3-picture-input ```

## Getting starting 

## Usage
Import the package into your component. You will get your first program with this component.
```html
// src/App.vue
<template>
  <VueImageInput size="size-40" mimes=".png,.jpg" ref="imageinput" imageRounded="rounded-40"/>
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


### background
Background color

### params

| param         | value                                                                          | 
| ------------- |:------------------------------------------------------------------------------:| 
| bg-none       | none                                                                           | 
| bg-default    | ![#dadada](https://placehold.co/15x15/dadada/dadada.png) `#dadada`             | 
| bg-white      | ![#fff](https://placehold.co/15x15/fff/fff.png) `#fff`                         | 
| bg-black      | ![#000](https://placehold.co/15x15/000/000.png) `#000`                         | 
| bg-blue       | ![blue](https://placehold.co/15x15/blue/blue.png) `blue`                       | 
| bg-red        | ![red](https://placehold.co/15x15/red/red.png) `red`                           | 
| bg-grey       | ![grey](https://placehold.co/15x15/grey/grey.png) `grey`                       |
| bg-green      | ![#0FCA0F](https://placehold.co/15x15/0FCA0F/0FCA0F.png) `#0FCA0F`             | 
| bg-yellow     | ![yellow](https://placehold.co/15x15/yellow/yellow.png) `yellow`               |
| bg-dark-gray  | ![darkgray](https://placehold.co/15x15/darkgray/darkgray.png) `darkgray`       |
| bg-maroon     | ![maroon](https://placehold.co/15x15/maroon/maroon.png) `maroon`               |
| bg-aqua       | ![aqua](https://placehold.co/15x15/aqua/aqua.png) `aqua`                       |
| bg-indigo     | ![indigo](https://placehold.co/15x15/4B0082/4B0082.png) `indigo`               |
| bg-lavender   | ![lavender](https://placehold.co/15x15/lavender/lavender.png) `lavender`       |
| bg-fuchsia    | ![fuchsia](https://placehold.co/15x15/fuchsia/fuchsia.png) `fuchsia`           |
| bg-khaki      | ![khaki](https://placehold.co/15x15/khaki/khaki.png) `khaki`                   |
| bg-orange     | ![orange](https://placehold.co/15x15/orange/orange.png) `orange`               |
| bg-silver     | ![silver](https://placehold.co/15x15/silver/silver.png) `silver`               |
| bg-navy       | ![navy](https://placehold.co/15x15/navy/navy.png) `navy`                       |
| bg-olive      | ![olive](https://placehold.co/15x15/olive/olive.png) `olive`                   |
| bg-purple     | ![purple](https://placehold.co/15x15/purple/purple.png) `purple`               |
| bg-teal       | ![teal](https://placehold.co/15x15/teal/teal.png) `teal`                       |
| bg-slateblue  | ![slateblue](https://placehold.co/15x15/slateblue/slateblue.png)`slateblue`    |
| bg-magenta    | ![magenta](https://placehold.co/15x15/magenta/magenta.png)`magenta`            |
| bg-snow       | ![snow](https://placehold.co/15x15/snow/snow.png)`snow`                        |
| bg-sandybrown | ![sandybrown](https://placehold.co/15x15/sandybrown/sandybrown.png)`sandybrown`|
| bg-violet     | ![violet](https://placehold.co/15x15/violet/violet.png)`violet`                |

### textColor
Text color
### params

| param           | value                                                                          | 
| --------------- |:------------------------------------------------------------------------------:| 
| text-black      | ![#000](https://placehold.co/15x15/000/000.png) `#000`                         | 
| text-blue       | ![blue](https://placehold.co/15x15/blue/blue.png) `blue`                       | 
| text-white      | ![#fff](https://placehold.co/15x15/fff/fff.png) `#fff`                         | 
| text-red        | ![red](https://placehold.co/15x15/red/red.png) `red`                           | 
| text-grey       | ![grey](https://placehold.co/15x15/grey/grey.png) `grey`                       |
| text-green      | ![#0FCA0F](https://placehold.co/15x15/0FCA0F/0FCA0F.png) `#0FCA0F`             | 
| text-yellow     | ![yellow](https://placehold.co/15x15/yellow/yellow.png) `yellow`               |
| text-dark-gray  | ![darkgray](https://placehold.co/15x15/darkgray/darkgray.png) `darkgray`       |
| text-maroon     | ![yellow](https://placehold.co/15x15/maroon/maroon.png) `maroon`               |
| text-aqua       | ![aqua](https://placehold.co/15x15/aqua/aqua.png) `aqua`                       |
| text-indigo     | ![indigo](https://placehold.co/15x15/4B0082/4B0082.png) `indigo`               |
| text-lavender   | ![lavender](https://placehold.co/15x15/lavender/lavender.png) `lavender`       |
| text-fuchsia    | ![fuchsia](https://placehold.co/15x15/fuchsia/fuchsia.png) `fuchsia`           |
| text-khaki      | ![khaki](https://placehold.co/15x15/khaki/khaki.png) `khaki`                   |
| text-orange     | ![orange](https://placehold.co/15x15/orange/orange.png) `orange`               |
| text-silver     | ![silver](https://placehold.co/15x15/silver/silver.png) `silver`               |
| text-navy       | ![navy](https://placehold.co/15x15/navy/navy.png) `navy`                       |
| text-olive      | ![olive](https://placehold.co/15x15/olive/olive.png) `olive`                   |
| text-purple     | ![purple](https://placehold.co/15x15/purple/purple.png) `purple`               |
| text-teal       | ![teal](https://placehold.co/15x15/teal/teal.png) `teal`                       |
| text-slateblue  | ![slateblue](https://placehold.co/15x15/slateblue/slateblue.png)`slateblue`    |
| text-magenta    | ![magenta](https://placehold.co/15x15/magenta/magenta.png)`magenta`            |
| text-snow       | ![snow](https://placehold.co/15x15/snow/snow.png)`snow`                        |
| text-sandybrown | ![sandybrown](https://placehold.co/15x15/sandybrown/sandybrown.png)`sandybrown`|
| text-violet     | ![violet](https://placehold.co/15x15/violet/violet.png)`violet`                |

### border
Border params: border-style, border-width, 
### params

| param             | value                                                                          | 
| ----------------- |:------------------------------------------------------------------------------:| 
| border-none       | border: none                                                                   |
| border            | border-width: 1px                                                              |
| border-2          | border-width: 2px                                                              |
| border-3          | border-width: 3px                                                              |
| border-4          | border-width: 4px                                                              |
| border-5          | border-width: 5px                                                              |
| border-black      | ![#000](https://placehold.co/15x15/000/000.png) `#000`                         |
| border-blue       | ![blue](https://placehold.co/15x15/blue/blue.png) `blue`                       |
| border-white      | ![#fff](https://placehold.co/15x15/fff/fff.png) `#fff`                         |
| border-red        | ![red](https://placehold.co/15x15/red/red.png) `red`                           |
| border-grey       | ![grey](https://placehold.co/15x15/grey/grey.png) `grey`                       |
| border-green      | ![#0FCA0F](https://placehold.co/15x15/0FCA0F/0FCA0F.png) `#0FCA0F`             |
| border-yellow     | ![yellow](https://placehold.co/15x15/yellow/yellow.png) `yellow`               |
| border-dark-gray  | ![darkgray](https://placehold.co/15x15/darkgray/darkgray.png) `darkgray`       |
| border-maroon     | ![yellow](https://placehold.co/15x15/maroon/maroon.png) `maroon`               |
| border-aqua       | ![aqua](https://placehold.co/15x15/aqua/aqua.png) `aqua`                       |
| border-indigo     | ![indigo](https://placehold.co/15x15/4B0082/4B0082.png) `indigo`               |
| border-lavender   | ![lavender](https://placehold.co/15x15/lavender/lavender.png) `lavender`       |
| border-fuchsia    | ![fuchsia](https://placehold.co/15x15/fuchsia/fuchsia.png) `fuchsia`           |
| border-khaki      | ![khaki](https://placehold.co/15x15/khaki/khaki.png) `khaki`                   |
| border-orange     | ![orange](https://placehold.co/15x15/orange/orange.png) `orange`               |
| border-silver     | ![silver](https://placehold.co/15x15/silver/silver.png) `silver`               |
| border-navy       | ![navy](https://placehold.co/15x15/navy/navy.png) `navy`                       |
| border-olive      | ![olive](https://placehold.co/15x15/olive/olive.png) `olive`                   |
| border-purple     | ![purple](https://placehold.co/15x15/purple/purple.png) `purple`               |
| border-teal       | ![teal](https://placehold.co/15x15/teal/teal.png) `teal`                       |
| border-slateblue  | ![slateblue](https://placehold.co/15x15/slateblue/slateblue.png)`slateblue`    |
| border-magenta    | ![magenta](https://placehold.co/15x15/magenta/magenta.png)`magenta`            |
| border-snow       | ![snow](https://placehold.co/15x15/snow/snow.png)`snow`                        |
| border-sandybrown | ![sandybrown](https://placehold.co/15x15/sandybrown/sandybrown.png)`sandybrown`|
| border-violet     | ![violet](https://placehold.co/15x15/violet/violet.png)`violet`                | 
| border-solid      | border-style: solid                                                            |
| border-dashed     | border-style: dashed                                                           |
| border-dotted     | border-style: dotted                                                           |
| border-double     | border-style: double                                                           |

### bgRounded
Round background of this component

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

| param            | value                                                                          | 
| ---------------- |:------------------------------------------------------------------------------:| 
| close-black      | ![#000](https://placehold.co/15x15/000/000.png) `#000`                         |
| close-blue       | ![blue](https://placehold.co/15x15/blue/blue.png) `blue`                       |
| close-white      | ![#fff](https://placehold.co/15x15/fff/fff.png) `#fff`                         |
| close-red        | ![red](https://placehold.co/15x15/red/red.png) `red`                           |
| close-green      | ![#0FCA0F](https://placehold.co/15x15/0FCA0F/0FCA0F.png) `#0FCA0F`             |
| close-grey       | ![grey](https://placehold.co/15x15/grey/grey.png) `grey`                       |
| close-yellow     | ![yellow](https://placehold.co/15x15/yellow/yellow.png) `yellow`               |
| close-dark-gray  | ![darkgray](https://placehold.co/15x15/darkgray/darkgray.png) `darkgray`       |
| close-maroon     | ![yellow](https://placehold.co/15x15/maroon/maroon.png) `maroon`               |
| close-aqua       | ![aqua](https://placehold.co/15x15/aqua/aqua.png) `aqua`                       |
| close-indigo     | ![indigo](https://placehold.co/15x15/4B0082/4B0082.png) `indigo`               |
| close-lavender   | ![lavender](https://placehold.co/15x15/lavender/lavender.png) `lavender`       |
| close-fuchsia    | ![fuchsia](https://placehold.co/15x15/fuchsia/fuchsia.png) `fuchsia`           |
| close-khaki      | ![khaki](https://placehold.co/15x15/khaki/khaki.png) `khaki`                   |
| close-orange     | ![orange](https://placehold.co/15x15/orange/orange.png) `orange`               |
| close-silver     | ![silver](https://placehold.co/15x15/silver/silver.png) `silver`               |
| close-navy       | ![navy](https://placehold.co/15x15/navy/navy.png) `navy`                       |
| close-olive      | ![olive](https://placehold.co/15x15/olive/olive.png) `olive`                   |
| close-purple     | ![purple](https://placehold.co/15x15/purple/purple.png) `purple`               |
| close-teal       | ![teal](https://placehold.co/15x15/teal/teal.png) `teal`                       |
| close-slateblue  | ![slateblue](https://placehold.co/15x15/slateblue/slateblue.png)`slateblue`    |
| close-magenta    | ![magenta](https://placehold.co/15x15/magenta/magenta.png)`magenta`            |
| close-snow       | ![snow](https://placehold.co/15x15/snow/snow.png)`snow`                        |
| close-sandybrown | ![sandybrown](https://placehold.co/15x15/sandybrown/sandybrown.png)`sandybrown`|
| close-violet     | ![violet](https://placehold.co/15x15/violet/violet.png)`violet`                | 

### mimes
accepted types of files

#### recomended '.png,.jpg'


### title 
This is text at your component 

### fontSize
font size of your title 

### params 

| param         | value   | 
| ------------- |:-------:| 
| text-6        | 6px     | 
| text-8        | 8px     | 
| text-10       | 10px    | 
| text-12       | 12px    | 
| text-14       | 14px    | 
| text-16       | 16px    | 
| text-18       | 18px    | 
| text-20       | 20px    | 
| text-22       | 22px    | 
| text-24       | 24px    | 
| text-26       | 26px    | 
| text-28       | 28px    | 
| text-30       | 30px    | 
| text-32       | 32px    | 
| text-34       | 34px    | 
| text-36       | 36px    | 
| text-38       | 38px    | 
| text-40       | 40px    | 
| text-42       | 42px    | 
| text-44       | 44px    | 
| text-46       | 46px    | 
| text-48       | 48px    | 
| text-50       | 50px    | 
| text-52       | 52px    | 
| text-54       | 54px    | 
| text-56       | 56px    | 
| text-58       | 58px    | 
| text-60       | 60px    | 
| text-62       | 62px    | 
| text-64       | 64px    | 

### padding
Padding of container component

### params

### padding

| param         | value   | 
| ------------- |:-------:| 
| p-none        | 0       |
| p             | 1px     |
| p-2           | 2px     |
| p-3           | 3px     |
| p-4           | 4px     |
| p-5           | 5px     |
| p-6           | 6px     |
| p-7           | 7px     |
| p-8           | 8px     |
| p-9           | 9px     |
| p-10          | 10px    |
| p-11          | 11px    |
| p-12          | 12px    |
| p-13          | 13px    |
| p-14          | 14px    |
| p-15          | 15px    |
| p-16          | 16px    |
| p-17          | 17px    |
| p-18          | 18px    |
| p-19          | 19px    |
| p-20          | 20px    |
| p-21          | 21px    |
| p-22          | 22px    |
| p-23          | 23px    |
| p-24          | 24px    |
| p-25          | 25px    |
| p-26          | 26px    |
| p-27          | 27px    |
| p-28          | 28px    |
| p-29          | 29px    |
| p-30          | 30px    |
| p-31          | 31px    |
| p-32          | 32px    |
| p-33          | 33px    |
| p-34          | 34px    |
| p-35          | 35px    |
| p-36          | 36px    |
| p-37          | 37px    |
| p-38          | 38px    |
| p-39          | 39px    |
| p-40          | 40px    |
| p-41          | 41px    |
| p-42          | 42px    |
| p-43          | 43px    |
| p-44          | 44px    |
| p-45          | 45px    |
| p-46          | 46px    |
| p-47          | 47px    |
| p-48          | 48px    |
| p-49          | 49px    |
| p-50          | 50px    |
| p-51          | 51px    |
| p-52          | 52px    |
| p-53          | 53px    |
| p-54          | 54px    |
| p-55          | 55px    |
| p-56          | 56px    |
| p-57          | 57px    |
| p-58          | 58px    |
| p-59          | 59px    |
| p-60          | 60px    |
| p-61          | 61px    |
| p-62          | 62px    |
| p-63          | 63px    |
| p-64          | 64px    |
| p-65          | 65px    |
| p-66          | 66px    |
| p-67          | 67px    |
| p-68          | 68px    |
| p-69          | 69px    |
| p-70          | 70px    |
| p-71          | 71px    |
| p-72          | 72px    |
| p-73          | 73px    |
| p-74          | 74px    |
| p-75          | 75px    |
| p-76          | 76px    |
| p-77          | 77px    |
| p-78          | 78px    |
| p-79          | 79px    |
| p-80          | 80px    |
| p-81          | 81px    |
| p-82          | 82px    |
| p-83          | 83px    |
| p-84          | 84px    |
| p-85          | 85px    |
| p-86          | 86px    |
| p-87          | 87px    |
| p-88          | 88px    |
| p-89          | 89px    |
| p-90          | 90px    |
| p-91          | 91px    |
| p-92          | 92px    |
| p-93          | 93px    |
| p-94          | 94px    |
| p-95          | 95px    |
| p-96          | 96px    |
| p-97          | 97px    |
| p-98          | 98px    |
| p-99          | 99px    |
| p-100         | 100px   |

### padding-left

| param         | value   | 
| ------------- |:-------:| 
| pl-none       | 0       |
| pl            | 1px     |
| pl-2          | 2px     |
| pl-3          | 3px     |
| pl-4          | 4px     |
| pl-5          | 5px     |
| pl-6          | 6px     |
| pl-7          | 7px     |
| pl-8          | 8px     |
| pl-9          | 9px     |
| pl-10         | 10px    |
| pl-11         | 11px    |
| pl-12         | 12px    |
| pl-13         | 13px    |
| pl-14         | 14px    |
| pl-15         | 15px    |
| pl-16         | 16px    |
| pl-17         | 17px    |
| pl-18         | 18px    |
| pl-19         | 19px    |
| pl-20         | 20px    |
| pl-21         | 21px    |
| pl-22         | 22px    |
| pl-23         | 23px    |
| pl-24         | 24px    |
| pl-25         | 25px    |
| pl-26         | 26px    |
| pl-27         | 27px    |
| pl-28         | 28px    |
| pl-29         | 29px    |
| pl-30         | 30px    |
| pl-31         | 31px    |
| pl-32         | 32px    |
| pl-33         | 33px    |
| pl-34         | 34px    |
| pl-35         | 35px    |
| pl-36         | 36px    |
| pl-37         | 37px    |
| pl-38         | 38px    |
| pl-39         | 39px    |
| pl-40         | 40px    |
| pl-41         | 41px    |
| pl-42         | 42px    |
| pl-43         | 43px    |
| pl-44         | 44px    |
| pl-45         | 45px    |
| pl-46         | 46px    |
| pl-47         | 47px    |
| pl-48         | 48px    |
| pl-49         | 49px    |
| pl-50         | 50px    |
| pl-51         | 51px    |
| pl-52         | 52px    |
| pl-53         | 53px    |
| pl-54         | 54px    |
| pl-55         | 55px    |
| pl-56         | 56px    |
| pl-57         | 57px    |
| pl-58         | 58px    |
| pl-59         | 59px    |
| pl-60         | 60px    |
| pl-61         | 61px    |
| pl-62         | 62px    |
| pl-63         | 63px    |
| pl-64         | 64px    |
| pl-65         | 65px    |
| pl-66         | 66px    |
| pl-67         | 67px    |
| pl-68         | 68px    |
| pl-69         | 69px    |
| pl-70         | 70px    |
| pl-71         | 71px    |
| pl-72         | 72px    |
| pl-73         | 73px    |
| pl-74         | 74px    |
| pl-75         | 75px    |
| pl-76         | 76px    |
| pl-77         | 77px    |
| pl-78         | 78px    |
| pl-79         | 79px    |
| pl-80         | 80px    |
| pl-81         | 81px    |
| pl-82         | 82px    |
| pl-83         | 83px    |
| pl-84         | 84px    |
| pl-85         | 85px    |
| pl-86         | 86px    |
| pl-87         | 87px    |
| pl-88         | 88px    |
| pl-89         | 89px    |
| pl-90         | 90px    |
| pl-91         | 91px    |
| pl-92         | 92px    |
| pl-93         | 93px    |
| pl-94         | 94px    |
| pl-95         | 95px    |
| pl-96         | 96px    |
| pl-97         | 97px    |
| pl-98         | 98px    |
| pl-99         | 99px    |
| pl-100        | 100px   |

### padding-right

| param         | value   | 
| ------------- |:-------:| 
| pr-none       | 0       |
| pr            | 1px     |
| pr-2          | 2px     |
| pr-3          | 3px     |
| pr-4          | 4px     |
| pr-5          | 5px     |
| pr-6          | 6px     |
| pr-7          | 7px     |
| pr-8          | 8px     |
| pr-9          | 9px     |
| pr-10         | 10px    |
| pr-11         | 11px    |
| pr-12         | 12px    |
| pr-13         | 13px    |
| pr-14         | 14px    |
| pr-15         | 15px    |
| pr-16         | 16px    |
| pr-17         | 17px    |
| pr-18         | 18px    |
| pr-19         | 19px    |
| pr-20         | 20px    |
| pr-21         | 21px    |
| pr-22         | 22px    |
| pr-23         | 23px    |
| pr-24         | 24px    |
| pr-25         | 25px    |
| pr-26         | 26px    |
| pr-27         | 27px    |
| pr-28         | 28px    |
| pr-29         | 29px    |
| pr-30         | 30px    |
| pr-31         | 31px    |
| pr-32         | 32px    |
| pr-33         | 33px    |
| pr-34         | 34px    |
| pr-35         | 35px    |
| pr-36         | 36px    |
| pr-37         | 37px    |
| pr-38         | 38px    |
| pr-39         | 39px    |
| pr-40         | 40px    |
| pr-41         | 41px    |
| pr-42         | 42px    |
| pr-43         | 43px    |
| pr-44         | 44px    |
| pr-45         | 45px    |
| pr-46         | 46px    |
| pr-47         | 47px    |
| pr-48         | 48px    |
| pr-49         | 49px    |
| pr-50         | 50px    |
| pr-51         | 51px    |
| pr-52         | 52px    |
| pr-53         | 53px    |
| pr-54         | 54px    |
| pr-55         | 55px    |
| pr-56         | 56px    |
| pr-57         | 57px    |
| pr-58         | 58px    |
| pr-59         | 59px    |
| pr-60         | 60px    |
| pr-61         | 61px    |
| pr-62         | 62px    |
| pr-63         | 63px    |
| pr-64         | 64px    |
| pr-65         | 65px    |
| pr-66         | 66px    |
| pr-67         | 67px    |
| pr-68         | 68px    |
| pr-69         | 69px    |
| pr-70         | 70px    |
| pr-71         | 71px    |
| pr-72         | 72px    |
| pr-73         | 73px    |
| pr-74         | 74px    |
| pr-75         | 75px    |
| pr-76         | 76px    |
| pr-77         | 77px    |
| pr-78         | 78px    |
| pr-79         | 79px    |
| pr-80         | 80px    |
| pr-81         | 81px    |
| pr-82         | 82px    |
| pr-83         | 83px    |
| pr-84         | 84px    |
| pr-85         | 85px    |
| pr-86         | 86px    |
| pr-87         | 87px    |
| pr-88         | 88px    |
| pr-89         | 89px    |
| pr-90         | 90px    |
| pr-91         | 91px    |
| pr-92         | 92px    |
| pr-93         | 93px    |
| pr-94         | 94px    |
| pr-95         | 95px    |
| pr-96         | 96px    |
| pr-97         | 97px    |
| pr-98         | 98px    |
| pr-99         | 99px    |
| pr-100        | 100px   |

### padding-top

| param         | value   | 
| ------------- |:-------:| 
| pt-none       | 0       |
| pt            | 1px     |
| pt-2          | 2px     |
| pt-3          | 3px     |
| pt-4          | 4px     |
| pt-5          | 5px     |
| pt-6          | 6px     |
| pt-7          | 7px     |
| pt-8          | 8px     |
| pt-9          | 9px     |
| pt-10         | 10px    |
| pt-11         | 11px    |
| pt-12         | 12px    |
| pt-13         | 13px    |
| pt-14         | 14px    |
| pt-15         | 15px    |
| pt-16         | 16px    |
| pt-17         | 17px    |
| pt-18         | 18px    |
| pt-19         | 19px    |
| pt-20         | 20px    |
| pt-21         | 21px    |
| pt-22         | 22px    |
| pt-23         | 23px    |
| pt-24         | 24px    |
| pt-25         | 25px    |
| pt-26         | 26px    |
| pt-27         | 27px    |
| pt-28         | 28px    |
| pt-29         | 29px    |
| pt-30         | 30px    |
| pt-31         | 31px    |
| pt-32         | 32px    |
| pt-33         | 33px    |
| pt-34         | 34px    |
| pt-35         | 35px    |
| pt-36         | 36px    |
| pt-37         | 37px    |
| pt-38         | 38px    |
| pt-39         | 39px    |
| pt-40         | 40px    |
| pt-41         | 41px    |
| pt-42         | 42px    |
| pt-43         | 43px    |
| pt-44         | 44px    |
| pt-45         | 45px    |
| pt-46         | 46px    |
| pt-47         | 47px    |
| pt-48         | 48px    |
| pt-49         | 49px    |
| pt-50         | 50px    |
| pt-51         | 51px    |
| pt-52         | 52px    |
| pt-53         | 53px    |
| pt-54         | 54px    |
| pt-55         | 55px    |
| pt-56         | 56px    |
| pt-57         | 57px    |
| pt-58         | 58px    |
| pt-59         | 59px    |
| pt-60         | 60px    |
| pt-61         | 61px    |
| pt-62         | 62px    |
| pt-63         | 63px    |
| pt-64         | 64px    |
| pt-65         | 65px    |
| pt-66         | 66px    |
| pt-67         | 67px    |
| pt-68         | 68px    |
| pt-69         | 69px    |
| pt-70         | 70px    |
| pt-71         | 71px    |
| pt-72         | 72px    |
| pt-73         | 73px    |
| pt-74         | 74px    |
| pt-75         | 75px    |
| pt-76         | 76px    |
| pt-77         | 77px    |
| pt-78         | 78px    |
| pt-79         | 79px    |
| pt-80         | 80px    |
| pt-81         | 81px    |
| pt-82         | 82px    |
| pt-83         | 83px    |
| pt-84         | 84px    |
| pt-85         | 85px    |
| pt-86         | 86px    |
| pt-87         | 87px    |
| pt-88         | 88px    |
| pt-89         | 89px    |
| pt-90         | 90px    |
| pt-91         | 91px    |
| pt-92         | 92px    |
| pt-93         | 93px    |
| pt-94         | 94px    |
| pt-95         | 95px    |
| pt-96         | 96px    |
| pt-97         | 97px    |
| pt-98         | 98px    |
| pt-99         | 99px    |
| pt-100        | 100px   |

### padding-bottom

| param         | value   | 
| ------------- |:-------:| 
| pb-none       | 0       |
| pb            | 1px     |
| pb-2          | 2px     |
| pb-3          | 3px     |
| pb-4          | 4px     |
| pb-5          | 5px     |
| pb-6          | 6px     |
| pb-7          | 7px     |
| pb-8          | 8px     |
| pb-9          | 9px     |
| pb-10         | 10px    |
| pb-11         | 11px    |
| pb-12         | 12px    |
| pb-13         | 13px    |
| pb-14         | 14px    |
| pb-15         | 15px    |
| pb-16         | 16px    |
| pb-17         | 17px    |
| pb-18         | 18px    |
| pb-19         | 19px    |
| pb-20         | 20px    |
| pb-21         | 21px    |
| pb-22         | 22px    |
| pb-23         | 23px    |
| pb-24         | 24px    |
| pb-25         | 25px    |
| pb-26         | 26px    |
| pb-27         | 27px    |
| pb-28         | 28px    |
| pb-29         | 29px    |
| pb-30         | 30px    |
| pb-31         | 31px    |
| pb-32         | 32px    |
| pb-33         | 33px    |
| pb-34         | 34px    |
| pb-35         | 35px    |
| pb-36         | 36px    |
| pb-37         | 37px    |
| pb-38         | 38px    |
| pb-39         | 39px    |
| pb-40         | 40px    |
| pb-41         | 41px    |
| pb-42         | 42px    |
| pb-43         | 43px    |
| pb-44         | 44px    |
| pb-45         | 45px    |
| pb-46         | 46px    |
| pb-47         | 47px    |
| pb-48         | 48px    |
| pb-49         | 49px    |
| pb-50         | 50px    |
| pb-51         | 51px    |
| pb-52         | 52px    |
| pb-53         | 53px    |
| pb-54         | 54px    |
| pb-55         | 55px    |
| pb-56         | 56px    |
| pb-57         | 57px    |
| pb-58         | 58px    |
| pb-59         | 59px    |
| pb-60         | 60px    |
| pb-61         | 61px    |
| pb-62         | 62px    |
| pb-63         | 63px    |
| pb-64         | 64px    |
| pb-65         | 65px    |
| pb-66         | 66px    |
| pb-67         | 67px    |
| pb-68         | 68px    |
| pb-69         | 69px    |
| pb-70         | 70px    |
| pb-71         | 71px    |
| pb-72         | 72px    |
| pb-73         | 73px    |
| pb-74         | 74px    |
| pb-75         | 75px    |
| pb-76         | 76px    |
| pb-77         | 77px    |
| pb-78         | 78px    |
| pb-79         | 79px    |
| pb-80         | 80px    |
| pb-81         | 81px    |
| pb-82         | 82px    |
| pb-83         | 83px    |
| pb-84         | 84px    |
| pb-85         | 85px    |
| pb-86         | 86px    |
| pb-87         | 87px    |
| pb-88         | 88px    |
| pb-89         | 89px    |
| pb-90         | 90px    |
| pb-91         | 91px    |
| pb-92         | 92px    |
| pb-93         | 93px    |
| pb-94         | 94px    |
| pb-95         | 95px    |
| pb-96         | 96px    |
| pb-97         | 97px    |
| pb-98         | 98px    |
| pb-99         | 99px    |
| pb-100        | 100px   |

### padding-left and padding-right

| param         | value   | 
| ------------- |:-------:| 
| px-none       | 0       |
| px            | 1px     |
| px-2          | 2px     |
| px-3          | 3px     |
| px-4          | 4px     |
| px-5          | 5px     |
| px-6          | 6px     |
| px-7          | 7px     |
| px-8          | 8px     |
| px-9          | 9px     |
| px-10         | 10px    |
| px-11         | 11px    |
| px-12         | 12px    |
| px-13         | 13px    |
| px-14         | 14px    |
| px-15         | 15px    |
| px-16         | 16px    |
| px-17         | 17px    |
| px-18         | 18px    |
| px-19         | 19px    |
| px-20         | 20px    |
| px-21         | 21px    |
| px-22         | 22px    |
| px-23         | 23px    |
| px-24         | 24px    |
| px-25         | 25px    |
| px-26         | 26px    |
| px-27         | 27px    |
| px-28         | 28px    |
| px-29         | 29px    |
| px-30         | 30px    |
| px-31         | 31px    |
| px-32         | 32px    |
| px-33         | 33px    |
| px-34         | 34px    |
| px-35         | 35px    |
| px-36         | 36px    |
| px-37         | 37px    |
| px-38         | 38px    |
| px-39         | 39px    |
| px-40         | 40px    |
| px-41         | 41px    |
| px-42         | 42px    |
| px-43         | 43px    |
| px-44         | 44px    |
| px-45         | 45px    |
| px-46         | 46px    |
| px-47         | 47px    |
| px-48         | 48px    |
| px-49         | 49px    |
| px-50         | 50px    |
| px-51         | 51px    |
| px-52         | 52px    |
| px-53         | 53px    |
| px-54         | 54px    |
| px-55         | 55px    |
| px-56         | 56px    |
| px-57         | 57px    |
| px-58         | 58px    |
| px-59         | 59px    |
| px-60         | 60px    |
| px-61         | 61px    |
| px-62         | 62px    |
| px-63         | 63px    |
| px-64         | 64px    |
| px-65         | 65px    |
| px-66         | 66px    |
| px-67         | 67px    |
| px-68         | 68px    |
| px-69         | 69px    |
| px-70         | 70px    |
| px-71         | 71px    |
| px-72         | 72px    |
| px-73         | 73px    |
| px-74         | 74px    |
| px-75         | 75px    |
| px-76         | 76px    |
| px-77         | 77px    |
| px-78         | 78px    |
| px-79         | 79px    |
| px-80         | 80px    |
| px-81         | 81px    |
| px-82         | 82px    |
| px-83         | 83px    |
| px-84         | 84px    |
| px-85         | 85px    |
| px-86         | 86px    |
| px-87         | 87px    |
| px-88         | 88px    |
| px-89         | 89px    |
| px-90         | 90px    |
| px-91         | 91px    |
| px-92         | 92px    |
| px-93         | 93px    |
| px-94         | 94px    |
| px-95         | 95px    |
| px-96         | 96px    |
| px-97         | 97px    |
| px-98         | 98px    |
| px-99         | 99px    |
| px-100        | 100px   |

### padding-top and padding-bottom

| param         | value   | 
| ------------- |:-------:| 
| py-none       | 0       |
| py            | 1px     |
| py-2          | 2px     |
| py-3          | 3px     |
| py-4          | 4px     |
| py-5          | 5px     |
| py-6          | 6px     |
| py-7          | 7px     |
| py-8          | 8px     |
| py-9          | 9px     |
| py-10         | 10px    |
| py-11         | 11px    |
| py-12         | 12px    |
| py-13         | 13px    |
| py-14         | 14px    |
| py-15         | 15px    |
| py-16         | 16px    |
| py-17         | 17px    |
| py-18         | 18px    |
| py-19         | 19px    |
| py-20         | 20px    |
| py-21         | 21px    |
| py-22         | 22px    |
| py-23         | 23px    |
| py-24         | 24px    |
| py-25         | 25px    |
| py-26         | 26px    |
| py-27         | 27px    |
| py-28         | 28px    |
| py-29         | 29px    |
| py-30         | 30px    |
| py-31         | 31px    |
| py-32         | 32px    |
| py-33         | 33px    |
| py-34         | 34px    |
| py-35         | 35px    |
| py-36         | 36px    |
| py-37         | 37px    |
| py-38         | 38px    |
| py-39         | 39px    |
| py-40         | 40px    |
| py-41         | 41px    |
| py-42         | 42px    |
| py-43         | 43px    |
| py-44         | 44px    |
| py-45         | 45px    |
| py-46         | 46px    |
| py-47         | 47px    |
| py-48         | 48px    |
| py-49         | 49px    |
| py-50         | 50px    |
| py-51         | 51px    |
| py-52         | 52px    |
| py-53         | 53px    |
| py-54         | 54px    |
| py-55         | 55px    |
| py-56         | 56px    |
| py-57         | 57px    |
| py-58         | 58px    |
| py-59         | 59px    |
| py-60         | 60px    |
| py-61         | 61px    |
| py-62         | 62px    |
| py-63         | 63px    |
| py-64         | 64px    |
| py-65         | 65px    |
| py-66         | 66px    |
| py-67         | 67px    |
| py-68         | 68px    |
| py-69         | 69px    |
| py-70         | 70px    |
| py-71         | 71px    |
| py-72         | 72px    |
| py-73         | 73px    |
| py-74         | 74px    |
| py-75         | 75px    |
| py-76         | 76px    |
| py-77         | 77px    |
| py-78         | 78px    |
| py-79         | 79px    |
| py-80         | 80px    |
| py-81         | 81px    |
| py-82         | 82px    |
| py-83         | 83px    |
| py-84         | 84px    |
| py-85         | 85px    |
| py-86         | 86px    |
| py-87         | 87px    |
| py-88         | 88px    |
| py-89         | 89px    |
| py-90         | 90px    |
| py-91         | 91px    |
| py-92         | 92px    |
| py-93         | 93px    |
| py-94         | 94px    |
| py-95         | 95px    |
| py-96         | 96px    |
| py-97         | 97px    |
| py-98         | 98px    |
| py-99         | 99px    |
| py-100        | 100px   |



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

  .text-navy {
    color: #000080;	
  }
</style>
```