<template>
    <div ref="datepicker" class="lv-date-picker" :class="classObject">
        <lv-input
            v-if="!inline"
            class="lv-date-picker__input"
            :icon="range ? 'calendar-range' : 'calendar-days'"
            :model-value="inputModelValue"
            :placeholder="range ? 'Pick a date range' : 'Pick a date'"
            readonly
            @focus="onFocusInput"
        ></lv-input>
        <transition name="dropdown">
            <lv-card v-if="dropdownVisible || inline" class="lv-date-picker__dropdown">
                <lv-flex :direction="range && rangeDirection === 'vertical' ? 'column' : 'row'" gap="1rem">
                    <!-- First Picker (for range and non range) -->
                    <div class="lv-date-picker__first">
                        <!-- Top Navigation -->
                        <div class="lv-date-picker__navigation">
                            <lv-button
                                class="lv-date-picker__prev-month"
                                icon="arrow-left"
                                color="ghost-default"
                                @click="onClickPrevFirstMonth"
                            />
                            <lv-select
                                class="lv-date-picker__month-select"
                                :options="monthSelectOptions"
                                :model-value="firstMonthSelectModel"
                                :clearable="false"
                                @update:modelValue="onChangeFirstMonth"
                            />
                            <lv-select
                                class="lv-date-picker__month-select"
                                :options="yearSelectOptions"
                                :model-value="firstYearSelectModel"
                                :clearable="false"
                                @update:modelValue="onChangeFirstYear"
                            />
                            <lv-button
                                class="lv-date-picker__next-month"
                                icon="arrow-right"
                                color="ghost-default"
                                @click="onClickNextFirstMonth"
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
                                    v-for="(day, index) in selectedFirstMonthDays"
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
                    </div>
                    <!-- Separator -->
                    <lv-separator v-if="range" :direction="rangeDirection === 'vertical' ? 'horizontal' : 'vertical'" />
                    <!-- Second Picker (for range only) -->
                    <div v-if="range" class="lv-date-picker__second">
                        <!-- Top Navigation -->
                        <div class="lv-date-picker__navigation">
                            <lv-button
                                class="lv-date-picker__prev-month"
                                icon="arrow-left"
                                color="ghost-default"
                                @click="onClickPrevSecondMonth"
                            />
                            <lv-select
                                class="lv-date-picker__month-select"
                                :options="monthSelectOptions"
                                :model-value="secondMonthSelectModel"
                                :clearable="false"
                                @update:modelValue="onChangeSecondMonth"
                            />
                            <lv-select
                                class="lv-date-picker__month-select"
                                :options="yearSelectOptions"
                                :model-value="secondYearSelectModel"
                                :clearable="false"
                                @update:modelValue="onChangeSecondYear"
                            />
                            <lv-button
                                class="lv-date-picker__next-month"
                                icon="arrow-right"
                                color="ghost-default"
                                @click="onClickNextSecondMonth"
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
                                    v-for="(day, index) in selectedSecondMonthDays"
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
                    </div>
                </lv-flex>
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
import LvInput from '../LvInput/LvInput.vue';
import LvCard from '../LvCard/LvCard.vue';
import LvButton from '../LvButton/LvButton.vue';
import LvSelect from '../LvSelect/LvSelect.vue';
import LvSeparator from '../LvSeparator/LvSeparator.vue';
import LvFlex from '../LvFlex/LvFlex.vue';
import LvSpinner from '../LvSpinner/LvSpinner.vue';

export default {
    components: { LvSpinner, LvFlex, LvSeparator, LvSelect, LvButton, LvCard, LvInput },
    props: {
        ioFormat: {
            type: String,
            default: 'yyyy-MM-dd',
        },
        range: {
            type: Boolean,
            default: false,
        },
        rangeDirection: {
            type: String,
            default: 'horizontal',
            validator: (val) => ['horizontal', 'vertical'].includes(val),
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
            firstMonthSelectModel: null,
            firstYearSelectModel: null,
            secondMonthSelectModel: null,
            secondYearSelectModel: null,
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
        selectedFirstMonth() {
            const selectedFirstMonth = {};

            // Set the month
            selectedFirstMonth.month = this.firstMonthSelectModel;

            // Set the year
            selectedFirstMonth.year = this.firstYearSelectModel;

            // Set days in month
            if (this.firstYearSelectModel && this.firstMonthSelectModel) {
                selectedFirstMonth.daysInMonth = getDaysInMonth(
                    new Date(this.firstYearSelectModel, this.firstMonthSelectModel)
                );
            } else {
                selectedFirstMonth.daysInMonth = 30;
            }

            // Set days in previous month
            if (this.firstYearSelectModel && this.firstMonthSelectModel) {
                selectedFirstMonth.daysInPrevMonth = getDaysInMonth(
                    sub(new Date(this.firstYearSelectModel, this.firstMonthSelectModel), { months: 1 })
                );
            } else {
                selectedFirstMonth.daysInPrevMonth = 30;
            }

            // Set days in next month
            if (this.firstYearSelectModel && this.firstMonthSelectModel) {
                selectedFirstMonth.daysInNextMonth = getDaysInMonth(
                    add(new Date(this.firstYearSelectModel, this.firstMonthSelectModel), { months: 1 })
                );
            } else {
                selectedFirstMonth.daysInNextMonth = 30;
            }

            // Set start of month
            if (this.firstYearSelectModel && this.firstMonthSelectModel) {
                selectedFirstMonth.startOfMonth = getDay(
                    startOfMonth(new Date(this.firstYearSelectModel, this.firstMonthSelectModel))
                );
            } else {
                selectedFirstMonth.startOfMonth = 1;
            }

            // Set end of month
            if (this.firstYearSelectModel && this.firstMonthSelectModel) {
                selectedFirstMonth.endOfMonth = getDay(
                    endOfMonth(new Date(this.firstYearSelectModel, this.firstMonthSelectModel))
                );
            } else {
                selectedFirstMonth.endOfMonth = 31;
            }

            return selectedFirstMonth;
        },
        selectedFirstMonthDays() {
            const selectedFirstMonthDays = [];

            // Add previous month days
            if (this.selectedFirstMonth.startOfMonth > 0) {
                Array.from(new Array(this.selectedFirstMonth.startOfMonth).keys()).forEach((offset) => {
                    const day =
                        this.selectedFirstMonth.daysInPrevMonth - this.selectedFirstMonth.startOfMonth + offset + 1;
                    const date = set(
                        sub(new Date(this.selectedFirstMonth.year, this.selectedFirstMonth.month), { months: 1 }),
                        {
                            date: day,
                        }
                    );

                    selectedFirstMonthDays.push({
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
            Array.from(new Array(this.selectedFirstMonth.daysInMonth).keys()).forEach((day) => {
                const date = new Date(this.selectedFirstMonth.year, this.selectedFirstMonth.month, day + 1);
                selectedFirstMonthDays.push({
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
                    isDimmed: false,
                    isToday: isToday(date),
                });
            });

            if (selectedFirstMonthDays.length % 7 > 0) {
                Array.from(new Array(7 - (selectedFirstMonthDays.length % 7)).keys()).forEach((offset) => {
                    const date = set(
                        add(new Date(this.selectedFirstMonth.year, this.selectedFirstMonth.month), { months: 1 }),
                        {
                            date: offset + 1,
                        }
                    );
                    selectedFirstMonthDays.push({
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

            return selectedFirstMonthDays;
        },
        selectedSecondMonth() {
            const selectedSecondMonth = {};

            // Set the month
            selectedSecondMonth.month = this.secondMonthSelectModel;

            // Set the year
            selectedSecondMonth.year = this.secondYearSelectModel;

            // Set days in month
            if (this.secondYearSelectModel && this.secondMonthSelectModel) {
                selectedSecondMonth.daysInMonth = getDaysInMonth(
                    new Date(this.secondYearSelectModel, this.secondMonthSelectModel)
                );
            } else {
                selectedSecondMonth.daysInMonth = 30;
            }

            // Set days in previous month
            if (this.secondYearSelectModel && this.secondMonthSelectModel) {
                selectedSecondMonth.daysInPrevMonth = getDaysInMonth(
                    sub(new Date(this.secondYearSelectModel, this.secondMonthSelectModel), { months: 1 })
                );
            } else {
                selectedSecondMonth.daysInPrevMonth = 30;
            }

            // Set days in next month
            if (this.secondYearSelectModel && this.secondMonthSelectModel) {
                selectedSecondMonth.daysInNextMonth = getDaysInMonth(
                    add(new Date(this.secondYearSelectModel, this.secondMonthSelectModel), { months: 1 })
                );
            } else {
                selectedSecondMonth.daysInNextMonth = 30;
            }

            // Set start of month
            if (this.secondYearSelectModel && this.secondMonthSelectModel) {
                selectedSecondMonth.startOfMonth = getDay(
                    startOfMonth(new Date(this.secondYearSelectModel, this.secondMonthSelectModel))
                );
            } else {
                selectedSecondMonth.startOfMonth = 1;
            }

            // Set end of month
            if (this.secondYearSelectModel && this.secondMonthSelectModel) {
                selectedSecondMonth.endOfMonth = getDay(
                    endOfMonth(new Date(this.secondYearSelectModel, this.secondMonthSelectModel))
                );
            } else {
                selectedSecondMonth.endOfMonth = 31;
            }

            return selectedSecondMonth;
        },
        selectedSecondMonthDays() {
            const selectedSecondMonthDays = [];

            // Add previous month days
            if (this.selectedSecondMonth.startOfMonth > 0) {
                Array.from(new Array(this.selectedSecondMonth.startOfMonth).keys()).forEach((offset) => {
                    const day =
                        this.selectedSecondMonth.daysInPrevMonth - this.selectedSecondMonth.startOfMonth + offset + 1;
                    const date = set(
                        sub(new Date(this.selectedSecondMonth.year, this.selectedSecondMonth.month), { months: 1 }),
                        {
                            date: day,
                        }
                    );

                    selectedSecondMonthDays.push({
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
            Array.from(new Array(this.selectedSecondMonth.daysInMonth).keys()).forEach((day) => {
                const date = new Date(this.selectedSecondMonth.year, this.selectedSecondMonth.month, day + 1);
                selectedSecondMonthDays.push({
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
                    isDimmed: false,
                    isToday: isToday(date),
                });
            });

            if (selectedSecondMonthDays.length % 7 > 0) {
                Array.from(new Array(7 - (selectedSecondMonthDays.length % 7)).keys()).forEach((offset) => {
                    const date = set(
                        add(new Date(this.selectedSecondMonth.year, this.selectedSecondMonth.month), { months: 1 }),
                        {
                            date: offset + 1,
                        }
                    );
                    selectedSecondMonthDays.push({
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

            return selectedSecondMonthDays;
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
        this.setFirstMonthSelectToStartDate();
        this.setFirstYearSelectToStartDate();
        this.setSecondMonthAndYearSelectToStartDate();
        onClickOutside(this.$refs.datepicker, () => {
            this.dropdownVisible = false;
        });
    },
    methods: {
        onChangeFirstMonth(value) {
            // Check if there is any change
            if (this.firstMonthSelectModel !== value) {
                this.firstMonthSelectModel = value;
                // Copy the month and year to the secondMonth
                this.secondMonthSelectModel = value;
                this.secondYearSelectModel = this.firstYearSelectModel;
                // Add the second
                this.addSecondMonth();
            }
        },
        onChangeFirstYear(value) {
            if(this.firstYearSelectModel !== value) {
                this.firstYearSelectModel = value;
                // Copy the year and month to the firstMonth
                this.secondYearSelectModel = value;
                this.secondMonthSelectModel = this.firstMonthSelectModel;
                // Subtract a month
                this.addSecondMonth();
            }
        },
        onChangeSecondMonth(value) {
            if(this.secondMonthSelectModel !== value) {
                this.secondMonthSelectModel = value;
                // Copy the month and year to the firstMonth
                this.firstMonthSelectModel = value;
                this.firstYearSelectModel = this.secondYearSelectModel;
                // Subtract a month
                this.subFirstMonth();
            }
        },
        onChangeSecondYear(value) {
            if(this.secondYearSelectModel !== value) {
                this.secondYearSelectModel = value;
                // Copy the year and month to the firstMonth
                this.firstYearSelectModel = value;
                this.firstMonthSelectModel = this.secondMonthSelectModel;
                // Subtract a month
                this.subFirstMonth();
            }
        },
        setFirstMonthSelectToStartDate() {
            // First try to select the month if startDate is set
            const optionByStartDate = this.monthSelectOptions.find((i) => i.value === this.startDateMonth);
            if (optionByStartDate) {
                this.firstMonthSelectModel = optionByStartDate.value;
            } else {
                // Otherwise fallback to the month of today
                this.firstMonthSelectModel = this.monthSelectOptions.find(
                    (i) => i.value === getMonth(new Date())
                ).value;
            }
        },
        setFirstYearSelectToStartDate() {
            // First try to select the year if startDate is set
            const optionByStartDate = this.yearSelectOptions.find((i) => i.value === this.startDateYear);
            if (optionByStartDate) {
                this.firstYearSelectModel = optionByStartDate.value;
            } else {
                // Otherwise fallback to this year
                this.firstYearSelectModel = this.yearSelectOptions.find((i) => i.value === getYear(new Date())).value;
            }
        },
        setSecondMonthAndYearSelectToStartDate() {
            // This must always be one month AFTER the first month
            const {firstMonthSelectModel} = this;
            const {firstYearSelectModel} = this;

            if (firstMonthSelectModel) {
                // Check if december, then go to january and add a year
                if (firstMonthSelectModel === 11) {
                    this.secondYearSelectModel = this.yearSelectOptions.find((i) => i.value === firstYearSelectModel + 1).value;
                    this.secondMonthSelectModel = this.monthSelectOptions.find((i) => i.value === 0).value;
                } else {
                    this.secondMonthSelectModel = this.monthSelectOptions.find((i) => i.value === firstMonthSelectModel + 1).value;
                    this.secondYearSelectModel = firstYearSelectModel;
                }
            } else {
                // Otherwise fallback to the month of today and add One month (TODO)
                this.secondMonthSelectModel = this.monthSelectOptions.find(
                    (i) => i.value === getMonth(new Date())
                ).value;
            }
        },
        onClickDomDay(day) {
            // If not in range mode, simply emit the update:start
            if (!this.range) {
                this.$emit('update:start', format(day.date, this.ioFormat));
            } else if (!this.startDate && !this.endDate) {
                this.$emit('update:start', format(day.date, this.ioFormat));
            } else if (this.startDate && !this.endDate) {
                // Check if enddate is before startdate then swap end and start
                if(isBefore(day.date, this.startDate)) {
                    this.$emit('update:end', format(this.startDate, this.ioFormat));
                    this.$emit('update:start', format(day.date, this.ioFormat));
                } else {
                    this.$emit('update:end', format(day.date, this.ioFormat));
                }
            } else {
                this.$emit('update:start', format(day.date, this.ioFormat));
                this.$emit('update:end', null);
            }
        },
        onClickPrevFirstMonth() {
            this.subFirstMonth();
            this.subSecondMonth();
        },
        onClickNextFirstMonth() {
            this.addFirstMonth();
            this.addSecondMonth();
        },
        onClickPrevSecondMonth() {
            this.subFirstMonth();
            this.subSecondMonth();
        },
        onClickNextSecondMonth() {
            this.addFirstMonth();
            this.addSecondMonth();
        },
        subFirstMonth() {
            // Get current value of monthSelect, add one
            const currentMonth = this.firstMonthSelectModel;
            const currentYear = this.firstYearSelectModel;
            // Check if december, then go to january and add a year
            if (currentMonth === 0) {
                this.firstYearSelectModel = this.yearSelectOptions.find((i) => i.value === currentYear - 1).value;
                this.firstMonthSelectModel = this.monthSelectOptions.find((i) => i.value === 11).value;
            } else {
                this.firstMonthSelectModel = this.monthSelectOptions.find((i) => i.value === currentMonth - 1).value;
            }
        },
        addFirstMonth() {
            // Get current value of monthSelect, add one
            const currentMonth = this.firstMonthSelectModel;
            const currentYear = this.firstYearSelectModel;
            // Check if december, then go to january and add a year
            if (currentMonth === 11) {
                this.firstYearSelectModel = this.yearSelectOptions.find((i) => i.value === currentYear + 1).value;
                this.firstMonthSelectModel = this.monthSelectOptions.find((i) => i.value === 0).value;
            } else {
                this.firstMonthSelectModel = this.monthSelectOptions.find((i) => i.value === currentMonth + 1).value;
            }
        },
        subSecondMonth(referenceMonth = this.secondMonthSelectModel, referenceYear = this.secondYearSelectModel){
            // Check if december, then go to december and subtract a year
            if (referenceMonth === 0) {
                this.secondYearSelectModel = this.yearSelectOptions.find((i) => i.value === referenceYear - 1).value;
                this.secondMonthSelectModel = this.monthSelectOptions.find((i) => i.value === 11).value;
            } else {
                this.secondMonthSelectModel = this.monthSelectOptions.find((i) => i.value === referenceMonth - 1).value;
            }
        },
        addSecondMonth(referenceMonth = this.secondMonthSelectModel, referenceYear = this.secondYearSelectModel){
            // Check if december, then go to january and add a year
            if (referenceMonth === 11) {
                this.secondYearSelectModel = this.yearSelectOptions.find((i) => i.value === referenceYear + 1).value;
                this.secondMonthSelectModel = this.monthSelectOptions.find((i) => i.value === 0).value;
            } else {
                this.secondMonthSelectModel = this.monthSelectOptions.find((i) => i.value === referenceMonth + 1).value;
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
        width: fit-content;

        > div {
            width: 100%;
            > div {
                flex-grow: 1;
            }
        }
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
        transition: var(--transition-time) background-color;
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
        #{$self}__dropdown {
            position: relative;
            margin-top: 0;
            box-shadow: none;
            border: 0;
            padding: 0;
            max-width: inherit;
            width: 100%;
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
