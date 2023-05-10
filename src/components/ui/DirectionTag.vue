<script setup>
const props = defineProps(["order"])
const type = props.order.DIRECTION.includes("LONG") ? "success" : "danger"
</script>

<template>
    <c-tag :label="order.DIRECTION" :type="type" />
</template>