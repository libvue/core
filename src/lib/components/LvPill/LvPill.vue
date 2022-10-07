<template>
    <div class="lv-pill" v-bind="$attrs" :class="classObject">
        <div v-if="icon" class="lv-pill__icon">
            <lv-icon :name="icon" :size="14" />
        </div>
        <div class="lv-pill__text">
            {{ text }}
        </div>
        <div v-if="closable" class="lv-pill__close" @click="onClickClose">
            <lv-icon name="x" :size="14" />
        </div>
    </div>
</template>

<script>
import propColorMixin from '../../mixins/propColorMixin';
import propSizeMixin from '../../mixins/propSizeMixin';

export default {
    mixins: [propColorMixin('default', 'solid'), propSizeMixin],
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
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-pill--color-${this.colorType}-${this.color}`]: true,
            };
        },
    },
    methods: {
        onClickClose() {
            this.$emit('close');
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/mixins/colorMixin';

.lv-pill {
    display: inline-flex;
    font-size: $font-size;
    line-height: $font-size;
    font-weight: 500;
    border-radius: 1rem;

    &__icon {
        padding: 0.5rem 0 0.5rem 0.625rem;
        font-size: $font-size;
        line-height: $font-size;
        display: flex;
        align-items: center;
    }

    &__text {
        padding: 0.5rem 0.625rem;
        display: flex;
        align-items: center;
    }

    &__close {
        padding: 0.5rem 0.5rem 0.5rem 0.25rem;
        display: flex;
        background-color: rgba(0, 0, 0, 0.1);
        align-items: center;
        border-radius: 0 1rem 1rem 0;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.15);
        }
    }

    @include color-mixin;
}
</style>
