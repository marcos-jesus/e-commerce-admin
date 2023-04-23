<template>
    <div class="inputContainer">
        <font-awesome-icon :icon="iconFont" class="iconeEmail" size="2x" color="red" />
        <input type="text" id="txtEmail" />
        <label class="placeholder" style="color: white">{{ labelText }}</label>
    </div>
</template>
<style src="./InputIcon.css"></style>

<script >

export default {
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
}

</script>




