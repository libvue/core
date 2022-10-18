<template>
    <div class="lv-accordion-item" :class="classObject">
        <h3
            class="lv-accordion-item__button"
            tabindex="0"
            :aria-expanded="!!expanded"
            @click="onClickButton"
            @keydown.enter.space="onKeydownButton"
        >
            {{ title }}
            <lv-icon class="lv-accordion-item__icon" :name="expanded ? 'chevron-up' : 'chevron-down'" />
        </h3>
        <transition-expand :duration="100">
            <div v-show="expanded" class="lv-accordion-item__content" role="region">
                <slot></slot>
            </div>
        </transition-expand>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { TransitionExpand } from '@morev/vue-transitions';
import eventBus from '../../utils/eventBus';

export default {
    components: {
        TransitionExpand,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        initialOpen: {
            type: Boolean,
            default: false,
        },
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
            eventBus.$emit('accordion-item:open', this.uuid);
        }
        eventBus.$on('accordion:close', (uuid) => {
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
                eventBus.$emit('accordion-item:close', this.uuid);
            } else {
                this.expanded = true;
                eventBus.$emit('accordion-item:open', this.uuid);
            }
        },
        onClickButton() {
            if (this.expanded) {
                this.expanded = false;
                eventBus.$emit('accordion-item:close', this.uuid);
            } else {
                this.expanded = true;
                eventBus.$emit('accordion-item:open', this.uuid);
            }
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-accordion-item {
    $self: &;
    border: 1px solid $border-color;
    &:first-of-type {
        border-radius: $border-radius $border-radius 0 0;
        #{$self}__button {
            border-radius: $border-radius $border-radius 0 0;
        }
    }
    &:last-of-type {
        border-radius: 0 0 $border-radius $border-radius;
        #{$self}__content {
            border-radius: 0 0 $border-radius $border-radius;
        }
    }
    &:not(&:last-of-type) {
        margin-bottom: -1px;
    }
    &:not(&--expanded) {
        &:last-of-type {
            #{$self}__button {
                border-radius: 0 0 $border-radius $border-radius;
            }
        }
    }
    &__button {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 0;
        padding: $padding;
        font-weight: normal;
        font-size: $font-size;
        line-height: $font-size;

        &:hover {
            background: lighten($border-color, 10);
        }
    }

    &__icon {
        margin-left: auto;
    }
    &__content {
        border-top: 1px solid $border-color;
        background: lighten($border-color, 10);
        padding: $padding;
        overflow: hidden;
    }
}
</style>
