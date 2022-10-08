<template>
    <div class="lv-menu-list">
        <div class="lv-menu-list__label" @click="toggleState">
            <lv-icon v-if="icon" :name="icon" class="lv-menu-list__icon" />
            <div class="lv-menu-list__label-text">{{ label }}</div>
            <lv-icon class="lv-menu-list__label-icon" :name="iconName"></lv-icon>
        </div>
        <div v-show="isOpen" class="lv-menu-list__dropdown">
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
@import '../../scss/variables';

.lv-menu-list {
    $self: &;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
    font-size: $font-size;
    font-family: $font-family;

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
        border-left: 1px solid #eaeaea;
        background-color: $background-color;
        padding-left: 13px;

        > [class^='lv-menu-item'] {
            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
}
</style>
