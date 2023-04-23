<template>
    <div class="divMain">
        <div class="divTitle">
            <h1>Entrar</h1>
        </div>
        <div class="divInput">
            <p>Endereço de e-mail</p>
            <InputIcon labelText="Digite seu email" iconFont="phone" />

        </div>
    </div>
</template>


<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import InputIcon from '../../components/Input/InputIcon.vue'
import { defineProps } from 'vue'
const defineProp = defineProps({

    props: {
        labelText: {
            type: String,
            default: ''
        },
        iconFont: {
            type: String,
            default: ''
        }
    },

})


</script>
<style scoped  src="./Login.scss"></style>

