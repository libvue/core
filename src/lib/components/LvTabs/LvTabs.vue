<template>
    <div class="lv-tabs">
        <lv-group class="lv-tabs__buttons" v-space-after="1">
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
            <transition-group name="lv-tabs-content" tag="div" class="lv-tabs__transition-group">
                <div v-for="tab in tabs" v-show="tab.id === active" :key="tab.id" class="lv-tabs__tab lv-tabs__transition-group-item">
                    <slot :name="tab.id" :tab="tab" />
                </div>
            </transition-group>
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

    &__button {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
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
        &--active {
            border-color: $color-primary;
            color: $color-primary;
        }

        &--disabled {
            color: #cacaca;
            cursor: not-allowed;
            pointer-events: none;
        }
        &-icon {
            margin-right: 10px;
            transition: 0.2s all;
        }
    }
    &__transition-group {
        position: relative;
    }
}
.lv-tabs-content-enter-active,
.lv-tabs-content-leave-active {
    position: absolute;
    width: 100%;
    transition: all 0.3s;
}
.lv-tabs-content-enter,
.lv-tabs-content-leave-to {
    opacity: 0;
}
</style>
