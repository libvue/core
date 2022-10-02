<template>
    <div class="lv-table" :class="classObject">
        <table class="lv-table__table">
            <!-- Table Head -->
            <thead v-if="!hideHead" class="lv-table__table-head">
                <tr class="lv-table__row">
                    <th v-for="(column, columnKey) in columns" :key="columnKey" class="lv-table__cell" :class="getCellModifiers(column)">
                        {{ column.title || columnKey }}
                    </th>
                </tr>
            </thead>

            <!-- Grouped Rows (With separate tbody's) -->
            <template v-if="groupRowsBy">
                <tbody v-for="(group, groupKey, groupIndex) in groupedParsedRows" :key="groupIndex" class="lv-table__table-body">
                    <tr :key="groupIndex">
                        <td :colspan="visibleColumnCount" class="lv-table__cell lv-table__cell--bold lv-table__cell--group-title">{{ groupKey }}</td>
                    </tr>
                    <!-- Normal Rows -->
                    <tr v-for="(row, rowIndex) in group" :key="`${groupIndex}${rowIndex}`" class="lv-table__row">
                        <!-- Create a cell for each key in a row if the key exists in columns -->
                        <template v-for="(value, rowKey) in row">
                            <td
                                v-if="typeof columns[rowKey] !== 'undefined'"
                                :key="`${groupIndex}${rowKey}`"
                                class="lv-table__cell"
                                :class="getCellModifiers(columns[rowKey])"
                            >
                                <!-- Make it slotable with props so you can mutate the data where you use it! -->
                                <slot :name="rowKey" :value="value" :row="row">
                                    {{ value }}
                                </slot>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </template>

            <!-- Normal rows -->
            <tbody v-else class="lv-table__table-body">
                <!-- No Rows -->
                <tr v-if="!hasRows" class="lv-table__row">
                    <td class="lv-table__cell lv-table__cell--no-data">
                        <lv-icon name="ban" />
                        {{ noDataText }}
                    </td>
                </tr>

                <!-- Normal Rows -->
                <tr v-for="(row, rowIndex) in parsedRows" :key="rowIndex" class="lv-table__row">
                    <!-- Create a cell for each key in a row if the key exists in columns -->
                    <template v-for="(value, rowKey) in row">
                        <td
                            v-if="typeof columns[rowKey] !== 'undefined'"
                            :key="rowKey"
                            class="lv-table__cell"
                            :class="getCellModifiers(columns[rowKey])"
                        >
                            <!-- Make it slotable with props so you can mutate the data where you use it! -->
                            <slot :name="rowKey" :value="value" :row="row">
                                {{ value }}
                            </slot>
                        </td>
                    </template>
                </tr>
            </tbody>

            <!-- Table Foot (Totals) -->
            <tfoot v-if="showFoot" class="lv-table__table-foot">
                <!-- Totals -->
                <tr v-if="showTotalsRow" class="lv-table__row lv-table__row--totals">
                    <td v-for="(columnData, columnKey, index) in columns" :key="index" class="lv-table__cell" :class="getCellModifiers(columnData)">
                        <template v-if="index === 0">
                            <template v-if="columnData.totals">
                                {{ getTotal(columnKey, columnData.totals) }}
                            </template>
                            <template v-else> Total </template>
                        </template>
                        <template v-else-if="columnData.totals">
                            {{ getTotal(columnKey, columnData.totals) }}
                        </template>
                    </td>
                </tr>
                <!-- Averages -->
                <tr v-if="showAverageRow" class="lv-table__row lv-table__row--average">
                    <td v-for="(columnData, columnKey, index) in columns" :key="index" class="lv-table__cell" :class="getCellModifiers(columnData)">
                        <template v-if="index === 0">
                            <template v-if="columnData.averages">
                                {{ getAverage(columnKey, columnData.averages) }}
                            </template>
                            <template v-else> Average </template>
                        </template>
                        <template v-else-if="columnData.averages">
                            {{ getAverage(columnKey, columnData.averages) }}
                        </template>
                    </td>
                </tr>
                <!-- footerRows -->
                <tr v-for="(row, rowIndex) in footerRows" :key="rowIndex" class="lv-table__row">
                    <!-- Create a cell for each key in a row if the key exists in columns -->
                    <template v-for="(value, rowKey) in row">
                        <td
                            v-if="typeof columns[rowKey] !== 'undefined'"
                            :key="rowKey"
                            class="lv-table__cell"
                            :class="getCellModifiers(columns[rowKey])"
                        >
                            <!-- Make it slotable with props so you can mutate the data where you use it! -->
                            <slot :name="rowKey" :value="value" :row="row">
                                {{ value }}
                            </slot>
                        </td>
                    </template>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import useNumber from "../../composables/number";

export default {
    props: {
        /**
         * columns
         * @optional
         * @format [{ id: Number, ...args }]
         */
        rows: {
            type: Array,
            default: () => [],
        },
        /**
         * columns
         * @optional
         * @format { id: <String | Object({ title?: <String>, totals?: <Boolean|Function> average?: <Boolean|Function> ,hidden?: <Boolean|Function>, align?: <String(left|center|right)>, fitContent?: <Boolean|Function> })> }
         */
        columns: {
            type: Object,
            default: () => ({}),
        },
        /**
         * footerRows
         * @optional
         * @format [{ id: Number, ...args }]
         *
         */
        footerRows: {
            type: Array,
            default: () => [],
        },
        /**
         * footerColumns
         * @optional
         * @format { id: <String | Object({ title?: <String>, hidden?: <Boolean|Function>, align?: <String(left|center|right)>, fitContent?: <Boolean|Function> })> }
         * @note Preferably use columns.totals if you want totals
         */
        footerColumns: {
            type: Object,
            default: () => ({}),
        },
        bordered: {
            type: Boolean,
            default: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        hideHead: {
            type: Boolean,
            default: false,
        },
        hideRowLines: {
            type: Boolean,
            default: false,
        },
        condensed: {
            type: Boolean,
            default: false,
        },
        noDataText: {
            type: String,
            default: 'Geen data beschikbaar',
        },
        groupRowsBy: {
            type: String,
            default: null,
        },
        horizontalScroll: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        parsedRows() {
            const parsedRows = [];
            // Pick only the given columns from the rows
            // And froce the order in the columns in each row
            this.rows.forEach((row) => {
                const newRow = {};
                // Get only the given columns
                Object.keys(this.columns).forEach((column) => {
                    if (typeof row[column] !== 'undefined') {
                        newRow[column] = row[column];
                    }
                });
                // Add the groupRowsBy column
                if (this.groupRowsBy && row[this.groupRowsBy]) {
                    newRow[this.groupRowsBy] = row[this.groupRowsBy];
                }
                parsedRows.push(newRow);
            });
            // If groupRowsBy is set, sort the rows by groupRowsBy value
            return parsedRows;
        },
        groupedParsedRows() {
            if (this.groupRowsBy) {
                // First sort the rows by field name
                const groups = {};
                this.parsedRows.forEach((row) => {
                    if (!groups[row[this.groupRowsBy]]) {
                        groups[row[this.groupRowsBy]] = [];
                    }
                    groups[row[this.groupRowsBy]].push(row);
                });
                return groups;
            }
            return false;
        },
        hasRows() {
            return this.rows.length > 0;
        },
        visibleColumnCount() {
            return Object.keys(this.columns).length;
        },
        showFoot() {
            let showFoot = false;
            Object.entries(this.columns).forEach(([, column]) => {
                if (column.totals || column.averages) {
                    showFoot = true;
                }
            });
            return showFoot;
        },
        showTotalsRow() {
            let showTotalsRow = false;
            Object.entries(this.columns).forEach(([, column]) => {
                if (column.totals) {
                    showTotalsRow = true;
                }
            });
            return showTotalsRow;
        },
        showAverageRow() {
            let showAverageRow = false;
            Object.entries(this.columns).forEach(([, column]) => {
                if (column.averages) {
                    showAverageRow = true;
                }
            });
            return showAverageRow;
        },
        classObject() {
            return {
                'lv-table--bordered': !!this.bordered,
                'lv-table--condensed': !!this.condensed,
                'lv-table--hide-row-lines': !!this.hideRowLines,
                'lv-table--loading': !!this.loading,
                'lv-table--horizontal-scroll': !!this.horizontalScroll,
            };
        },
    },
    methods: {
        getTotal(columnKey, callback) {
            let total = 0;
            this.rows.forEach((row) => {
                total += Number.parseFloat(row[columnKey], 10);
            });
            // Check if type of totals is a function, use it as a formatter
            if (typeof callback === 'function') {
                return callback(total);
            }
            return useNumber(total);
        },
        getAverage(columnKey, callback) {
            let total = this.getTotal(columnKey);
            const average = total / this.rows.length;

            // Check if type of totals is a function, use it as a formatter
            if (typeof callback === 'function') {
                return callback(average);
            }
            return useNumber(average);
        },
        getCellModifiers(column) {
            const classes = [];
            if (column.align && column.align === 'right') {
                classes.push('lv-table__cell--align-right');
            }
            if (column.align && column.align === 'center') {
                classes.push('lv-table__cell--align-center');
            }
            if (column.fitContent) {
                classes.push('lv-table__cell--fit-content');
            }
            if (column.bold) {
                classes.push('lv-table__cell--bold');
            }
            if (column.italic) {
                classes.push('lv-table__cell--italic');
            }
            return classes;
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';
.lv-table {
    $self: &;
    font-size: $font-size;
    /* Elements */
    &__table {
        border-collapse: collapse;
        width: 100%;
        &-head {
            th {
                font-weight: bold;

                padding: 0.75rem 0.25rem;
            }
        }
        &-body {
            border-bottom: 8px solid $background-color;
            &:last-of-type {
                border-bottom: none;
            }
            &:last-of-type:not(:first-of-type) {
                tr:last-of-type td {
                    padding-bottom: 1rem;
                }
            }
            tr {
                border-top: 1px solid lighten($border-color, 8);
                td {
                    padding: 0.75rem 0.25rem;
                }
            }
        }
        &-foot {
            tr {
                &:first-of-type {
                    td {
                        padding-top: 0.75rem;
                    }
                }
                &:nth-of-type(2n) {
                    td {
                        padding-top: 0;
                    }
                }
                td {
                    font-weight: 600;
                    padding: 0.75rem 0.25rem;
                }
            }
        }
    }
    &__row {
        &:last-of-type {
            border-bottom: none;
        }

        &:first-of-type {
            #{$self}__cell--group-title {
                padding-top: 0;
            }
        }
    }
    &__cell {
        text-align: left;
        &--align-right {
            text-align: right;
        }
        &--align-center {
            text-align: center;
        }
        &--fit-content {
            width: 0;
        }
        &--no-data {
            opacity: 0.5;
        }
        &--bold {
            font-weight: 600;
        }
        &--italic {
            font-style: italic;
        }
    }
    /* Modifiers */
    &--bordered {
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0.5rem 1rem;
        box-shadow: $shadow;
    }
    &--hide-row-lines {
        #{$self}__table-body tr {
            border-top: none;
        }
    }
    &--condensed {
        padding: 0.75rem 1rem;
        #{$self}__table-head th,
        #{$self}__table-foot td,
        #{$self}__table-body td {
            padding: 0.3rem 0.25rem;
        }
    }
    &--horizontal-scroll {
        overflow-y: auto; // enables y scrolling on mobile
        #{$self}__table-body tr td,
        #{$self}__table-head th {
            white-space: nowrap;
        }
    }
}
</style>
