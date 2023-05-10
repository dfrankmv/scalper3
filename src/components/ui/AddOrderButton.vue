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
    <c-button @click="visible = true"><IconPlus /></c-button>
    <c-add-modal :data="data" :visible="visible" @submit="visible = false" @close="visible = false"/>
</template>