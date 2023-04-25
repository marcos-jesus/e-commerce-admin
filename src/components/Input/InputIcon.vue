<template>
  <div class="inputContainer">
    <fa :icon="props.property?.iconFont" class="iconeEmail" size="2x" :padding="props.property?.iconColor"/>
    <input 
      id="txtEmail" 
      :type="props.property?.type" 
      :placeholder="props.property?.labelText"
      v-model="model.value"
    />
  </div>
</template>
<style src="./InputIcon.css"></style>

<script setup lang="ts">
  import { defineProps as definePropsVue, PropType, computed, ref} from 'vue'

  interface props {
    type: string | null
    labelText: string | null,
    iconFont: Array<string | null>
    iconColor: string | null
    value: string | null
  }


  const props = defineProps({
    property: Object as PropType<props>,
  })

  const model = computed(() => {
    const value = ref(props.property?.value?.valueOf()) 
    return value
  })
    
</script>