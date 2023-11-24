<template>
    <div ref="datepicker" class="lv-date-picker" :class="classObject">
        <lv-input
            class="lv-date-picker__input"
            :icon="range ? 'calendar-range' : 'calendar-days'"
            :model-value="inputModelValue"
            :placeholder="range ? 'Pick a date range' : 'Pick a date'"
            @focus="onFocusInput"
        ></lv-input>
        <transition name="dropdown">
            <lv-card v-if="dropdownVisible || inline" class="lv-date-picker__dropdown">
                <!-- Top Navigation -->
                <div class="lv-date-picker__navigation">
                    <lv-button
                        class="lv-date-picker__prev-month"
                        icon="arrow-left"
                        color="ghost-default"
                        @click="onClickPrevMonth"
                    />
                    <lv-select
                        class="lv-date-picker__month-select"
                        :options="monthSelectOptions"
                        :model-value="monthSelectModel"
                        @update:modelValue="onChangeMonth"
                        :clearable="false"
                    />
                    <lv-select
                        class="lv-date-picker__month-select"
                        :options="yearSelectOptions"
                        :model-value="yearSelectModel"
                        @update:modelValue="onChangeYear"
                        :clearable="false"
                    />
                    <lv-button
                        class="lv-date-picker__next-month"
                        icon="arrow-right"
                        color="ghost-default"
                        @click="onClickNextMonth"
                    />
                </div>
                <div class="lv-date-picker__content">
                    <!-- Day of Week days -->
                    <div class="lv-date-picker__dow-days">
                        <div class="lv-date-picker__dow-day">Su</div>
                        <div class="lv-date-picker__dow-day">Sa</div>
                        <div class="lv-date-picker__dow-day">Mo</div>
                        <div class="lv-date-picker__dow-day">Tu</div>
                        <div class="lv-date-picker__dow-day">We</div>
                        <div class="lv-date-picker__dow-day">Th</div>
                        <div class="lv-date-picker__dow-day">Fr</div>
                    </div>
                    <!-- Day of Month days -->
                    <div class="lv-date-picker__dom-days">
                        <div
                            v-for="(day, index) in selectedMonthDays"
                            :key="index"
                            class="lv-date-picker__dom-day"
                            :class="{
                                'lv-date-picker__dom-day--dimmed': day.isDimmed,
                                'lv-date-picker__dom-day--today': day.isToday,
                                'lv-date-picker__dom-day--start-date': day.isStartDate,
                                'lv-date-picker__dom-day--end-date': day.isEndDate,
                                'lv-date-picker__dom-day--in-range': day.isInRange,
                            }"
                            @click="onClickDomDay(day)"
                        >
                            {{ day.day }}
                        </div>
                    </div>
                </div>
            </lv-card>
        </transition>
        <lv-spinner v-if="loading" class="lv-input__loading" />
    </div>
</template>

<script>
import { onClickOutside } from '@vueuse/core';
import {
    format,
    addDays,
    parse,
    getMonth,
    getYear,
    getDay,
    getDaysInMonth,
    startOfMonth,
    endOfMonth,
    sub,
    add,
    set,
    isToday,
    isEqual,
    isBefore,
    isAfter,
} from 'date-fns';
import LvInput from "../LvInput/LvInput.vue";
import LvCard from "../LvCard/LvCard.vue";
import LvButton from "../LvButton/LvButton.vue";
import LvSelect from "../LvSelect/LvSelect.vue";

export default {
    components: { LvSelect, LvButton, LvCard, LvInput },
    props: {
        ioFormat: {
            type: String,
            default: 'yyyy-MM-dd',
        },
        range: {
            type: Boolean,
            default: false,
        },
        start: {
            type: String,
            default: (props) => format(new Date(), props.ioFormat),
        },
        end: {
            type: String,
            default: (props) => format(addDays(new Date(), 7), props.ioFormat),
        },
        yearSelectRange: {
            type: Object,
            default: () => ({ from: 2000, to: 2030 }),
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        inline: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:start', 'update:end'],
    data() {
        return {
            dropdownVisible: false,
            monthSelectModel: null,
            yearSelectModel: null,
            monthSelectOptions: [
                { value: 0, label: 'January' },
                { value: 1, label: 'February' },
                { value: 2, label: 'March' },
                { value: 3, label: 'April' },
                { value: 4, label: 'May' },
                { value: 5, label: 'June' },
                { value: 6, label: 'July' },
                { value: 7, label: 'August' },
                { value: 8, label: 'September' },
                { value: 9, label: 'October' },
                { value: 10, label: 'November' },
                { value: 11, label: 'December' },
            ],
        };
    },
    computed: {
        classObject() {
            return {
                'lv-date-picker--inline': this.inline,
                'lv-date-picker--disabled': this.disabled || this.loading,
                'lv-date-picker--loading': this.loading,
            };
        },
        inputModelValue() {
            if (this.range) {
                return `${this.start || '...'} → ${this.end || '...'}`;
            }
            return `${this.start || '...'}`;
        },
        startDate() {
            return this.start ? parse(this.start, this.ioFormat, new Date()) : null;
        },
        startDateMonth() {
            return getMonth(this.startDate);
        },
        startDateYear() {
            return getYear(this.startDate);
        },
        endDate() {
            return this.end ? parse(this.end, this.ioFormat, new Date()) : null;
        },
        selectedMonth() {
            const selectedMonth = {};

            // Set the month
            selectedMonth.month = this.monthSelectModel;

            // Set the year
            selectedMonth.year = this.yearSelectModel;

            // Set days in month
            if (this.yearSelectModel && this.monthSelectModel) {
                selectedMonth.daysInMonth = getDaysInMonth(
                    new Date(this.yearSelectModel, this.monthSelectModel)
                );
            } else {
                selectedMonth.daysInMonth = 30;
            }

            // Set days in previous month
            if (this.yearSelectModel && this.monthSelectModel) {
                selectedMonth.daysInPrevMonth = getDaysInMonth(
                    sub(new Date(this.yearSelectModel, this.monthSelectModel), { months: 1 })
                );
            } else {
                selectedMonth.daysInPrevMonth = 30;
            }

            // Set days in next month
            if (this.yearSelectModel && this.monthSelectModel) {
                selectedMonth.daysInNextMonth = getDaysInMonth(
                    add(new Date(this.yearSelectModel, this.monthSelectModel), { months: 1 })
                );
            } else {
                selectedMonth.daysInNextMonth = 30;
            }

            // Set start of month
            if (this.yearSelectModel && this.monthSelectModel) {
                selectedMonth.startOfMonth = getDay(
                    startOfMonth(new Date(this.yearSelectModel, this.monthSelectModel))
                );
            } else {
                selectedMonth.startOfMonth = 1;
            }

            // Set end of month
            if (this.yearSelectModel && this.monthSelectModel) {
                selectedMonth.endOfMonth = getDay(
                    endOfMonth(new Date(this.yearSelectModel, this.monthSelectModel))
                );
            } else {
                selectedMonth.endOfMonth = 31;
            }

            return selectedMonth;
        },
        selectedMonthDays() {
            const selectedMonthDays = [];

            // Add previous month days
            if (this.selectedMonth.startOfMonth > 0) {
                Array.from(new Array(this.selectedMonth.startOfMonth).keys()).forEach((offset) => {
                    const day = this.selectedMonth.daysInPrevMonth - this.selectedMonth.startOfMonth + offset + 1;
                    const date = set(sub(new Date(this.selectedMonth.year, this.selectedMonth.month), { months: 1 }), {
                        date: day,
                    });

                    selectedMonthDays.push({
                        day,
                        date,
                        isStartDate: isEqual(date, this.startDate),
                        isEndDate: this.range && isEqual(date, this.endDate),
                        isInRange:
                            this.range &&
                            this.startDate &&
                            this.endDate &&
                            isAfter(date, this.startDate) &&
                            isBefore(date, this.endDate),
                        isDimmed: true,
                        isToday: isToday(date),
                    });
                });
            }

            // Add current month days
            Array.from(new Array(this.selectedMonth.daysInMonth).keys()).forEach((day) => {
                const date = new Date(this.selectedMonth.year, this.selectedMonth.month, day + 1);
                selectedMonthDays.push({
                    day: day + 1,
                    date,
                    isStartDate: isEqual(date, this.startDate),
                    isEndDate: this.range && isEqual(date, this.endDate),
                    isInRange:
                        this.range &&
                        !!this.startDate &&
                        !!this.endDate &&
                        isAfter(date, this.startDate) &&
                        isBefore(date, this.endDate),
                    isDimmed: this.range && this.startDate && isBefore(date, this.startDate),
                    isToday: isToday(date),
                });
            });

            if (selectedMonthDays.length % 7 > 0) {
                Array.from(new Array(7 - (selectedMonthDays.length % 7)).keys()).forEach((offset) => {
                    const date = set(add(new Date(this.selectedMonth.year, this.selectedMonth.month), { months: 1 }), {
                        date: offset + 1,
                    });
                    selectedMonthDays.push({
                        day: offset + 1,
                        date,
                        isStartDate: isEqual(date, this.startDate),
                        isEndDate: this.range && isEqual(date, this.endDate),
                        isInRange:
                            this.range &&
                            this.startDate &&
                            this.endDate &&
                            isAfter(date, this.startDate) &&
                            isBefore(date, this.endDate),
                        isDimmed: true,
                        isToday: isToday(date),
                    });
                });
            }

            return selectedMonthDays;
        },
        yearSelectOptions() {
            const yearSelectOptions = [];
            let iterator = 0;
            Array.from(new Array(this.yearSelectRange.to - this.yearSelectRange.from + 1)).forEach(() => {
                yearSelectOptions.push({
                    value: this.yearSelectRange.from + iterator,
                    label: this.yearSelectRange.from + iterator,
                });
                iterator += 1;
            });
            return yearSelectOptions;
        },
    },
    mounted() {
        this.setMonthSelectToStartDate();
        this.setYearSelectToStartDate();

        onClickOutside(this.$refs.datepicker, () => {
            this.dropdownVisible = false;
        });
    },
    methods: {
        onChangeMonth(value) {
            this.monthSelectModel = value;
        },
        onChangeYear(value) {
            this.yearSelectModel = value;
        },
        setMonthSelectToStartDate() {
            // First try to select the month if startDate is set
            const optionByStartDate = this.monthSelectOptions.find((i) => i.value === this.startDateMonth);
            if (optionByStartDate) {
                this.monthSelectModel = optionByStartDate.value;
            } else {
                // Otherwise fallback to the month of today
                this.monthSelectModel = this.monthSelectOptions.find((i) => i.value === getMonth(new Date())).value;
            }
        },
        setYearSelectToStartDate() {
            // First try to select the year if startDate is set
            const optionByStartDate = this.yearSelectOptions.find((i) => i.value === this.startDateYear);
            if (optionByStartDate) {
                this.yearSelectModel = optionByStartDate.value;
            } else {
                // Otherwise fallback to this year
                this.yearSelectModel = this.yearSelectOptions.find((i) => i.value === getYear(new Date())).value;
            }
        },
        onClickDomDay(day) {
            // If not in range mode, simply emit the update:start
            if (!this.range) {
                this.$emit('update:start', format(day.date, this.ioFormat));
            } else if (this.startDate && isEqual(this.startDate, day.date)) {
                this.$emit('update:start', null);
                this.$emit('update:end', null);
            } else if (!this.startDate || (this.startDate && isBefore(day.date, this.startDate))) {
                this.$emit('update:start', format(day.date, this.ioFormat));
            } else {
                this.$emit('update:end', format(day.date, this.ioFormat));
            }
        },
        onClickPrevMonth() {
            // Get current value of monthSelect, add one
            const currentMonth = this.monthSelectModel;
            const currentYear = this.yearSelectModel;
            // Check if december, then go to january and add a year
            if (currentMonth === 0) {
                this.yearSelectModel = this.yearSelectOptions.find((i) => i.value === currentYear - 1).value;
                this.monthSelectModel = this.monthSelectOptions.find((i) => i.value === 11).value;
            } else {
                this.monthSelectModel = this.monthSelectOptions.find((i) => i.value === currentMonth - 1).value;
            }
        },
        onClickNextMonth() {
            // Get current value of monthSelect, add one
            const currentMonth = this.monthSelectModel;
            const currentYear = this.yearSelectModel;
            // Check if december, then go to january and add a year
            if (currentMonth === 11) {
                this.yearSelectModel = this.yearSelectOptions.find((i) => i.value === currentYear + 1).value;
                this.monthSelectModel = this.monthSelectOptions.find((i) => i.value === 0).value;
            } else {
                this.monthSelectModel = this.monthSelectOptions.find((i) => i.value === currentMonth + 1).value;
            }
        },
        onFocusInput() {
            this.dropdownVisible = true;
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/animations/animations';

.lv-date-picker {
    $self: &;
    position: relative;

    &__dropdown {
        position: absolute;
        z-index: var(--z-dropdown);
        margin-top: calc(var(--padding) * 0.5);
        max-width: 350px;
    }
    &__navigation {
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        width: 100%;
    }
    &__month-select {
        width: 100%;
    }
    &__dow-days {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 0.5rem;
        margin: 0.25rem 0;
        width: 100%;
    }
    &__dow-day {
        box-sizing: border-box;
        border-radius: 3px;
        padding: 0.5rem;
        text-align: center;
    }
    &__dom-days {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 0.5rem;
        margin: 0.25rem 0;
        width: 100%;
    }
    &__dom-day {
        position: relative;
        transition: var(--transition-time) all;
        cursor: pointer;
        box-sizing: border-box;
        border-radius: 3px;
        padding: 0.5rem;
        text-align: center;

        &:hover:not(&--start-date):not(&--end-date) {
            transform: scale(1.2);
            background-color: var(--border-color-light);
        }

        &--dimmed {
            color: var(--text-color-dimmed);
        }

        &--today {
            &:after {
                position: absolute;
                bottom: 4px;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 2px;
                background-color: var(--border-color);
                width: 10px;
                height: 2px;
                content: '';
            }
        }

        &--end-date,
        &--start-date {
            background-color: var(--color-primary);
            color: var(--text-color-inverted);
            &::after {
                background-color: var(--text-color-inverted);
            }
        }

        &--disabled {
            opacity: 0.3;
            pointer-events: none;
        }

        &--in-range {
            background-color: var(--color-primary-dimmed);
        }
    }

    &--inline {
        #{$self}__input {
            display: none;
        }
        #{$self}__dropdown {
            position: relative;
            margin-top: 0;
            box-shadow: none;
            border: 0;
            padding: 0;
            max-width: inherit;
        }
    }


    &__loading {
        position: absolute;
        top: 50%;
        right: calc(var(--padding) - 2px);
        margin-top: -0.5em;
        background-color: var(--border-color-light);
        color: var(--text-color-dimmed);
    }

    &--disabled {
        opacity: 1;
        pointer-events: none;
        user-select: none;
        #{$self}__icon {
            color: var(--placeholder-color);
        }
        #{$self}__input {
            background-color: var(--border-color-light);
            &::placeholder {
                color: var(--placeholder-color);
            }
        }
    }
}
</style>
