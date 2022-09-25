<template>
    <div class="lv-tabs">
        <lv-group class="lv-tabs__buttons" v-space-after="1" gap="20px">
            <div
                v-for="tab in tabs"
                :key="tab.id"
                class="lv-tabs__button"
                :tabindex="tab.disabled ? '-1' : '0'"
                :class="{ 'lv-tabs__button--active': tab.id === active, 'lv-tabs__button--disabled': !!tab.disabled }"
                @click="onClickButton(tab)"
                @keydown.enter.space="onKeyDown(tab)"
            >
                <lv-icon v-if="tab.icon" class="lv-tabs__button-icon" :name="tab.icon" />
                {{ tab.title }}
            </div>
        </lv-group>
        <div class="lv-tabs__tabs">
            <div v-for="tab in tabs" v-show="tab.id === active" :key="tab.id" class="lv-tabs__tab">
                <slot :name="tab.id" :tab="tab" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            default: () => [],
        },
        active: {
            type: String,
            default: null,
        },
    },
    methods: {
        onClickButton(tab) {
            if (!tab.disabled) {
                this.$emit('change', tab.id);
            }
        },
        onKeyDown(tab) {
            if (!tab.disabled) {
                this.$emit('change', tab.id);
            }
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-tabs {
    $self: &;
    display: block;
    width: 100%;

    &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 0px;
        font-weight: bold;
        color: $text-color;
        white-space: nowrap;
        text-align: center;
        background-color: transparent;
        border-bottom: 2px solid transparent;
        outline: 0;
        font-size: $font-size;
        cursor: pointer;
        transition: 0.2s all;
        user-select: none;
        &:focus:not(&--active) {
            border-color: lighten($color-primary, 30);
        }

        &--active {
            border-color: $color-primary;
            color: $color-primary;
        }

        &--disabled {
            opacity: 0.4;
            cursor: not-allowed;
            pointer-events: none;
        }
        &-icon {
            margin-right: 10px;
            transition: 0.2s all;
        }
    }
}

</style>
