<template>
  <div class="inputContainer">
    <fa :icon="props.property?.iconFont" class="iconeEmail" size="2x" :padding="props.property?.iconColor" />
    <input type="text" id="txtEmail" :placeholder="props.property?.labelText" />
  </div>
</template>
<style src="./InputIcon.css"></style>

<script setup lang="ts">
import { defineProps as definePropsVue, PropType } from 'vue';

interface props {
  labelText: string | null,
  iconFont: Array<string | null>
  iconColor: string | null
}

const props = defineProps({
  property: Object as PropType<props>
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




