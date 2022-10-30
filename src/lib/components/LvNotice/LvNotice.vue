<template>
    <div class="lv-notice" :class="classObject" v-bind="$attrs" role="alert">
        <div v-if="icon" class="lv-notice__icon">
            <lv-icon class="lv-notice__svg" :name="icon" />
        </div>
        <div class="lv-notice__content">
            <slot>{{ text }}</slot>
        </div>
        <div v-if="showButton" class="lv-notice__button">
            <lv-button
                :color="buttonColor"
                :label="buttonText"
                size="small"
                @click="onClickButton"
            />
        </div>
    </div>
</template>

<script>
import propColorMixin from '../../mixins/propColorMixin';
import LvIcon from '../LvIcon/LvIcon.vue';

export default {
    components: {
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
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    color: var(--text-color);
    width: 100%;
    justify-content: flex-start;

    &__icon {
        display: flex;
        font-size: var(--font-size);
        padding: 1rem 0 1rem 1rem;
        align-items: center;
        justify-content: center;
    }
    &__content {
        padding: 1rem;
        flex-grow: 1;
    }
    &__button {
        margin-left: auto;
        padding-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @include color-mixin;
}
</style>
