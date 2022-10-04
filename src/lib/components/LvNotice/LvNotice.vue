<template>
    <div class="lv-notice" :class="classObject" v-bind="$attrs">
        <lv-icon class="lv-notice__icon" :name="icon" v-if="icon" />
        <div class="lv-notice__content">
            <slot>{{ text }}</slot>
        </div>
        <div class="lv-notice__button" v-if="showButton">
            <lv-button :color="buttonColor" :label="buttonText" :color-type="buttonColorType" size="small" @click="onClickButton" />
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
    mixins: [propColorMixin('light-default', 'solid'), propSizeMixin()],
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
            default: 'default',
        },
        buttonColorType: {
            type: String,
            default: 'solid',
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-notice--color-${this.colorType}-${this.color}`]: true,
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
@import '../../scss/variables';
@import '../../scss/mixins/colorMixin';
@import '../../scss/mixins/sizeMixin';

.lv-notice {
    width: 100%;
    border-radius: $border-radius;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    border: 1px solid transparent;

    &__icon {
        margin-right: 10px;
        flex-shrink: 0;
    }

    &__button {
        margin-left: auto;
        padding-left: 1rem;
    }

    @include color-mixin;
    @include size-mixin;
}
</style>
