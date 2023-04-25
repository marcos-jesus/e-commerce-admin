<template>
  <div style="display: flex;align-items: center;justify-content: center;">
    <fa :icon="props.property?.iconFont" class="btnIcon" size="2x" />
    <button type="button" class="btn" :style="btnStyle" @mouseover="hover = true" @mouseout="hover = false">
      {{ props.property?.text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps as definePropsVue, PropType, ref, computed } from 'vue';

interface propsBtn {
  text: string | null,
  color: string | null,
  background: string | null,
  width: string | null,
  height: string | null,
  iconFont: Array<string | null>
}

const props = defineProps({
  property: Object as PropType<propsBtn>
})

const hover = ref(false)

const btnStyle = computed(() => {
  return {
    'background-color': hover.value ? '#ff0030' : props.property?.background,
    'width': props.property?.width,
    'height': props.property?.height,
    'color': hover.value ? '#white' : props.property?.color
  }
})
</script>

<style src="./Button.css"></style>