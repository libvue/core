<template>
    <div class="lv-menu-list">
        <div class="lv-menu-list__label" @click="toggleState">
            <lv-icon v-if="icon" :name="icon" class="lv-menu-list__icon" />
            <div class="lv-menu-list__label-text">{{ label }}</div>
            <lv-icon class="lv-menu-list__label-icon" :name="iconName"></lv-icon>
        </div>
        <div class="lv-menu-list__dropdown" v-show="isOpen">
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
    font-family: $font-family;
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: $font-size;
    margin-bottom: 10px;

    &:last-of-type {
        margin-bottom: 0;
    }

    &__icon {
        margin-right: 10px;
        flex-shrink: 0;
    }

    &__label {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 0;
        padding: 5px 0;
        border-radius: 5px;
        white-space: nowrap;
        font-weight: 400;

        &-icon {
            margin-left: auto;
            flex-shrink: 0;
        }
        &-text {
            margin-right: 10px;
        }
    }

    &__dropdown {
        display: flex;
        flex-direction: column;
        border-left: 1px solid #eaeaea;
        padding-left: 13px;
        margin-left: 18px;
        margin-bottom: 10px;
        margin-top: 10px;
        background-color: $background-color;

        > [class^='lv-menu-item'] {
            &:last-of-type {
                margin-bottom: 0;
            }
        }
    }
}
</style>
