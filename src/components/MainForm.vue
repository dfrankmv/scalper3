<template>
    <el-form label-position="left" label-width="80px">
        <el-form-item label="Amount">
            <el-input v-model="model.amount">
                <template #prefix>
                    <el-icon>$</el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item label="Profit">
            <el-input v-model="model.profit">
                <template #prefix>
                    <el-icon>%</el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-row justify="space-between">
            <el-button-group>
                <el-button type="success" @click="setaction('long')">
                    <el-icon class="el-icon--left"><TopRight /></el-icon>Long
                </el-button>
                <el-button type="success" @click="setaction('avglong')">
                    <el-icon><DCaret /></el-icon>
                </el-button>
                <el-button type="success" @click="setaction('xlong')">
                    <el-icon><Close /></el-icon>
                </el-button>
            </el-button-group>
            <el-button-group>
                <el-button type="danger"  @click="setaction('xshort')">
                    <el-icon><Close /></el-icon>
                </el-button>
                <el-button type="danger"  @click="setaction('avgshort')">
                    <el-icon><DCaret /></el-icon>
                </el-button>
                <el-button type="danger"  @click="setaction('short')">
                    <el-icon class="el-icon--left"><BottomRight /></el-icon>Short
                </el-button>
            </el-button-group>
        </el-row>
    </el-form>
</template>

<script>
export default {
    props: {
        model: { default: {
            amount: null,
            profit: null,
            action: null,
        }}
    },
    methods: {
        setaction(action) {
            this.model.action = action
        }
    }
}
</script>