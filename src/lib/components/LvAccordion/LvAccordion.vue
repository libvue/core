<template>
    <div class="lv-accordion" :class="classObject">
        <h3
            class="lv-accordion__button"
            tabindex="0"
            :aria-expanded="!!mutableExpanded"
            @click="onClickButton"
            @keydown.enter.space="onKeydownButton"
        >
            <lv-icon v-if="icon" :name="icon" :push="0.5" />
            {{ title }}
            <lv-icon class="lv-accordion__toggle" :name="mutableExpanded ? 'chevron-up' : 'chevron-down'" />
        </h3>
        <div v-show="mutableExpanded" class="lv-accordion__content" role="region">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import LvIcon from '../LvIcon/LvIcon.vue';

export default {
    components: { LvIcon },
    props: {
        title: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: null,
        },
        initialExpanded: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            mutableExpanded: this.initialExpanded,
        };
    },
    computed: {
        classObject() {
            return {
                'lv-accordion--expanded': this.mutableExpanded,
            };
        },
    },
    methods: {
        onKeydownButton(e) {
            e.preventDefault();
            this.mutableExpanded = !this.mutableExpanded;
        },
        onClickButton() {
            this.mutableExpanded = !this.mutableExpanded;
        },
    },
};
</script>

<style lang="scss">
.lv-accordion {
    $self: &;
    border: 1px solid var(--border-color);
    &:first-of-type {
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        #{$self}__button {
            border-radius: var(--border-radius) var(--border-radius) 0 0;
        }
    }
    &:last-of-type {
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        #{$self}__content {
            border-radius: 0 0 var(--border-radius) var(--border-radius);
        }
    }
    &:not(&:last-of-type) {
        margin-bottom: -1px;
    }
    &:not(&--expanded) {
        &:last-of-type {
            #{$self}__button {
                border-radius: 0 0 var(--border-radius) var(--border-radius);
            }
        }
    }
    &__button {
        display: flex;
        align-items: center;
        transition: 0.1s background;
        cursor: pointer;
        margin: 0;
        padding: var(--padding);
        font-weight: 600;
        font-size: var(--font-size);
        line-height: var(--line-height);

        &:hover {
            background: var(--border-color-light);
        }
    }

    &__toggle {
        margin-left: auto;
    }
    &__content {
        border-top: 1px solid var(--border-color);
        padding: var(--padding);
        overflow: hidden;
        font-size: var(--font-size);
        line-height: var(--line-height-large);
    }
}
</style>
