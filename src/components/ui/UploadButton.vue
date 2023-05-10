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
    function upload() {
        axios.request({
            url: "https://api.github.com/gists/" + "aaeafd85c2272acdcbce138cd11338f1",
            method: "PATCH",
            headers: {
                "Accept"                : "application/vnd.github+json",
                "Authorization"         : "Bearer " + "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",
                "X-GitHub-Api-Version"  : "2022-11-28"
            },
            data: {
                "description": "Scalper Log",
                "public": false,
                "files": {
                    "ScalperLog.json": {
                        "content": JSON.stringify(props.data.orders, null, 4),
                    }
                }
            }
        })
        .then(response => console.log(response))
    }
</script>

<template>
    <c-button type="primary" @click="upload">Upload</c-button>
</template>