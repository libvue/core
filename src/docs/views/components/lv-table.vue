<template>
    <lv-heading :level="3" v-space-after="0.5">Table</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">Just a table</lv-heading>
    <lv-table
            checkable
            clickable-rows
            local-sort
            :rows="rows"
            :columns="columns"
            :sort-field="sortField"
            :sort-direction="sortDirection"
            @sort="onSort"
    />
</template>

<script>
export default {
    data() {
        return {
            sortField: 'name',
            sortDirection: 'asc',
            rows: [
                { age: 33, gender: 'male', name: 'Bob' },
                { age: 43, gender: 'female', name: 'Jane' },
                { age: 56, gender: 'male', name: 'George' },
                { age: 82, gender: 'female', name: 'Eva' },
            ],
            columns: [
                {
                    field: 'name',
                    title: 'Name',
                    sortable: true,
                },
                {
                    field: 'age',
                    title: 'Age',
                    sortable: true,
                },
                {
                    field: 'gender',
                    title: 'Gender',
                    sortable: true,
                },
            ],
        };
    },
    methods: {
        onSort(data) {
            this.sortField = data.field;
            this.sortDirection = data.direction;
        },
    },
};
</script>
