<template>
    <div class="lv-notice" :class="classObject" v-bind="$attrs" role="alert">
        <div v-if="icon" class="lv-notice__icon">
            <lv-icon class="lv-notice__svg" :name="icon" />
        </div>
        <div class="lv-notice__content">
            <slot>{{ text }}</slot>
        </div>
        <div v-if="showButton" class="lv-notice__button">
            <lv-button :color="buttonColor" :label="buttonText" size="small" @click="onClickButton" />
        </div>
    </div>
</template>

<script>
import propColorMixin from '../../mixins/propColorMixin';
import LvIcon from '../LvIcon/LvIcon.vue';
import LvButton from "../LvButton/LvButton.vue";

export default {
    components: {
        LvButton,
        LvIcon,
    },
    mixins: [propColorMixin('solid-dimmed-default')],
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
    },
    emits: ['click-button'],
    computed: {
        classObject() {
            return {
                [`lv-notice--color-${this.color}`]: true,
            };
        },
    },
    methods: {
        onClickButton() {
            this.$emit('click-button');
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
        padding: 1rem 0 1rem 1rem;
        font-size: var(--font-size);
    }
    &__content {
        flex-grow: 1;
        padding: 1rem;
    }
    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        padding-right: 1rem;
    }

    @include color-mixin;
}
</style>
