<template>
  <lv-card class="lv-table" :style="`--columns: ${visibleColumns.length}`">
    <!-- Columns -->
    <div class="lv-table__columns">
      <div class="lv-table__column" v-for="column in visibleColumns">
        {{ column.title ? column.title : column.field }}
      </div>
    </div>
    <!-- Rows -->
    <div class="lv-table__rows">
      <div class="lv-table__row" v-for="row in rows">
        <template v-for="column in visibleColumns">
          <div class="lv-table__cell" v-if="row[column.field]">
            <slot :name="column.field ? column.field : column.field" :row="row" :value="row[column.field]" :column="column">
              {{ row[column.field] }}
            </slot>
          </div>
        </template>
      </div>
    </div>

    <!-- Magic Rows -->
  </lv-card>
</template>

<script>
import LvCard from '../LvCard/LvCard.vue';

const COLUMN_CONFIG = [
  { key: 'field', required: true, default: null, description: 'The field of the column.' },
  { key: 'title', required: false, default: null, description: 'The title of the column. Falls back to the field if not present.' },
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
            if(cc.required && !column[cc.key]) {
              return false;
            }
          });
        });
        return true;
      }
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
    expandable: {
      type: Boolean,
      default: false,
    },
    sortable: {
      type: Boolean,
      default: true,
    },
    sort: {
      type: String,
      default: null,
    },
  },
  computed: {
    mutatedRows() {
      const rows = this.rows;
      // Strip unu
      return rows;
    },
    visibleColumns() {
      return this.columns.filter((column) => !column.hidden)
    }
  },
}
</script>

<style lang="scss">
@import '../../scss/core';
$table-column-color: lighten($text-color, 50);

.lv-table {
  --columns: 0;

  width: 100%;
  &__columns {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    border-bottom: 1px solid #f5f5f5;
  }
  &__column {
    font-size: $font-size-label;
    color: $table-column-color;
    margin-bottom: 15px;
    font-weight: 600;
    padding: 10px 0;
  }
  &__rows {
    display: block;
  }
  &__row {
    border-bottom: 1px solid #f5f5f5;
    display: grid;
    grid-template-columns: repeat(var(--columns), minmax(100px, 1fr));
    padding: 10px 0;
    font-size: $font-size;
    &:last-of-type {
      border-bottom: 0;
    }
  }
}
</style>