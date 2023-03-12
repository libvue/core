<template>
    <span class="lv-avatar" :class="classObject">
        <img v-if="image" :src="image" class="lv-avatar__image" alt="avatar" />{{ initials }}
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
    cursor: default;
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: var(--color-primary);
    background: linear-gradient(-45deg, var(--color-primary), var(--color-secondary));
    width: v-bind(size);
    height: v-bind(size);
    color: var(--text-color-inverted);
    font-weight: 600;
    font-size: calc(v-bind(size) / 3);

    &__image {
        position: absolute;
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>
