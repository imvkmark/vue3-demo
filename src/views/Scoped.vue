<template>
    <div class="step parent">
        <CompScoped msg="Scoped 样式"/>
    </div>
</template>

<script setup lang="ts">
import CompScoped from "@/components/CompScoped.vue";
</script>

<style scoped>
.step {
    padding-top: 10px;
    color: #2B99E1;
}

.parent {
    border: 1px solid #2B99E1;
}
</style>
