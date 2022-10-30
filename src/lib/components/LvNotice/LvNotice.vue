<template>
    <div class="lv-notice" :class="classObject" v-bind="$attrs" role="alert">
        <lv-icon v-if="icon" class="lv-notice__icon" :name="icon" />
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
import propSizeMixin from '../../mixins/propSizeMixin';
import LvIcon from '../LvIcon/LvIcon.vue';

export default {
    components: {
        LvIcon,
    },
    mixins: [propColorMixin('solid-light-default'), propSizeMixin()],
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
                [`lv-notice--size-${this.size}`]: true,
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
    align-items: center;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    width: 100%;

    &__icon {
        flex-shrink: 0;
        margin-right: 10px;
    }

    &__button {
        margin-left: auto;
        padding-left: 1rem;
    }

    @include color-mixin;
    @include size-mixin;
}
</style>
