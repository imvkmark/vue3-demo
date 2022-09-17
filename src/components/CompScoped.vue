<template>
    <div class="step">
        {{ msg }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    msg: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.step {
    padding-top: 20px;
    border: 1px solid #30C099;
    color: #30C099;

}
</style>
