<template>
    <div class="step parent">
        <button @click="goRouteMap">点击携带隐形参数到 RouteMap</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter()
const goRouteMap = () => {
    router.push({
        name: 'route-map',
        params: {
            p: 'map',
            append: ['携带的隐形参数']
        }
    })
}
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
