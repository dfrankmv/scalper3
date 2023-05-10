<script setup>
    import axios from 'axios'
    /**
     * data <- {
     *      amount: Float
     *      profit: Float
     *      direction: String
     *      orders: Order[]
     * }
     */
    const props = defineProps(["data"])
    const emit = defineEmits(["downloaded"])
    function restore() {
        axios.request({
            url: "https://api.github.com/gists/" + "aaeafd85c2272acdcbce138cd11338f1",
            method: "GET",
            headers: {
                "Accept"                : "application/vnd.github+json",
                "Authorization"         : "Bearer " + "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",
                "X-GitHub-Api-Version"  : "2022-11-28"
            }
        })
        .then(response => {
            const orders_dump = response.data.files["ScalperLog.json"].content
            emit("downloaded", JSON.parse(orders_dump))
        })
    }
</script>

<template>
    <c-button type="info" @click="restore">Download & Restore</c-button>
</template>