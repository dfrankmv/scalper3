<script setup>
    import {ref} from 'vue'
    /**
     * data <- {
     *      amount: Float
     *      profit: Float
     *      direction: String
     *      orders: Order[]
     * }
     */
    const props = defineProps(["data"])
    const visible = ref(false)
</script>

<template>
    <c-button @click="visible = true"><IconCloudFill /></c-button>
    <c-cloud-modal :data="data" :visible="visible" @close="visible = false"/>
</template>