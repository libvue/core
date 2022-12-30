<template>
    <div class="lv-notice" :class="classObject" v-bind="$attrs" role="alert">
        <div v-if="icon" class="lv-notice__icon">
            <lv-icon class="lv-notice__svg" :name="icon" />
        </div>
        <div class="lv-notice__content">
            <slot>{{ text }}</slot>
        </div>
        <div v-if="showButton" class="lv-notice__button">
            <lv-button :color="buttonColor" :label="buttonText" :size="size === 'tiny' || size === 'small' ? 'tiny' : 'small'" @click="onClickButton" />
        </div>
    </div>
</template>

<script>
import propColorMixin from '../../mixins/propColorMixin';
import propSizeMixin from '../../mixins/propSizeMixin';
import LvIcon from '../LvIcon/LvIcon.vue';
import LvButton from "../LvButton/LvButton.vue";

export default {
    components: {
        LvButton,
        LvIcon,
    },
    mixins: [propColorMixin('solid-dimmed-default'), propSizeMixin()],
    props: {
        icon: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        },
        showButton: {
            type: Boolean,
            default: false,
        },
        buttonText: {
            type: String,
            default: 'Close',
        },
        buttonColor: {
            type: String,
            default: 'solid-default',
        },
        inline: {
            type: Boolean,
            default: false,
        }
    },
    emits: ['click-button'],
    computed: {
        classObject() {
            return {
                [`lv-notice--color-${this.color}`]: true,
                [`lv-notice--size-${this.size}`]: true,
                [`lv-notice--inline`]: !!this.inline,
            };
        },
    },
    methods: {
        onClickButton(e) {
            this.$emit('click-button', e);
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/mixins/colorMixin';
@import '../../scss/mixins/sizeMixin';

.lv-notice {
    display: flex;
    position: relative;
    justify-content: flex-start;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    width: 100%;
    color: var(--text-color);

    &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 0 !important;
        font-size: var(--font-size);
    }
    &__content {
        display: flex;
        align-items: center;
        flex-grow: 1;
    }
    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
    }

    &--inline {
        display: inline-flex;
        width: auto;
    }

    @include color-mixin;
    @include size-mixin('.lv-notice__content');
    @include size-mixin('.lv-notice__icon');
    @include size-mixin('.lv-notice__button');
}
</style>
