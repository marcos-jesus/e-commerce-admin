<template>

  <ElButton 
    :size="button?.size" 
    class="ElButton"
  > 
  {{ props.button?.name }}
  </ElButton>

</template>
<script setup lang="ts">
  import { defineProps, reactive } from 'vue'
  import { ElButton } from 'element-plus';

  interface ButtonProps {
    name: String,
    size: String,
    backgroundColor: String,
  }

  const props = defineProps({
    button: {
      type: Object as () => ButtonProps,
    }
  })

  const styles = reactive({
    backgroundColor: '',
  })


</script>
<style scoped src="./Button.css"></style>
