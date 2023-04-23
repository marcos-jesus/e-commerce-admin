<template>
    <div class="divMain">
        <div class="divTitle">
            <h1>Entrar</h1>
        </div>
        <div class="divInput">
            <p>Endereço de e-mail</p>
            <InputIcon :property="iconInput" />
        </div>
        <div class="divInput">
            <p>Endereço de e-mail</p>
            <InputIcon :property="iconInput2" />
        </div>
    </div>
</template>

<script setup>
import InputIcon from '@/components/Input/InputIcon.vue'

import { reactive } from 'vue'


const iconInput = reactive({
    iconFont: ['fa', 'phone'],
    labelText: 'Digite seu e-mail',
    iconColor: "white",
})
const iconInput2 = reactive({
    iconFont: ['fa', 'envelope'],
    labelText: 'Digite sua senha',
    iconColor: "white",
})


</script>
<style scoped src="./Login.scss"></style>

