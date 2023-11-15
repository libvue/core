<template>
    <div class="lv-range-slider" :class="classNames">
        <div class="lv-range-slider__track">
            <div ref="track" class="lv-range-slider__track-boundaries">
                <div class="lv-range-slider__indicator" :style="styleObjectIndicator" />
                <div
                    ref="primary"
                    class="lv-range-slider__thumb lv-range-slider__thumb--primary"
                    :style="styleObjectThumbPrimary"
                    @mousedown="onPrimaryMouseDown"
                    @touchstart="onPrimaryTouchStart"
                    @keydown.right="onPrimaryKeydownRight"
                    @keydown.left="onPrimaryKeydownLeft"
                    @keydown.prevent.home="onPrimaryKeydownHome"
                    @keydown.prevent.end="onPrimaryKeydownEnd"
                    role="slider"
                    :aria-valuenow="primaryValue"
                    :aria-valuemin="min"
                    :aria-valuemax="secondaryValue"
                    :aria-label="ariaLabelThumbOne"
                    :aria-labelledby="arialLabelledByThumbOne"
                    tabindex="0"
                >
                    <lv-spinner v-if="loading && !showRange" class="lv-range-slider__loader" :size="12" />
                    <lv-popover
                        v-if="showPopover"
                        :show="draggingPrimary"
                        placement="top"
                        trigger="manual"
                        :visible="draggingPrimary && !loading"
                        follow-cursor="horizontal"
                        padding=".25rem"
                    >
                        <template #reference>
                            <div class="lv-range-slider__thumb-hit-area"></div>
                        </template>
                        <template #content>{{ primaryValue }}</template>
                    </lv-popover>
                </div>
                <div
                    ref="secondary"
                    class="lv-range-slider__thumb lv-range-slider__thumb--secondary"
                    :style="styleObjectThumbSecondary"
                    @mousedown="onSecondaryMouseDown"
                    @touchstart="onSecondaryTouchStart"
                    @keydown.right="onSecondaryKeydownRight"
                    @keydown.left="onSecondaryKeydownLeft"
                    @keydown.prevent.home="onSecondaryKeydownHome"
                    @keydown.prevent.end="onSecondaryKeydownEnd"
                    role="slider"
                    :aria-valuenow="secondaryValue"
                    :aria-valuemin="primaryValue"
                    :aria-valuemax="max"
                    :aria-label="ariaLabelThumbTwo"
                    :aria-labelledby="arialLabelledByThumbTwo"
                    tabindex="0"
                >
                    <lv-spinner v-if="loading && !showRange" class="lv-range-slider__loader" :size="12" />
                    <lv-popover
                        v-if="showPopover"
                        :show="draggingSecondary"
                        placement="top"
                        trigger="manual"
                        :visible="draggingSecondary && !loading"
                        follow-cursor="horizontal"
                        padding=".25rem"
                    >
                        <template #reference>
                            <div class="lv-range-slider__thumb-hit-area"></div>
                        </template>
                        <template #content>{{ secondaryValue }}</template>
                    </lv-popover>
                </div>
            </div>
        </div>
        <div v-if="showRange" class="lv-range-slider__range">
            <div class="lv-range-slider__range-value lv-range-slider__range-value--primary">
                <lv-spinner v-if="loading" class="lv-range-slider__loader" :size="12" />
                <template v-else>
                    {{ primaryValue.toFixed(decimals) }}
                </template>
            </div>
            <div class="lv-range-slider__range-value lv-range-slider__range-value--secondary">
                <lv-spinner v-if="loading" class="lv-range-slider__loader" :size="12" />
                <template v-else>
                    {{ secondaryValue.toFixed(decimals) }}
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
            type: Object,
            default: () => ({}),
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
        },
        ariaLabelThumbOne: {
            type: String,
            default: null,
        },
        arialLabelledByThumbOne: {
            type: String,
            default: null,
        },
        ariaLabelThumbTwo: {
            type: String,
            default: null,
        },
        arialLabelledByThumbTwo: {
            type: String,
            default: null,
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            trackX: 0,
            trackWidth: 0,
            primaryPosition: 0,
            secondaryPosition: 0,
            draggingPrimary: false,
            draggingSecondary: false,
        };
    },
    computed: {
        classNames() {
            return {
                'lv-range-slider--disabled': this.disabled,
                'lv-range-slider--loading': this.loading,
            };
        },
        primaryValue() {
            const value = ((this.max - this.min) / 100) * this.primaryPosition + this.min;
            return parseFloat(value.toFixed(this.decimals));
        },
        secondaryValue() {
            const value = ((this.max - this.min) / 100) * this.secondaryPosition + this.min;
            return parseFloat(value.toFixed(this.decimals));
        },
        indicatorLeft() {
            return this.primaryPosition <= this.secondaryPosition ? this.primaryPosition : this.secondaryPosition;
        },
        indicatorRight() {
            return this.primaryPosition >= this.secondaryPosition ? this.primaryPosition : this.secondaryPosition;
        },
        stepPercentage() {
            return (100 / (this.max - this.min)) * this.step;
        },
        styleObjectIndicator() {
            return { left: `${this.indicatorLeft}%`, right: `${100 - this.indicatorRight}%` };
        },
        styleObjectThumbPrimary() {
            return { left: `${this.primaryPosition}%` };
        },
        styleObjectThumbSecondary() {
            return { left: `${this.secondaryPosition}%` };
        },
        fromToValues() {
            return {
                from: this.primaryValue <= this.secondaryValue ? this.primaryValue : this.secondaryValue,
                to: this.primaryValue <= this.secondaryValue ? this.secondaryValue : this.primaryValue,
            }
        }
    },
    watch: {
        modelValue: {
            handler(value) {
                this.primaryPosition = value.from ? this.getPositionFromValue(value.from) : 0;
                this.secondaryPosition = value.to ? this.getPositionFromValue(value.to) : 100;
            },
            deep: true,
            immediate: true,
        },
    },
    mounted() {
        this.cacheDimensions();
    },
    created() {
        this.onPrimaryMouseMoveThrottled = useThrottleFn(this.onPrimaryMouseMove, 24);
        this.onSecondaryMouseMoveThrottled = useThrottleFn(this.onSecondaryMouseMove, 24);
        this.onPrimaryTouchMoveThrottled = useThrottleFn(this.onPrimaryTouchMove, 24);
        this.onSecondaryTouchMoveThrottled = useThrottleFn(this.onSecondaryTouchMove, 24);
    },
    methods: {
        onPrimaryKeydownRight() {
            if(this.modelValue.from + this.step <= this.secondaryValue) {
                this.$emit('update:modelValue', {
                    from: this.fromToValues.from + this.step,
                    to: this.fromToValues.to,
                });
            }
        },
        onPrimaryKeydownLeft() {
            if(this.modelValue.from - this.step >= this.min) {
                this.$emit('update:modelValue', {
                    from: this.fromToValues.from - this.step,
                    to: this.fromToValues.to,
                });
            }
        },
        onPrimaryKeydownHome() {
            this.$emit('update:modelValue', {
                from: this.min,
                to: this.fromToValues.to,
            });
        },
        onPrimaryKeydownEnd() {
            this.$emit('update:modelValue', {
                from: this.fromToValues.to,
                to: this.fromToValues.to,
            });
        },
        onSecondaryKeydownRight() {
            if(this.modelValue.to + this.step <= this.max) {
                this.$emit('update:modelValue', {
                    from: this.fromToValues.from,
                    to: this.fromToValues.to + this.step,
                });
            }
        },
        onSecondaryKeydownLeft() {
            if(this.modelValue.to - this.step >= this.primaryValue) {
                this.$emit('update:modelValue', {
                    from: this.fromToValues.from,
                    to: this.fromToValues.to - this.step,
                });
            }
        },
        onSecondaryKeydownHome() {
            this.$emit('update:modelValue', {
                from: this.fromToValues.from,
                to: this.fromToValues.from,
            });
        },
        onSecondaryKeydownEnd() {
            this.$emit('update:modelValue', {
                from: this.fromToValues.from,
                to: this.max,
            });
        },
        onPrimaryMouseDown(event) {
            this.draggingPrimary = true;
            event.preventDefault();
            if (this.disabled || this.loading) return;
            this.cacheDimensions();
            document.addEventListener('mousemove', this.onPrimaryMouseMoveThrottled, false);
            document.addEventListener('mouseup', this.onMouseUp, false);
        },
        onPrimaryMouseMove(event) {
            this.primaryPosition = this.getRelativePosition(event.pageX);
            if(this.realtimeUpdate) {
                this.emitInputEvent();
            }
        },
        onSecondaryMouseDown(event) {
            this.draggingSecondary = true;
            event.preventDefault();
            if (this.disabled || this.loading) return;
            this.cacheDimensions();
            document.addEventListener('mousemove', this.onSecondaryMouseMoveThrottled, false);
            document.addEventListener('mouseup', this.onMouseUp, false);
        },
        onSecondaryMouseMove(event) {
            this.secondaryPosition = this.getRelativePosition(event.pageX);
            if(this.realtimeUpdate) {
                this.emitInputEvent();
            }
        },
        onMouseUp() {
            this.draggingPrimary = false;
            this.draggingSecondary = false;
            document.removeEventListener('mousemove', this.onPrimaryMouseMoveThrottled, false);
            document.removeEventListener('mousemove', this.onSecondaryMouseMoveThrottled, false);
            document.removeEventListener('mouseup', this.onMouseUp, false);
            this.emitInputEvent();
        },
        onPrimaryTouchStart() {
            if (this.disabled) return;
            this.cacheDimensions();
            document.addEventListener('touchmove', this.onPrimaryTouchMoveThrottled);
            document.addEventListener('touchend', this.onTouchEnd);
        },
        onPrimaryTouchMove(event) {
            event.preventDefault();
            this.primaryPosition = this.getRelativePosition(event.touches[0].clientX);
            if(this.realtimeUpdate) {
                this.emitInputEvent();
            }
        },
        onSecondaryTouchStart() {
            if (this.disabled) return;
            this.cacheDimensions();
            document.addEventListener('touchmove', this.onSecondaryTouchMoveThrottled);
            document.addEventListener('touchend', this.onTouchEnd);
        },
        onSecondaryTouchMove(event) {
            event.preventDefault();
            this.secondaryPosition = this.getRelativePosition(event.touches[0].clientX);
            if(this.realtimeUpdate) {
                this.emitInputEvent();
            }
        },
        onTouchEnd() {
            document.removeEventListener('touchmove', this.onPrimaryTouchMoveThrottled);
            document.removeEventListener('touchmove', this.onSecondaryTouchMoveThrottled);
            document.removeEventListener('touchend', this.onTouchEnd);
            this.emitInputEvent();
        },
        emitInputEvent() {
            this.$emit('update:modelValue', {
                from: this.fromToValues.from,
                to: this.fromToValues.to,
            });
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
.lv-range-slider {
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
        transform: translate(-50%, 0);
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

    &__thumb-hit-area {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300%;
        height: 300%;
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

        &--secondary {
            margin-left: auto;
        }
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
        padding: 0 0.5rem;
        width: 100%;
        height: 0.25rem;
    }

    &__track-boundaries {
        position: relative;
    }
    &__loader {
        margin-top: 1px;
        margin-left: 1px;
        color: var(--text-color-dimmed)
    }
}
</style>
