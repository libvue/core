<template>
    <div class="lv-accordion-item" :class="classObject">
        <h3
            class="lv-accordion-item__button"
            tabindex="0"
            :aria-expanded="!!expanded"
            @click="onClickButton"
            @keydown.enter.space="onKeydownButton"
        >
            <lv-icon v-if="icon" :name="icon" :push=".5" />
            {{ title }}
            <lv-icon class="lv-accordion-item__toggle" :name="expanded ? 'chevron-up' : 'chevron-down'" />
        </h3>
        <div v-show="expanded" class="lv-accordion-item__content" role="region">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import LvIcon from "../LvIcon/LvIcon.vue";

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
        initialOpen: {
            type: Boolean,
            default: false,
        },
        eventBus: {
            type: Object,
            required: true,
        }
    },
    emits: ['accordion-item:open', 'accordion-item:close'],
    data() {
        return {
            expanded: this.initialOpen,
            uuid: uuidv4(),
        };
    },
    computed: {
        classObject() {
            return {
                'lv-accordion-item--expanded': this.expanded,
            };
        },
    },
    mounted() {
        if (this.initialOpen) {
            this.eventBus.$emit('accordion-item:open', this.uuid);
        }
        this.eventBus.$on('accordion:close', (uuid) => {
            if (this.uuid !== uuid) {
                this.expanded = false;
            }
        });
    },
    methods: {
        onKeydownButton(e) {
            e.preventDefault();
            if (this.expanded) {
                this.expanded = false;
                this.eventBus.$emit('accordion-item:close', this.uuid);
            } else {
                this.expanded = true;
                this.eventBus.$emit('accordion-item:open', this.uuid);
            }
        },
        onClickButton() {
            if (this.expanded) {
                this.expanded = false;
                this.eventBus.$emit('accordion-item:close', this.uuid);
            } else {
                this.expanded = true;
                this.eventBus.$emit('accordion-item:open', this.uuid);
            }
        },
    },
};
</script>

<style lang="scss">
.lv-accordion-item {
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
        font-weight: normal;
        font-size: var(--font-size);
        line-height: var(--line-height);
        font-weight: 600;

        &:hover {
            background: var(--border-color-light);
        }
    }

    &__toggle {
        margin-left: auto;
    }
    &__content {
        border-top: 1px solid var(--border-color);
        font-size: var(--font-size);
        line-height: var(--line-height-large);
        padding: var(--padding);
        overflow: hidden;
    }
}
</style>
