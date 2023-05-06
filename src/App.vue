<template>
    <h4>Scalper</h4>
    <main-form :model="data.cmd" />
    <pre><code>{{ JSON.stringify(data) }}</code></pre>
</template>

<script>
import MainForm from './components/MainForm.vue';

export default {
    components: {
        MainForm,
    },
    data() { return {
        data: {
            cmd: {
                amount: null,
                profit: null,
            },
            orders: [],
        }
    }}
}
</script>