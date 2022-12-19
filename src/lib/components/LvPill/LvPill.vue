<template>
    <div class="lv-pill" v-bind="$attrs" :class="classObject">
        <div v-if="icon" class="lv-pill__icon">
            <lv-icon :name="icon" :size="14" />
        </div>
        <div class="lv-pill__text">
            <div class="lv-pill__prefix" v-if="prefix">{{ prefix }}</div>
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
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
    components: { LvIcon },
    mixins: [propColorMixin('solid-default'), propSizeMixin],
    props: {
        prefix: {
            type: String,
            default: null,
        },
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
    emits: ['close'],
    computed: {
        classObject() {
            return {
                [`lv-pill--color-${this.color}`]: true,
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
@import '../../scss/mixins/colorMixin';

.lv-pill {
    display: inline-flex;
    border-radius: 1rem;
    font-weight: 500;
    font-size: var(--font-size);
    line-height: var(--font-size);

    &__icon {
        display: flex;
        align-items: center;
        padding: 0.5rem 0 0.5rem 0.625rem;
        font-size: var(--font-size);
        line-height: var(--font-size);
    }
    &__prefix {
        font-weight: 600;
        margin-right: .5rem;
    }
    &__text {
        display: flex;
        align-items: center;
        padding: 0.5rem 0.625rem;
    }

    &__close {
        display: flex;
        align-items: center;
        cursor: pointer;
        border-radius: 0 1rem 1rem 0;
        background-color: rgba(255, 255, 255, 0.05);
        padding: 0.5rem 0.5rem 0.5rem 0.25rem;
        margin-left: -.25rem;

        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
    }

    @include color-mixin;
}
</style>
