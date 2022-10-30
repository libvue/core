<template>
    <div class="lv-range-slider" :class="classNames">
        <div class="lv-range-slider__track">
            <div ref="track" class="lv-range-slider__track-limits">
                <div
                    class="lv-range-slider__indicator"
                    :style="{ left: indicatorLeft + '%', right: 100 - indicatorRight + '%' }"
                />
                <div
                    ref="primary"
                    class="lv-range-slider__thumb lv-range-slider__thumb--primary"
                    :style="{ left: primaryPosition + '%' }"
                    @mousedown.prevent="onPrimaryMouseDown"
                    @touchstart="onPrimaryTouchStart"
                />
                <div
                    ref="secondary"
                    class="lv-range-slider__thumb lv-range-slider__thumb--secondary"
                    :style="{ left: secondaryPosition + '%' }"
                    @mousedown.prevent="onSecondaryMouseDown"
                    @touchstart="onSecondaryTouchStart"
                />
            </div>
        </div>
        <div class="lv-range-slider__amounts">
            <div class="lv-range-slider__amount lv-range-slider__amount--primary">
                <lv-icon v-if="loading" class="lv-range-slider__loader" :size="12" name="loader-2" />
                <template v-else>
                    {{ primaryValue.toFixed(decimals) }}
                </template>
            </div>

            <div class="lv-range-slider__amount lv-range-slider__amount--secondary">
                <lv-icon v-if="loading" class="lv-range-slider__loader" :size="12" name="loader-2" />
                <template v-else>
                    {{ secondaryValue.toFixed(decimals) }}
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { useThrottleFn } from '@vueuse/core'

export default {
    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        value: {
            type: Object,
            default: () => ({}),
        },
        decimals: {
            type: Number,
            default: 0,
            validator(value) {
                return value >= 0;
            },
        },
        step: {
            type: Number,
            default: 1,
            validator(value) {
                return value > 0;
            },
        },
        invalid: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['input'],
    data() {
        return {
            trackX: 0,
            trackWidth: 0,
            primaryPosition: 0,
            secondaryPosition: 0,
        };
    },
    computed: {
        classNames() {
            return {
                'lv-range-slider--invalid': this.invalid,
                'lv-range-slider--disabled': this.disabled,
                'lv-range-slider--loading': this.loading,
            };
        },
        primaryValue() {
            // Calculate the primary value based on the position of the slider
            const value = ((this.max - this.min) / 100) * this.primaryPosition + this.min;
            // Return the value, rounded to set number of decimals
            return parseFloat(value.toFixed(this.decimals));
        },
        secondaryValue() {
            // Calculate the secondary value based on the position of the slider
            const value = ((this.max - this.min) / 100) * this.secondaryPosition + this.min;
            // Return the valuem, rounded to set number of decimals
            return parseFloat(value.toFixed(this.decimals));
        },
        indicatorLeft() {
            // Get the indicator right position from the thumb that is currently on the left side
            return this.primaryPosition <= this.secondaryPosition ? this.primaryPosition : this.secondaryPosition;
        },
        indicatorRight() {
            // Get the indicator left position from the thumb that is currently on the right side
            return this.primaryPosition >= this.secondaryPosition ? this.primaryPosition : this.secondaryPosition;
        },
        stepPercentage() {
            // Convert the step value to a percentage based value
            return (100 / (this.max - this.min)) * this.step;
        },
    },
    watch: {
        value: {
            handler(value) {
                this.primaryPosition = value.from ? this.getPositionFromValue(value.from) : 0;
                this.secondaryPosition = value.to ? this.getPositionFromValue(value.to) : 100;
            },
            deep: true,
            immediate: true,
        },
    },
    mounted() {
        // Cache dimensions and positions
        this.cacheDimensions();
        // Recalculate track X and Y positions on window resize
        window.addEventListener('resize', this.onWindowResize);
        window.dispatchEvent(new Event('resize'));
    },
    created() {
        // Throttle mousemove events
        this.onPrimaryMouseMoveThrottled = useThrottleFn(this.onPrimaryMouseMove, 25, false);
        this.onSecondaryMouseMoveThrottled = useThrottleFn(this.onSecondaryMouseMove, 25, false);
        // Throttle touchmove events
        this.onPrimaryTouchMoveThrottled = useThrottleFn(this.onPrimaryTouchMove, 25, false);
        this.onSecondaryTouchMoveThrottled = useThrottleFn(this.onSecondaryTouchMove, 25, false);
    },
    methods: {
        /**
         * Mouse Events handlers
         */
        onPrimaryMouseDown() {
            if (this.disabled || this.loading) return;
            // Cache dimensions and positions values needed for the calculation of the thumb positions
            this.cacheDimensions();
            // Attach primary mousemove and general mouseup listener
            document.addEventListener('mousemove', this.onPrimaryMouseMoveThrottled, false);
            document.addEventListener('mouseup', this.onMouseUp, false);
        },
        onPrimaryMouseMove(event) {
            // Calculate position of primary thumb based on the mouse X coordinate
            this.primaryPosition = this.getRelativePosition(event.pageX);
        },
        onSecondaryMouseDown() {
            if (this.disabled || this.loading) return;

            // Cache dimensions and positions values needed for the calculation of the thumb positions
            this.cacheDimensions();
            // Attach secondary mousemove and general mouseup listener
            document.addEventListener('mousemove', this.onSecondaryMouseMoveThrottled, false);
            document.addEventListener('mouseup', this.onMouseUp, false);
        },
        onSecondaryMouseMove(event) {
            // Calculate position of secondary thumb based on the mouse X coordinate
            this.secondaryPosition = this.getRelativePosition(event.pageX);
        },
        onMouseUp() {
            // Remove all event listeners
            document.removeEventListener('mousemove', this.onPrimaryMouseMoveThrottled, false);
            document.removeEventListener('mousemove', this.onSecondaryMouseMoveThrottled, false);
            document.removeEventListener('mouseup', this.onMouseUp, false);
            // Emit input event
            this.emitInputEvent();
        },
        /**
         * Touch Events handlers
         */
        onPrimaryTouchStart() {
            if (this.disabled) return;
            // Cache dimensions and positions values needed for the calculation of the thumb positions
            this.cacheDimensions();
            // Attach primary touchmove and general touchend listener
            document.addEventListener('touchmove', this.onPrimaryTouchMoveThrottled);
            document.addEventListener('touchend', this.onTouchEnd);
        },
        onPrimaryTouchMove(event) {
            event.preventDefault();
            // Calculate position of primary thumb based on the fingers X coordinate
            this.primaryPosition = this.getRelativePosition(event.touches[0].clientX);
        },
        onSecondaryTouchStart() {
            if (this.disabled) return;
            // Cache dimensions and positions values needed for the calculation of the thumb positions
            this.cacheDimensions();
            // Attach secondary touchmove and general touchend listener
            document.addEventListener('touchmove', this.onSecondaryTouchMoveThrottled);
            document.addEventListener('touchend', this.onTouchEnd);
        },
        onSecondaryTouchMove(event) {
            event.preventDefault();
            // Calculate position of secondary thumb based on the fingers X coordinate
            this.secondaryPosition = this.getRelativePosition(event.touches[0].clientX);
        },
        onTouchEnd() {
            // Remove all event listeners
            document.removeEventListener('touchmove', this.onPrimaryTouchMoveThrottled);
            document.removeEventListener('touchmove', this.onSecondaryTouchMoveThrottled);
            document.removeEventListener('touchend', this.onTouchEnd);
            // Emit input event
            this.emitInputEvent();
        },
        /**
         * Emit input event
         */
        emitInputEvent() {
            // Check which value is the lowest
            const fromValue = this.primaryValue <= this.secondaryValue ? this.primaryValue : this.secondaryValue;
            // Check which value is the highest
            const toValue = this.primaryValue <= this.secondaryValue ? this.secondaryValue : this.primaryValue;
            // Emit input event with the from and to value
            this.$emit('input', {
                from: fromValue,
                to: toValue,
            });
        },
        /**
         * Caches values needed for the calculation of the thumb positions
         */
        cacheDimensions() {
            this.trackWidth = this.$refs.track.offsetWidth;
            this.trackX = this.$refs.track.getBoundingClientRect().left;
        },
        /**
         * Converts a value to a percentage based position
         */
        getPositionFromValue(value) {
            return (100 / (this.max - this.min)) * value - (this.min / (this.max - this.min)) * 100;
        },
        /**
         * Converts an absolute x coordinate to a percentage based x coordinate relative to the track
         */
        getRelativePosition(x) {
            // Calculate the pixel position of the cursor relative to the track
            const relativeX = x - this.trackX;
            // Calculate the percentage based position of the cursor based on the width of the track
            let position = (relativeX / this.trackWidth) * 100;
            // Check if the value should be snapped to specific step size
            if (this.step) {
                // Snap to to specific step size (using a percentage based step value)
                position = Math.round(position / this.stepPercentage) * this.stepPercentage;
            }
            // Limit the percentage value between 0% and 100%
            position = Math.min(Math.max(position, 0), 100);
            // Return the percentage value
            return position;
        },
    },
};
</script>

<style lang="scss">

.lv-range-slider {
    $self: &;

    position: relative;
    align-items: center;
    box-sizing: border-box;
    padding-top: 9px;
    height: 40px;

    &--disabled {
        #{$self}__thumb {
            cursor: default;

            &::after {
                background-color: var(--border-color);
            }
        }

        #{$self}__amount {
            color: var(--text-color-dimmed);
        }

        #{$self}__indicator {
            background-color: var(--color-default);
        }
    }

    &--loading {
        #{$self}__thumb {
            cursor: default;

            &::after {
                background-color: var(--border-color);
            }
        }

        #{$self}__amount {
            color: var(--text-color-dimmed);
        }

        #{$self}__indicator {
            background-color: var(--color-default);
        }
    }

    &--invalid {
        #{$self}__amount {
            color: var(--color-danger);
        }

        #{$self}__indicator {
            background-color: var(--color-danger);
        }
    }

    &__thumb {
        display: flex;
        position: absolute;
        top: -15px;
        left: -10px;
        flex-direction: row;
        justify-content: center;
        transform: translateX(-50%);
        cursor: pointer;
        padding: 10px;

        &::after {
            transition: background-color 0.2s;
            margin-top: -1px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #cacaca;
            border-radius: 100%;
            background-color: var(--background-color);
            width: 14px;
            height: 14px;
            content: '';
        }
    }

    &__amounts {
        display: flex;
        margin-top: 8px;
    }

    &__amount {
        position: relative;
        color: var(--text-color);
        font-weight: bold;
        font-size: 12px;

        &--secondary {
            margin-left: auto;
        }
    }

    &__indicator {
        position: absolute;
        top: 0;
        bottom: 0;
        transition: background-color 0.2s;
        background-color: var(--color-primary);
        height: 4px;
    }

    &__track {
        position: relative;
        transition: background-color 0.2s;
        border-radius: 4px;
        background-color: var(--border-color);
        padding: 0 7px;
        height: 4px;
    }

    &__track-limits {
        position: relative;
    }

    &__loader {
        animation: rotate-cw 1s infinite linear;
    }
}
</style>
