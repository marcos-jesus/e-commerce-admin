<template>
    <div class="divMain">
        <div class="divInput">
            <div>
                <h1>Entrar</h1>
            </div>
            <p>Endereço de e-mail</p>
            <InputIcon :property="iconInputEmail" />
        </div>
        <div class="divInput">
            <p>Endereço de e-mail</p>
            <InputIcon :property="iconInputPassword" />
            <Button :property="dataButtonAdmin" />
        </div>
    </div>
</template>

<script setup>
import InputIcon from '@/components/Input/InputIcon.vue'
import Button from '@/components/Button/Button.vue'
import { reactive } from 'vue'


const dataButtonAdmin = reactive({
    text: 'Login',
    color: 'red',
    width: '100%',
    height: '100px'
})
const iconInputEmail = reactive({
    iconFont: ['fa', 'phone'],
    labelText: 'Digite seu e-mail',
    iconColor: "white",
})
const iconInputPassword = reactive({
    iconFont: ['fa', 'envelope'],
    labelText: 'Digite sua senha',
    iconColor: "white",
})


</script>
<style scoped src="./Login.scss"></style>

