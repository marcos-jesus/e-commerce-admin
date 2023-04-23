<template>
  <div class="inputContainer">
    <fa :icon="props.icon?.iconFont" class="iconeEmail" size="2x" color="red" />
    <label class="placeholder"> {{ props.icon?.labelText }}</label>
    <input type="text" id="txtEmail"/>
  </div>
</template>
<style src="./InputIcon.css"></style>

<script setup lang="ts">

  import { defineProps } from 'vue'

  interface iconProps {
    labelText: String,
    iconFont: Array<string>
  }

  const props = defineProps({
    icon: {
      type: Object as () => iconProps,
    },
  })

</script>




