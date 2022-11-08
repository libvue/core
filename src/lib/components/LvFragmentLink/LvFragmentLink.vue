<template>
    <a :id="id" :href="fragmentLink" class="lv-fragment-link" :name="id">
        <lv-icon class="lv-fragment-link__anchor" name="link" />
        <div class="lv-fragment-link__content">
            <slot></slot>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    computed: {
        fragmentLink() {
            return `${window.location.origin}${window.location.pathname}#${this.id}`;
        },
    },
};
</script>

<style lang="scss">
.lv-fragment-link {
    $self: &;
    display: inline-block;
    position: relative;
    cursor: pointer;
    color: var(--text-color);
    text-decoration: none;

    &__anchor {
        display: none !important;
        position: absolute;
        transform: translateX(calc(-50% - 1rem));
        outline: none;
    }
    &:hover {
        #{$self}__anchor {
            display: block !important;
        }
    }
}
</style>
