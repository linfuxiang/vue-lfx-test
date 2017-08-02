<template>
    <div>
        <div class="title">{{ title }}</div>
    </div>
</template>
<script>
export default {
    name: 'vue-lfx-test',
    data() {
        return {
        }
    },
    props: {
        title: {
            type: String,
            default: '我一个普通的插件'
        },
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
    .title {
        border: 1px solid #ccc;
        height: 30px;
        width: 100px;
    }
</style>
