<template>
  <button 
    type="button" 
    class="btn"
    :style="btnStyle"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    {{ props.property?.text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps as definePropsVue, PropType, ref, computed } from 'vue';

interface propsBtn {
  text: string | null,
  color: string | null,
  background: string | null,
  width: string | null,
  height: string | null
}

const props = defineProps({
  property: Object as PropType<propsBtn>
})

const hover = ref(false)

const btnStyle = computed(() => {
  return {
    'background-color': hover.value ? 'yellow' :props.property?.background?.toString(),
    'width': props.property?.width, 
    'height': props.property?.height, 
    'color': props.property?.color  
  }
})
</script>

<style src="./Button.css"></style>