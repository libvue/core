<template>
  <lv-group>
    <lv-heading :level="3" sticky>Table</lv-heading>
    <lv-heading sub :level="6">Just a table</lv-heading>
    <lv-table :rows="rows" :columns="columns" />
  </lv-group>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        { age: 33, gender: 'male', name: 'Bob' },
        { age: 43, gender: 'female', name: 'Jane' },
        { age: 56, gender: 'male', name: 'George' },
        { age: 82, gender: 'female', name: 'Eva' }
      ],
      columns: [
        {
          field: 'name',
          title: 'Name',
        },
        {
          field: 'age',
          title: 'Age',
        },
        {
          field: 'gender',
          title: 'Gender',
        },
      ]
    }
  }
}
</script>