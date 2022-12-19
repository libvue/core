<template>
    <div class="lv-table" :class="classObject" role="table">
        <div v-if="loading" class="lv-table__loading">
            <lv-spinner />
        </div>
        <table class="lv-table__table">
            <!-- Table Head -->
            <thead v-if="!hideHead" class="lv-table__table-head">
                <tr class="lv-table__row">
                    <th
                        v-for="(column, columnKey) in columns"
                        :key="columnKey"
                        class="lv-table__cell"
                        :class="getCellModifiers(column)"
                        @click="column.sortable ? onClickHeadCell(columnKey) : false"
                    >
                        <div class="lv-table__cell-container">
                            {{ typeof column.title !== 'undefined' ? column.title : columnKey }}
                            <lv-icon
                                class="lv-table__sort-icon"
                                :name="sort && columnKey === sort.replace('-', '') && sort.startsWith('-') ? 'chevron-up' : 'chevron-down'"
                                :class="{ 'lv-table__sort-icon--active': sort && columnKey === sort.replace('-', '') }"
                            />
                        </div>
                    </th>
                </tr>
            </thead>

            <!-- Grouped Rows (With separate tbody's) -->
            <template v-if="groupRowsBy">
                <tbody
                    v-for="(group, groupKey, groupIndex) in groupedParsedRows"
                    :key="groupIndex"
                    class="lv-table__table-body"
                >
                    <tr :key="groupIndex">
                        <td
                            :colspan="visibleColumnCount"
                            class="lv-table__cell lv-table__cell--bold lv-table__cell--group-title"
                        >
                            {{ groupKey }}
                        </td>
                    </tr>
                    <!-- Normal Rows -->
                    <tr
                        v-for="(row, rowIndex) in group"
                        :key="`${groupIndex}${rowIndex}`"
                        class="lv-table__row"
                        @click.stop="onClickRow(rowIndex)"
                    >
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
                    <td class="lv-table__cell lv-table__cell--no-data" :colspan="Object.entries(columns).length">
                        {{ noDataText }}
                    </td>
                </tr>

                <!-- Normal Rows -->
                <tr
                    v-for="(row, rowIndex) in parsedRows"
                    :key="rowIndex"
                    class="lv-table__row"
                    @click.stop="onClickRow(rowIndex)"
                >
                    <!-- Create a cell for each key in a row if the key exists in columns -->
                    <template v-for="(value, rowKey) in row">
                        <td
                            v-if="typeof columns[rowKey] !== 'undefined'"
                            :key="rowKey"
                            class="lv-table__cell"
                            :class="getCellModifiers(columns[rowKey])"
                        >
                            <!-- Make it slotable with props so you can mutate the data where you use it! -->
                            <slot :name="rowKey" :value="value" :row="rows[rowIndex]">
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
                    <td
                        v-for="(columnData, columnKey, index) in columns"
                        :key="index"
                        class="lv-table__cell"
                        :class="getCellModifiers(columnData)"
                    >
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
                    <td
                        v-for="(columnData, columnKey, index) in columns"
                        :key="index"
                        class="lv-table__cell"
                        :class="getCellModifiers(columnData)"
                    >
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
import useNumber from '../../composables/number';

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
        loading: {
            type: Boolean,
            default: false,
        },
        rowHoverEffect: {
            type: Boolean,
            default: true,
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
            default: 'No data available',
        },
        groupRowsBy: {
            type: String,
            default: null,
        },
        horizontalScroll: {
            type: Boolean,
            default: true,
        },
        rowAction: {
            type: Function,
            default: null,
        },
        sort: {
            type: String,
            default: null,
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
                    } else {
                        // Just add it for cases like options/actions etc.
                        newRow[column] = null;
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
                'lv-table--condensed': !!this.condensed,
                'lv-table--hide-row-lines': !!this.hideRowLines,
                'lv-table--loading': !!this.loading,
                'lv-table--horizontal-scroll': !!this.horizontalScroll,
                'lv-table--row-hover-effect': !!this.rowHoverEffect,
                'lv-table--has-row-action': typeof this.rowAction === 'function',
            };
        },
    },
    emits: ['update:sort'],
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
            const total = this.getTotal(columnKey);
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
            if (column.sortable) {
                classes.push('lv-table__cell--sortable');
            }
            return classes;
        },
        onClickRow(rowIndex) {
            if (typeof this.rowAction === 'function') {
                const clonedRow = JSON.parse(JSON.stringify(this.rows[rowIndex]));
                this.rowAction({ row: clonedRow, index: rowIndex });
            }
        },
        onClickHeadCell(columnKey) {
            if(columnKey === this.sort) {
                this.$emit('update:sort', `-${columnKey}`);
            } else if (columnKey === this.sort.replace('-', '')) {
                this.$emit('update:sort', `${columnKey}`);
            } else {
                this.$emit('update:sort', columnKey)
            }
        }
    },
};
</script>

<style lang="scss">
.lv-table {
    $self: &;
    position: relative;
    color: var(--text-color);
    font-size: var(--font-size);

    /* Elements */
    &__loading {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        z-index: 1;
        background-color: var(--backdrop-color-inverted);
        width: 100%;
        height: 100%;
    }
    &__sort-icon {
        display: none !important;
        margin-left: 0.25rem;
        opacity: 0.2;
        &--active {
            opacity: 1;
        }
    }
    &__table {
        border-collapse: collapse;
        width: 100%;
        &-head {
            th {
                padding: 0.75rem;
                font-weight: bold;
            }
        }
        &-body {
            border-bottom: 8px solid var(--background-color);
            &:last-of-type {
                border-bottom: none;
            }
            &:last-of-type:not(:first-of-type) {
                tr:last-of-type td {
                    padding-bottom: 1rem;
                }
            }
            tr {
                border-top: 1px solid var(--border-color-light);
                &:first-of-type {
                    border-top: none;
                }
                td {
                    padding: 0.75rem;
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
                    padding: 0.75rem;
                    font-weight: 600;
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
        $cell: &;

        text-align: left;
        &--align-right {
            text-align: right;
        }
        &--align-center {
            text-align: center;
        }
        &--fit-content {
            padding: 0 !important;
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

        &--sortable {
            cursor: pointer;
            #{$self}__sort-icon {
                display: block !important;
            }
        }

        &-container {
            display: inline-flex;
            align-content: center;
        }
    }
    /* Modifiers */
    &--row-hover-effect {
        #{$self}__table-body tr:hover {
            background-color: var(--table-row-hover-background-color);
        }
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
    &--has-row-action {
        #{$self}__table-body tr {
            cursor: pointer;
        }
    }
}
</style>
