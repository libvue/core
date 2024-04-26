<template>
    <div class="lv-pill" v-bind="$attrs" :class="classObject">
        <div v-if="icon" class="lv-pill__icon">
            <lv-icon :name="icon" />
        </div>
        <div class="lv-pill__text">
            <div v-if="prefix" class="lv-pill__prefix">{{ prefix }}</div>
            {{ text }}
        </div>
        <div v-if="closable" class="lv-pill__close" tabindex="0" @click="onClickClose" @keydown.enter.space="onClickClose">
            <lv-icon name="x" />
        </div>
    </div>
</template>

<script>
import propColorMixin from '../../mixins/propColorMixin';
import propSizeMixin from '../../mixins/propSizeMixin';
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
    components: { LvIcon },
    mixins: [propColorMixin('solid-default'), propSizeMixin()],
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
                [`lv-pill--size-${this.size}`]: true,
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
@import '../../scss/mixins/sizeMixin';

.lv-pill {
    display: inline-flex;
    border-radius: 2rem;
    font-weight: 500;
    font-size: var(--font-size);
    line-height: var(--line-height);
    flex-shrink: 0;

    &__icon {
        display: flex;
        align-items: center;
        padding-right: 0 !important;
        font-size: var(--font-size);
        line-height: var(--line-height);
    }
    &__prefix {
        font-weight: 600;
        margin-right: .5rem;
    }
    &__text {
        display: flex;
        align-items: center;
        padding: 0.5rem 0.625rem;
        margin: 0 2px;
    }

    &__close {
        display: flex;
        align-items: center;
        cursor: pointer;
        border-radius: 0 1rem 1rem 0;
        background-color: rgba(0, 0, 0, 0.025);
        padding: 0.5rem 0.5rem 0.5rem 0.25rem;

        &:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
    }

    @include color-mixin;
    @include size-mixin('.lv-pill__text');
    @include size-mixin('.lv-pill__icon');
    @include size-mixin('.lv-pill__close');
}
</style>