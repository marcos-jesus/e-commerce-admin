<template>
  <div class="inputContainer">
    <fa :icon="props.icon?.iconFont" class="iconeEmail" size="2x" color="red" />
    <label class="placeholder"> {{ props.icon?.labelText }}</label>
    <input type="text" id="txtEmail"/>
  </div>
</template>
<style src="./InputIcon.css"></style>

<script setup lang="ts">
  import { defineProps as definePropsVue, PropType } from 'vue';

  interface iconProps {
    labelText: string | null,
    iconFont: Array<string | null>
  }
    
  const props = definePropsVue({
    icon: Object as PropType<iconProps>
  })

  /*
  
    O código de cima está fazendo isso por baixo dos panos, por causa do TS.

    const props = defineProps({...})

    const props = defineProps({
      icon: {
        type: Object as () => iconProps
      }
    })
  */
</script>




