<template>
    <form method="post">
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

                    <InputIcon :property="iconInputEmail" :value="modelInputEmail" />
                </div>
                <div class="divInput">
                    <p>Senha</p>
                    <InputIcon :property="iconInputPassword" :value="modelInputPassword" />
                    <div style="margin-top: 40px">
                        <Button @click="entrarLogin" :property="dataButtonAdmin" />
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
  
<script setup>
import InputIcon from '@/components/Input/InputIcon.vue'
import Button from '@/components/Button/Button.vue'
import axios from 'axios'
import { reactive, ref } from 'vue'

/*
    async function entrarLogin() {
        try {
            const resposta = await axios.post("http://localhost:3305/login", {
                email: objValores.email,
                password: objValores.password
            });

            console.log(resposta)


        } catch (erro) {
            console.error("Erro: ", erro);
        }
    }

*/
const dataButtonAdmin = reactive({
    text: 'Entrar',
    background: '#db1313',
    color: '#ffffff',
    width: '100%',
    height: '80px',
    iconFont: ['fa', 'door-open'],
})
const iconInputEmail = reactive({
    type: 'text',
    iconFont: ['fa', 'phone'],
    labelText: 'Digite seu e-mail',
    iconColor: "white",
    value: '',
})
const iconInputPassword = reactive({
    type: 'password',
    iconFont: ['fa', 'envelope'],
    labelText: 'Digite sua senha',
    iconColor: "white",
    value: ''
})

</script>
  
  
<style scoped src="./Login.scss"></style>