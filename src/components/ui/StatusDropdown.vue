<script setup>
    const props = defineProps(["order"])
    function on_change_status() {
        const raw_pnl = ( props.order.LIMIT - props.order.PRICE ) * props.order.QUANTITY
        if (["FILLED", "CLOSED"].includes(props.order.STATUS)) {
            if (props.order.DIRECTION.includes("LONG")) {
                props.order.PNL = raw_pnl.toFixed(2)
            } else {    // SHORT
                props.order.PNL = -1*raw_pnl.toFixed(2)
            }
        } else {
            props.order.PNL = ""
        }
    }
</script>

<template>
    <c-dropdown 
        v-model="order.STATUS" 
        :options="['PENDING', 'FILLED', 'CANCELED', 'CLOSED']" 
        @change="on_change_status" />
</template>