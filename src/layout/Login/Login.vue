<template>
    <div class="divMain">
        <div class="divMainInput">
            <div class="divInput">
                <div style="display: flex;align-items: center;justify-content: center;">
                    <img style="width: 500px;" src="./estilodev.png">
                </div>
                <div>
                    <h1>Entrar</h1>
                </div>
                <p>Endereço de e-mail</p>
                <InputIcon :property="iconInputEmail" />
            </div>
            <div class="divInput">
                <p>Endereço de e-mail</p>
                <InputIcon :property="iconInputPassword" />
                <div style="margin-top: 40px">
                    <Button :property="dataButtonAdmin" />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import InputIcon from '@/components/Input/InputIcon.vue'
import Button from '@/components/Button/Button.vue'
import { reactive } from 'vue'


const dataButtonAdmin = reactive({
    text: 'Entrar',
    background: '#db1313',
    color: '#ffffff',
    width: '100%',
    height: '80px',
    iconFont: ['fa', 'door-open'],
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

