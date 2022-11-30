<template>
    <lv-heading v-space-after="0.5" :level="3">Date Picker</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used to pick a date or date range</lv-heading>
    <lv-card v-space-after="1">
        <lv-date-picker :start="date" @update:start="(v) => { date = v }" />
        {{ date }}
        <lv-date-picker :start="start" :end="end" @update:start="(v) => { start = v }" @update:end="(v) => { end = v }" range/>
        {{ start }} - {{ end }}
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
    <component-details component="LvDatePicker"></component-details>
</template>

<script>
const code = `
<lv-date-picker :start="start" @update:start="(v) => { start = v }"/>
`.trim();
export default {
    data() {
        return {
            date: '2022-11-11',
            start: '2022-11-07',
            end: '2022-11-18',
            code,
        }
    }
}
</script>
