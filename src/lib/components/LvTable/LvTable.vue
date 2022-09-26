<template>
    <lv-card
        class="lv-table"
        :style="`--columns: ${visibleColumnCount}`"
        :class="{
            'lv-table--clickable-rows': this.clickableRows,
        }"
    >
        <!-- Columns -->
        <div class="lv-table__columns">
            <!-- Checkbox Column -->
            <div class="lv-table__column" v-if="checkable">checkbox</div>
            <!-- User Given Columns -->
            <div
                class="lv-table__column"
                :class="{
                    'lv-table__column--active-sort': column.field === sortField,
                    'lv-table__column--sortable': column.sortable,
                }"
                v-for="column in visibleColumns"
                @click="onClickColumn(column)"
            >
                {{ column.title ? column.title : column.field }}
                <lv-icon v-if="column.sortable" class="lv-table__sort" :name="sortDirection === 'asc' ? 'chevron-down' : 'chevron-up'" />
            </div>
        </div>

        <div class="lv-table__rows">
            <div class="lv-table__row" v-for="row in computedRows" @click="onClickRow(row)">
                <!-- Checkbox Cell -->
                <div class="lv-table__cell" v-if="checkable">checkbox</div>
                <!-- User Given Cells -->
                <template v-for="column in visibleColumns">
                    <div class="lv-table__cell" v-if="row[column.field]">
                        <slot :name="column.field ? column.field : column.field" :row="row" :value="row[column.field]" :column="column">
                            {{ row[column.field] }}
                        </slot>
                    </div>
                </template>
                <!-- Magic Cells -->
            </div>
        </div>
    </lv-card>
</template>

<script>
import LvCard from '../LvCard/LvCard.vue';
import LvIcon from '../LvIcon/LvIcon.vue';

const COLUMN_CONFIG = [
    { key: 'field', required: true, default: null, description: 'The field of the column.' },
    {
        key: 'title',
        required: false,
        default: null,
        description: 'The title of the column. Falls back to the field if not present.',
    },
    { key: 'hidden', required: false, default: false, description: 'Hides the entire column.' },
    { key: 'sortable', required: false, default: false, description: 'Makes the column sortable.' },
    { key: 'description', required: false, default: null, description: 'Show a description to the column on hover.' },
    { key: 'totals', required: false, default: false, description: 'Adds the total of all the rows at the bottom.' },
    { key: 'averages', required: false, default: false, description: 'Adds the averages of all the rows at the bottom.' },
    { key: 'align', required: false, default: 'left', description: 'Sets the text-align for this column.' },
];

export default {
    components: {
        LvCard,
        LvIcon,
    },
    props: {
        rows: {
            type: Array,
            default: () => [],
        },
        columns: {
            type: Array,
            default: () => [],
            validator: (columns) => {
                // Walk through every column
                columns.forEach((column) => {
                    COLUMN_CONFIG.forEach((cc) => {
                        // Check if required column is missing.
                        if (cc.required && !column[cc.key]) {
                            return false;
                        }
                    });
                });
                return true;
            },
        },
        loading: {
            type: Boolean,
            default: false,
        },
        bordered: {
            type: Boolean,
            default: false,
        },
        striped: {
            type: Boolean,
            default: false,
        },
        checkable: {
            type: Boolean,
            default: false,
        },
        clickableRows: {
            type: Boolean,
            default: false,
        },
        expandable: {
            type: Boolean,
            default: false,
        },
        sortField: {
            type: String,
            default: null,
        },
        sortDirection: {
            type: String,
            default: 'asc',
            validator(value) {
                return ['asc', 'desc'].includes(value);
            },
        },
        localSort: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        visibleColumns() {
            return this.columns.filter((column) => !column.hidden);
        },
        visibleColumnCount() {
            if (this.checkable) return this.visibleColumns.length + 1;
            return this.visibleColumns.length;
        },
        computedRows() {
            if (this.localSort) {
                if (this.sortDirection === 'asc')
                    return this.rows.sort((a, b) => (a[this.sortField] > b[this.sortField] ? 1 : b[this.sortField] > a[this.sortField] ? -1 : 0));
                return this.rows
                    .sort((a, b) => (a[this.sortField] > b[this.sortField] ? 1 : b[this.sortField] > a[this.sortField] ? -1 : 0))
                    .reverse();
            }
            return this.rows;
        },
    },
    methods: {
        onClickRow(row) {
            if (this.clickableRows) this.$emit('row-click', row);
        },
        onClickColumn(column) {
            if (this.sortField !== column.field) {
                this.$emit('sort', { field: column.field, direction: this.sortDirection });
            } else {
                if (this.sortDirection === 'asc') {
                    this.$emit('sort', { field: column.field, direction: 'desc' });
                } else {
                    this.$emit('sort', { field: column.field, direction: 'asc' });
                }
            }
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

$table-column-color: lighten($text-color, 50);

.lv-table {
    $self: &;
    --columns: 0;
    width: 100%;

    &--clickable-rows {
        #{$self}__row {
            cursor: pointer;

            &:hover {
                background-color: lighten($text-color, 89);
            }
        }
    }

    &__columns {
        display: grid;
        grid-template-columns: repeat(var(--columns), 1fr);
        border-bottom: 1px solid #f5f5f5;
        padding: 10px;
    }

    &__column {
        display: flex;
        font-size: $font-size-small;
        color: $table-column-color;
        margin-bottom: 15px;
        font-weight: 600;

        &--sortable {
            cursor: pointer;
        }

        &--active-sort {
            color: $color-primary;
        }
    }

    &__rows {
        display: block;
    }

    &__row {
        border-bottom: 1px solid #f5f5f5;
        display: grid;
        grid-template-columns: repeat(var(--columns), minmax(100px, 1fr));
        padding: 10px;
        font-size: $font-size;

        &:last-of-type {
            border-bottom: 0;
        }
    }
}
</style>
