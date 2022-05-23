<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();
</script>

<template>
	<div class="step">{{msg}}</div>
</template>

<style scoped>
.step {
	padding-top: 20px;
}
</style>
