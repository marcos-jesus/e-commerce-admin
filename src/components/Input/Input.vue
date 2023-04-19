<template>
  <label> {{ input?.label_name }}</label>
  <input :type="props.input?.type" :id="props.input?.id">
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  interface Input {
    id: string,
    type: string,
    label_name: string,
  }

  const props = defineProps({
    input: {
      type: Object as () => Input,
      require: true,
    }
  })

</script>

<style scoped src="./Input.css"></style>