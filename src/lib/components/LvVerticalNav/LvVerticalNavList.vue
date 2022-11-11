<template>
    <div class="lv-vertical-nav-list">
        <div class="lv-vertical-nav-list__label" @click="toggleState">
            <lv-icon v-if="icon" :name="icon" class="lv-vertical-nav-list__icon" />
            <div class="lv-vertical-nav-list__label-text">{{ label }}</div>
            <lv-icon class="lv-vertical-nav-list__label-icon" :name="iconName"></lv-icon>
        </div>
        <div v-show="isOpen" class="lv-vertical-nav-list__dropdown">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        open: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isOpen: this.open,
        };
    },
    computed: {
        iconName() {
            return this.isOpen ? 'chevron-up' : 'chevron-down';
        },
    },
    methods: {
        toggleState() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style lang="scss">
.lv-vertical-nav-list {
    $self: &;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
    color: var(--text-color);
    font-size: var(--font-size);
    font-family: var(--font-family);
    cursor: pointer;

    &:last-of-type {
        margin-bottom: 0;
    }

    &__icon {
        flex-shrink: 0;
        margin-right: 10px;
    }

    &__label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 0;
        border-radius: 5px;
        padding: 5px 0;
        font-weight: 400;
        white-space: nowrap;

        &-icon {
            flex-shrink: 0;
            margin-left: auto;
        }
        &-text {
            margin-right: 10px;
        }
    }

    &__dropdown {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 18px;
        border-left: 1px solid var(--border-color);
        background-color: var(--background-color);
        padding-left: 13px;
        overflow: hidden;

        > [class^='lv-menu-item'] {
            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
}
</style>
