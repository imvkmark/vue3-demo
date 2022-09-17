<template>
    <div class="step parent">
        参数 p : {{ p }}
        参数 append : {{ append }}
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { get } from "lodash-es"

const router = useRouter();
const p = get(router.currentRoute.value.params, 'p')
const append = get(router.currentRoute.value.params, 'append')
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
