<template>
  <div 
    :class="`${containerSize} container ${border}`" 
    :style="`border-color: ${borderColor}; padding: ${padding ?? (paddingY ?? '0') + ' ' + (paddingX ?? '0')}; padding-left: ${paddingLeft}; padding-right: ${paddingRight}; padding-top: ${paddingTop}; padding-bottom: ${paddingBottom}`"
    @drop="handleDrop" 
    @dragover.prevent
  >
    <template v-if="!localImageSrc">
      <input 
        class="input" 
        type="file" 
        @change="onChange" 
        :accept="mimes"
        :required="required"
        ref="input"
      />
      <button 
        @click.prevent="openInput" 
        :class="`${size} btn`"
        :style="`background: ${background}; color: ${textColor}; font-size: ${fontSize}; border-radius: ${bgRounded}`"
      >
        {{ title }}
      </button>
    </template>

    <template v-else>
      <img :src="localImageSrc" class="w-full image" :style="`border-radius: ${imageRounded}`" />
      <div 
        @click="deleteFile" 
        class="close"
        ref="close"
      >
        <div class="close-before" :style="`background: ${closeBtnColor}`" ref="closeBefore"></div>
        <div class="close-after" :style="`background: ${closeBtnColor}`" ref="closeAfter"></div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const emit = defineEmits()

const props = defineProps({
  title: { 
    type: String, 
    default: 'Drop here' 
  }, 
  required: { 
    type: Boolean, 
    default: false 
  },
  fontSize: { 
    type: String, 
    default: '' 
  },
  size: { 
    type: String, 
    default: '' 
  },
  background: { 
    type: String, 
    default: '' 
  },
  textColor: { 
    type: String, 
    default: '' 
  },
  border: { 
    type: String, 
    default: '' 
  },
  borderColor: { 
    type: String, 
    default: '' 
  },
  mimes: { 
    type: String, 
    default: '.jpg,.png' 
  },
  imageRounded: { 
    type: String, 
    default: '' 
  },
  closeBtnColor: { 
    type: String, 
    default: '' 
  },
  closeBtn: { 
    type: String, 
    default: '' 
  },
  bgRounded: { 
    type: String, 
    default: '' 
  },
  padding: { 
    type: String, 
    default: '' 
  },
  paddingLeft: { 
    type: String, 
    default: '' 
  },
  paddingRight: { 
    type: String, 
    default: '' 
  },
  paddingTop: { 
    type: String, 
    default: '' 
  },
  paddingBottom: { 
    type: String, 
    default: '' 
  },
  paddingX: { 
    type: String, 
    default: '' 
  },
  paddingY: { 
    type: String, 
    default: '' 
  },
  imageSrc: { 
    type: String, 
    default: '' 
  }
})

const file = ref(null)
const input = ref(null)
const localImageSrc = ref(props.imageSrc)

watch(() => props.imageSrc, (val) => {
  localImageSrc.value = val
})

const containerSize = computed(() => {
  return 'w' + props.size.slice(4)
})

// methods

const onChange = (event) => {
  file.value = event.target.files[0]
  emit('update:file', [file.value])
  createImage()
}

const openInput = () => {
  input.value.click()
}

const createImage = () => {
  const reader = new FileReader()
  reader.onload = (e) => {
    localImageSrc.value = e.target.result
    emit('update:imageSrc', e.target.result)
  }
  if (file.value) {
    reader.readAsDataURL(file.value)
  }
}

const deleteFile = () => {
  emit('update:file', [])
  emit('update:imageSrc', '')
  localImageSrc.value = ''
  file.value = null
}

const handleDrop = (event) => {
  event.preventDefault()
  file.value = event.dataTransfer.files[0]
  createImage()
  emit('update:file', [file.value]) 
}
</script>

<style scoped>
@import './../assets/css/style.css';
</style>