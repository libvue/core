<template>
    <div class="lv-pill" v-bind="$attrs">
        <div class="lv-pill__icon" v-if="icon">
            <lv-icon :name="icon" :size="14"/>
        </div>
        <div class="lv-pill__text">
            {{ text }}
        </div>
        <div class="lv-pill__close" v-if="closable">
            <lv-icon name="x" :size="14" />
        </div>
    </div>
</template>

<script>
import propColorMixin from "../../mixins/propColorMixin";
import propSizeMixin from "../../mixins/propSizeMixin";

export default {
    mixins: [propColorMixin, propSizeMixin],
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
    display: inline-flex;
    font-size: $font-size;
    line-height: $font-size;
    font-weight: 500;
    background-color: $border-color;
    border-radius: 1rem;

    &__icon {
        padding: 0.5rem 0 0.5rem 0.5rem;
        font-size: $font-size;
        line-height: $font-size;
        display: flex;
        align-items: center;
    }
    &__text {
        padding: 0.5rem 0.5rem;
        display: flex;
        align-items: center;
    }
    &__close {
        padding: 0.5rem 0.5rem 0.5rem 0.25rem;
        display: flex;
        background-color: rgba(0,0,0,0.05);
        align-items: center;
        border-radius: 0 1rem 1rem 0;
        cursor: pointer;
        &:hover {
            background-color: rgba(0,0,0,0.1);
        }
    }
}
</style>