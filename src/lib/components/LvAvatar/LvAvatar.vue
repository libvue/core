<template>
    <span class="lv-avatar" :style="`width: ${size}; height: ${size};`" :class="classObject">
        <img v-if="image" :src="image" class="lv-avatar__image" alt="avatar" />
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
            default: '?',
        },
        size: {
            type: String,
            default: '3rem',
        },
    },
    computed: {
        classObject() {
            return {
                'lv-avatar--has-image': !!this.image,
            };
        },
    },
};
</script>

<style lang="scss">
.lv-avatar {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: var(--color-primary);
    background: linear-gradient(-45deg, var(--color-primary), var(--color-secondary));
    color: var(--text-color-inverted);
    font-weight: 500;
    font-size: var(--font-size);

    &--has-image {
        background: transparent;
    }

    &__image {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>
