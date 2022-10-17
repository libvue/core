<template>
    <span class="lv-avatar" :style="`width: ${size}; height: ${size};`" :class="classObject">
        <img v-if="image" :src="image" class="lv-avatar__image" alt="avatar">
        <template v-else>
            {{ initials }}
        </template>
    </span>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: null,
        },
        initials: {
            type: String,
            default: '?'
        },
        size: {
            type: String,
            default: '3rem'
        }
    },
    computed: {
        classObject() {
            return {
                'lv-avatar--has-image': !!this.image,
            }
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-avatar {
    border-radius: 100%;
    background-color: $color-primary;
    background: linear-gradient(-45deg, $color-primary, $color-secondary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size;
    font-weight: 500;
    color: $text-color-inverted;

    &--has-image {
        background: transparent;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 100%;
    }
}
</style>
