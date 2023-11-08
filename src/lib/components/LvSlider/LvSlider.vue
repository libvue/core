<template>
    <div class="lv-slider" :class="classNames" role="slider" :aria-valuenow="modelValue" :aria-valuemin="min" :aria-valuemax="max">
        <div class="lv-slider__track">
            <div ref="track" class="lv-slider__track-boundaries">
                <div class="lv-slider__indicator" :style="styleObjectIndicator" />
                <div
                    class="lv-slider__thumb lv-slider__thumb"
                    :style="styleObjectThumb"
                    @mousedown.prevent="onThumbMouseDown"
                    @touchstart="onThumbTouchStart"
                    @keydown.right="onThumbKeydownRight"
                    @keydown.left="onThumbKeydownLeft"
                    @keydown.prevent.home="onThumbKeydownHome"
                    @keydown.prevent.end="onThumbKeydownEnd"
                    tabindex="0"
                >
                    <lv-spinner v-if="loading && !showRange" class="lv-slider__loader" :size="12" />

                    <lv-popover
                        v-if="showPopover"
                        :show="dragging"
                        placement="top"
                        follow-cursor="horizontal"
                        trigger="manual"
                        :visible="dragging"
                        padding=".25rem"
                    >
                        <template #reference>
                            <div class="lv-range-slider__thumb-hit-area"></div>
                        </template>
                        <template #content>{{ parsedValue }}</template>
                    </lv-popover>
                </div>
            </div>
        </div>
        <div v-if="showRange" class="lv-slider__range">
            <div class="lv-slider__range-value lv-slider__range-value--primary">
                <lv-spinner v-if="loading" class="lv-slider__loader" :size="12" />
                <template v-else>
                    {{ min.toFixed(decimals) }}
                </template>
            </div>
            <div class="lv-slider__range-value lv-slider__range-value--secondary">
                <lv-spinner v-if="loading" class="lv-slider__loader" :size="12" />
                <template v-else>
                    {{ max.toFixed(decimals) }}
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { useThrottleFn } from '@vueuse/core';
import LvPopover from '../LvPopover/LvPopover.vue';
import LvSpinner from "../LvSpinner/LvSpinner.vue";

export default {
    components: { LvSpinner, LvPopover },
    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        modelValue: {
            type: Number,
            default: 0,
        },
        decimals: {
            type: Number,
            default: 0,
            validator: (value) => value >= 0,
        },
        step: {
            type: Number,
            default: 1,
            validator: (value) => value > 0,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        showRange: {
            type: Boolean,
            default: false,
        },
        showPopover: {
            type: Boolean,
            default: true,
        },
        realtimeUpdate: {
            type: Boolean,
            default: false,
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            dragging: false,
            trackX: 0,
            trackWidth: 0,
            thumbPosition: 0,
        };
    },
    computed: {
        classNames() {
            return {
                'lv-slider--disabled': this.disabled,
                'lv-slider--loading': this.loading,
            };
        },
        parsedValue() {
            const value = ((this.max - this.min) / 100) * this.thumbPosition + this.min;
            return parseFloat(value.toFixed(this.decimals));
        },
        indicatorRight() {
            return this.thumbPosition;
        },
        stepPercentage() {
            return (100 / (this.max - this.min)) * this.step;
        },
        styleObjectIndicator() {
            return { left: 0, right: `${100 - this.indicatorRight}%` };
        },
        styleObjectThumb() {
            return { left: `${this.thumbPosition}%` };
        },
    },
    watch: {
        modelValue: {
            handler(value) {
                this.thumbPosition = value ? this.getPositionFromValue(value) : 100;
            },
            deep: true,
            immediate: true,
        },
    },
    mounted() {
        this.cacheDimensions();
    },
    created() {
        this.onThumbMouseMoveThrottled = useThrottleFn(this.onThumbMouseMove, 25, false);
        this.onThumbTouchMoveThrottled = useThrottleFn(this.onThumbTouchMove, 25, false);
    },
    methods: {
        onThumbKeydownHome() {
            this.$emit('update:modelValue', this.min);
        },
        onThumbKeydownEnd() {
            this.$emit('update:modelValue', this.max);
        },
        onThumbKeydownRight() {
            if(this.modelValue + this.step <= this.max) {
                this.$emit('update:modelValue', this.modelValue + this.step);
            }
        },
        onThumbKeydownLeft() {
            if(this.modelValue - this.step >= this.min) {
                this.$emit('update:modelValue', this.modelValue - this.step);
            }
        },
        onThumbMouseDown() {
            if (this.disabled || this.loading) return;
            this.dragging = true;
            this.cacheDimensions();
            document.addEventListener('mousemove', this.onThumbMouseMoveThrottled, false);
            document.addEventListener('mouseup', this.onMouseUp, false);
        },
        onThumbMouseMove(event) {
            this.thumbPosition = this.getRelativePosition(event.pageX);
            if(this.realtimeUpdate) {
                this.emitInputEvent();
            }
        },
        onMouseUp() {
            this.dragging = false;
            document.removeEventListener('mousemove', this.onThumbMouseMoveThrottled, false);
            document.removeEventListener('mouseup', this.onMouseUp, false);
            this.emitInputEvent();
        },
        onThumbTouchStart() {
            if (this.disabled) return;
            this.cacheDimensions();
            document.addEventListener('touchmove', this.onThumbTouchMoveThrottled);
            document.addEventListener('touchend', this.onTouchEnd);
        },
        onThumbTouchMove(event) {
            event.preventDefault();
            this.thumbPosition = this.getRelativePosition(event.touches[0].clientX);
            if(this.realtimeUpdate) {
                this.emitInputEvent();
            }
        },
        onTouchEnd() {
            document.removeEventListener('touchmove', this.onThumbTouchMoveThrottled);
            document.removeEventListener('touchend', this.onTouchEnd);
            this.emitInputEvent();
        },
        emitInputEvent() {
            this.$emit('update:modelValue', this.parsedValue);
        },
        cacheDimensions() {
            this.trackWidth = this.$refs.track.offsetWidth;
            this.trackX = this.$refs.track.getBoundingClientRect().left;
        },
        getPositionFromValue(value) {
            return (100 / (this.max - this.min)) * value - (this.min / (this.max - this.min)) * 100;
        },
        getRelativePosition(x) {
            const relativeX = x - this.trackX;
            let position = (relativeX / this.trackWidth) * 100;
            if (this.step) {
                position = Math.round(position / this.stepPercentage) * this.stepPercentage;
            }
            position = Math.min(Math.max(position, 0), 100);
            return position;
        },
    },
};
</script>

<style lang="scss">
.lv-slider {
    $self: &;

    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 1rem;

    &--disabled {
        #{$self}__thumb {
            cursor: default;

            &::after {
                background-color: var(--border-color-light);
            }
        }

        #{$self}__range-value {
            color: var(--text-color-dimmed);
        }
        #{$self}__track {
            background-color: var(--border-color-light);
        }
        #{$self}__indicator {
            background-color: var(--border-color);
        }
    }

    &--loading {
        #{$self}__thumb {
            cursor: default;

            &::after {
                background-color: var(--border-color-light);
            }
        }

        #{$self}__range-value {
            color: var(--text-color-dimmed);
        }
        #{$self}__track {
            background-color: var(--border-color-light);
        }
        #{$self}__indicator {
            background-color: var(--border-color);
        }
    }

    &__thumb {
        position: absolute;
        top: 50%;
        left: 0;
        justify-content: center;
        transform: translate(-25%, 0);
        cursor: grab;
        margin-top: calc(-0.5rem + 2px);
        box-shadow: var(--shadow);
        border: 1px solid var(--border-color);
        border-radius: 100%;
        background-color: var(--background-color);
        width: 1rem;
        height: 1rem;

        &:active {
            cursor: grabbing;
        }
    }

    &__range {
        display: flex;
        margin-top: 0.5rem;
        width: 100%;
    }

    &__range-value {
        position: relative;
        color: var(--text-color);
        font-weight: bold;
        font-size: var(--font-size-small);
    }

    &__indicator {
        position: absolute;
        top: 0;
        bottom: 0;
        flex-grow: 0;
        flex-shrink: 0;
        transition: background-color 0.2s;
        background-color: var(--color-primary);
        height: 0.25rem;
    }

    &__track {
        position: relative;
        flex-grow: 0;
        flex-shrink: 0;
        transition: background-color 0.2s;
        border-radius: var(--border-radius);
        background-color: var(--border-color-light);
        padding: 0 0.5rem 0 0;
        width: 100%;
        height: 0.25rem;
    }

    &__track-boundaries {
        position: relative;
    }

    &__loader {
        margin-top: 1px;
        margin-left: 1px;
    }
}
</style>
