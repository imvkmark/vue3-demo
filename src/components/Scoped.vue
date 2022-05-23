<template>
	<div class="step">{{msg}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();
</script>

<style scoped>
.step {
	padding-top: 20px;
}
</style>
