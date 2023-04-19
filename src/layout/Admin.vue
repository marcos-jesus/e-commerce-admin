<template>
  <h1>Admin Layout</h1>
  <Input :input="dataName" />
  <Input :input="dataProduto" />
  <Input :input="dataQuantidade"/>
</template>

<script setup>
  import { reactive } from 'vue';
  import Input from '@/components/Input/Input.vue'

  const dataName = reactive({
    id: 'name',
    type: 'text',
    label_name: 'Nome'
  })
  
  const dataProduto = reactive({
    id: 'produto',
    type: 'text',
    label_name: 'Produto'
  })

  const dataQuantidade = reactive({
    id: 'quantidade',
    type: 'text',
    label_name: 'Quantidade'
  })

</script>

<style scoped src="./Admin.css"></style>