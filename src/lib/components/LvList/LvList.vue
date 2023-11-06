<template>
    <component :is="ordered ? 'ol' : 'ul'" class="lv-list">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        ordered: {
            type: Boolean,
            default: false,
        }
    }
};
</script>

<style lang="scss">
.lv-list {
    margin: 0;
    padding-left: 1rem;
}
</style>
