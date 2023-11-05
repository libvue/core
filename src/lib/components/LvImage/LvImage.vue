<template>
    <figure class="lv-image" :class="classObject">
        <img class="lv-image__image" :src="src" />
        <figcaption class="lv-image__caption" v-if="caption">{{ caption }}</figcaption>
    </figure>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: 'auto'
        },
        caption: {
            type: String,
            default: null,
        },
        captionDistance: {
            type: String,
            default: '.5rem',
        },
        captionAlign: {
            type: String,
            default: 'center',
            validator: (val) => ['left', 'center', 'right'].includes(val)
        },
        objectFit: {
            type: String,
            default: 'inherit'
        },
        objectPosition: {
            type: String,
            default: 'center'
        },
        rounded: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        classObject() {
            return {
                'lv-image--rounded': !!this.rounded
            }
        }
    }
};
</script>

<style lang="scss">
.lv-image {
    $self: &;
    max-width: 100%;
    padding: 0;
    margin: 0;
    line-height: 0;

    &__image {
        height: v-bind(height);
        width: v-bind(width);
        max-width: 100%;
        object-fit: v-bind(objectFit);
        object-position: v-bind(objectPosition);
    }
    &__caption {
        margin: 0;
        padding: 0;
        display: block;
        margin-top: v-bind(captionDistance);
        text-align: v-bind(captionAlign);
        line-height: initial;
    }
    &--rounded {
        #{$self}__image {
            border-radius: var(--border-radius);
            overflow: hidden;
        }
    }
}
</style>
