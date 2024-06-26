<template>
    <div class="lv-tabs">
        <lv-flex class="lv-tabs__buttons" gap="10px" role="tablist">
            <div
                v-for="tab in tabs"
                :key="tab.id"
                class="lv-tabs__button"
                tabindex="0"
                :class="{ 'lv-tabs__button--active': tab.id === active, 'lv-tabs__button--disabled': !!tab.disabled }"
                role="tab"
                @click.stop="onClickButton(tab)"
                @keydown.enter.space="onKeyDown(tab, $event)"
            >
                <lv-icon v-if="tab.icon" class="lv-tabs__button-icon" :name="tab.icon" />
                {{ tab.title }}
            </div>
        </lv-flex>
        <div class="lv-tabs__panels" role="tabpanel">
            <div v-for="tab in tabs" v-show="tab.id === active" :key="tab.id" class="lv-tabs__panel">
                <slot :name="tab.id" :tab="tab" />
            </div>
        </div>
    </div>
</template>

<script>
import LvFlex from "../LvFlex/LvFlex.vue";
import LvIcon from "../LvIcon/LvIcon.vue";

export default {
    components: { LvIcon, LvFlex },
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
        onKeyDown(tab, event) {
            event.preventDefault();
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

    &__buttons {
        margin-bottom: 1rem;
        padding: 1px 0;
        overflow-x: auto;
        flex-wrap: nowrap;
    }

    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        background-color: transparent;
        padding: 5px;
        color: var(--text-color);
        font-weight: bold;
        font-size: var(--font-size);
        user-select: none;
        text-align: center;
        white-space: nowrap;

        &:hover:not(&--active) {
            border-color: var(--text-color);
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
            margin-right: 10px;
        }
    }
}
</style>
