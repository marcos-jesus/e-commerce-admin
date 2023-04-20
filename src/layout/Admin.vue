<template>
  <h1>Admin Layout</h1>
  <Input :input="dataName"/>
  <Input :input="dataProduto"/>
  <Input :input="dataQuantidade"/>
  <Input :input="dataEmail"/>
  <Button :button="dataButtonAdmin" />
  <Button :button="dataButtonCliente" />
</template>

<script setup>
  import { reactive } from 'vue';
  import Input from '@/components/Input/Input.vue'
  import Button from '@/components/Button/Button.vue'

  const dataName = reactive({
    id: 'name',
    type: 'text',
    label_name: 'Nome',
    label_text: ''
  })
  
  const dataProduto = reactive({
    id: 'produto',
    type: 'text',
    label_name: 'Produto',
    label_text: ''
  })

  const dataEmail = reactive({
    id: 'email',
    type: 'email',
    label_name: 'Email',
    label_text: ''
  })

  const dataQuantidade = reactive({
    id: 'quantidade',
    type: 'number',
    label_name: 'Quantidade',
    label_text: ''
  })

  const dataButtonAdmin = reactive({
    size: 'large',
    name: 'Cadastrar',
    backgroundColor: ''
  })

  const dataButtonCliente = reactive({
    size: 'large',
    name: 'Confirmar'
  })

</script>

<style scoped src="./Admin.css"></style>