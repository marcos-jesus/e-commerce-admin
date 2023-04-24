<template>
  <button type="button" class="btn"
    :style="{ 'background-color': props.property?.background, 'width': props.property?.width, 'height': props.property?.height, 'color': props.property?.color }">
    {{ props.property?.text }}
  </button>
</template>

<style src="./Button.css"></style>

<script setup lang="ts">
import { defineProps as definePropsVue, PropType } from 'vue';

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

</script>