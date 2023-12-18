<template>
    <span class="lv-avatar-group" :class="classObject">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        distance: {
            type: String,
            default: '-1rem'
        },
    },
    computed: {
        classObject() {
            return {};
        },
    },
};
</script>

<style lang="scss">
.lv-avatar-group {
    display: flex;
    > *:not(:first-child) {
        margin-left: v-bind(distance);
    }
}
</style>
