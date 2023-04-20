<template>

    <ElInput
      class="ElInput"
      :type="props.input?.type" 
      :id="props.input?.id" 
      :placeholder="input?.label_name" 
      v-model="text"
    />
    
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { defineProps } from 'vue'

  import { ElInput } from 'element-plus';

  interface InputProps {
    id: string,
    type: string,
    label_name: string,
    label_text: string,
  }

  const props = defineProps({
    input: {
      type: Object as () => InputProps,
      require: true,
    }
  })

  const text = ref('')
</script>

<style scoped src="./Input.css"></style>