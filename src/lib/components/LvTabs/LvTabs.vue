<template>
    <div class="lv-tabs" role="tablist">
        <lv-group v-space-after="1" class="lv-tabs__buttons" gap="20px">
            <div
                v-for="tab in tabs"
                :key="tab.id"
                class="lv-tabs__button"
                :tabindex="tab.disabled ? '-1' : '0'"
                :class="{ 'lv-tabs__button--active': tab.id === active, 'lv-tabs__button--disabled': !!tab.disabled }"
                role="tab"
                @click.stop="onClickButton(tab)"
                @keydown.enter.space="onKeyDown(tab)"
            >
                <lv-icon v-if="tab.icon" class="lv-tabs__button-icon" :name="tab.icon" />
                {{ tab.title }}
            </div>
        </lv-group>
        <div class="lv-tabs__panels">
            <div v-for="tab in tabs" v-show="tab.id === active" :key="tab.id" class="lv-tabs__panel" role="tabpanel">
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
    emits: ['change-tab'],
    methods: {
        onClickButton(tab) {
            if (!tab.disabled) {
                this.$emit('change-tab', tab.id);
            }
        },
        onKeyDown(tab) {
            if (!tab.disabled) {
                this.$emit('change-tab', tab.id);
            }
        },
    },
};
</script>

<style lang="scss">

.lv-tabs {
    $self: &;
    display: block;
    width: 100%;

    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s all;
        cursor: pointer;
        outline: 0;
        border-bottom: 2px solid transparent;
        background-color: transparent;
        padding: 5px 0;
        color: var(--text-color);
        font-weight: bold;
        font-size: var(--font-size);
        user-select: none;
        text-align: center;
        white-space: nowrap;
        &:focus:not(&--active) {
            border-color: var(--color-primary-light);
        }

        &--active {
            border-color: var(--color-primary);
            color: var(--color-primary);
        }

        &--disabled {
            opacity: 0.4;
            cursor: not-allowed;
            pointer-events: none;
        }
        &-icon {
            transition: 0.2s all;
            margin-right: 10px;
        }
    }
}
</style>
