<template>
    <component
        :is="tagName"
        class="lv-heading"
        :class="{
            [`lv-heading--${tagName}`]: tagName,
            'lv-heading--sub': sub,
        }"
    >
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        align: {
            type: String,
            default: 'left',
            validator(value) {
                // The value must match one of these strings
                return ['left', 'center', 'right'].includes(value);
            },
        },
        level: {
            type: [Number, String],
            default: 1,
            validator(value) {
                const number = Number.parseInt(value, 10);
                return number > 0 && number <= 6;
            },
        },
        sub: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        tagName() {
            return `h${this.level}`;
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-heading {
    display: block;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    color: $text-color;
    font-weight: 600;
    font-family: $font-family;

    &--h1 {
        font-size: $font-size-h1;
        line-height: $font-size-h1;
    }
    &--h2 {
        font-size: $font-size-h2;
        line-height: $font-size-h2;
    }
    &--h3 {
        font-size: $font-size-h3;
        line-height: $font-size-h3;
    }
    &--h4 {
        font-size: $font-size-h4;
        line-height: $font-size-h4;
    }
    &--h5 {
        font-size: $font-size-h5;
        line-height: $font-size-h5;
    }
    &--h6 {
        font-size: $font-size-h6;
        line-height: $font-size-h6;
    }
    &--sub {
        color: lighten($text-color, 60);
    }
}
</style>
