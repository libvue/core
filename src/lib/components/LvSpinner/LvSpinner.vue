<template>
    <div class="lv-spinner">
        <lv-icon :size="size" class="lv-spinner__icon" name="loader-2"/>
    </div>
</template>

<script>
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
    components: { LvIcon },
    props: {
        size: {
            type: Number,
            default: 24,
        }
    },
    computed: {
        sizeInPixels() {
            return `${this.size}px`;
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/animations/animations';

.lv-spinner {
    display: inline-flex;
    &__icon {
        animation: 1s rotate-cw infinite linear;
    }
}
</style>
