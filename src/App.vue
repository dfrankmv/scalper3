<template>
    <c-header :data="data" />
    <c-main-form :data="data" />
    <c-main-buttons :data="data" />
    <c-results :data="data" />
</template>

<script>
import {reactive} from 'vue'
export default {
    data() { return {
        data: reactive({
            amount: null,
            profit: null,
            direction: null,
            orders: [],
        })
    }},
}
</script>