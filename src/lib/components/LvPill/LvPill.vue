<template>
    <div class="lv-pill">
        <div class="lv-pill__icon" v-if="icon">
            <lv-icon :name="icon"/>
        </div>
        <div class="lv-pill__text">
            {{ text }}
        </div>
        <div class="lv-pill__close" v-if="closable">
            <lv-icon name="x" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: null,
        },
        icon: {
            type: String,
            default: null,
        },
        closable: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/variables';
.lv-pill {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    font-size: $font-size-small;
    font-weight: 500;
    background-color: $border-color;
    border-radius: 1rem;
}
</style>