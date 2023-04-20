<template>
  <div class="ElInput">
    <ElInput :type="props.input?.type" :id="props.input?.id" :placeholder="input?.label_name" v-model="text"></ElInput>
    <ElButton> Confirmar</ElButton>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import { ref } from 'vue';

  import { ElButton } from 'element-plus';
  import { ElInput } from 'element-plus';

  interface Input {
    id: string,
    type: string,
    label_name: string,
    label_text: string,
  }

  const props = defineProps({
    input: {
      type: Object as () => Input,
      require: true,
    }
  })

  const text = ref('')

</script>

<style scoped src="./Input.css"></style>