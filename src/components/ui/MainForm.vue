<script setup>
    /**
     * data <- {
     *      amount: Float
     *      profit: Float
     *      direction: String
     *      orders: Order[]
     * }
     */
    const props = defineProps(["data"])
</script>

<template>
    <c-form>
        <c-text-input v-model="data.amount" label="Amount" prefix="$"/> 
        <c-text-input v-model="data.profit" label="Profit" prefix="%"/>
    </c-form>
</template>