<template>
    <lv-heading v-space-after="0.5" :level="3">Date Picker</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used to pick a date or date range</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #single>
            <lv-card v-space-after="1">
                <lv-date-picker :start="date" @update:start="(v) => { date = v }" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeSingle" />
        </template>
        <template #range>
            <lv-card v-space-after="1">
                <lv-date-picker :start="start" :end="end" @update:start="(v) => { start = v }" @update:end="(v) => { end = v }" range/>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeRange" />
        </template>
        <template #inline>
            <lv-card v-space-after="1">
                <lv-date-picker :start="date" @update:start="(v) => { date = v }" inline/>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeInline" />
        </template>
    </lv-tabs>


    <component-details component="LvDatePicker"></component-details>
</template>

<script>
const codeSingle = `
<lv-date-picker :start="date" @update:start="(v) => { date = v }" />
`.trim();

const codeRange = `
<lv-date-picker :start="start" :end="end" @update:start="(v) => { start = v }" @update:end="(v) => { end = v }" range/>
`.trim();

const codeInline = `
<lv-date-picker :start="date" @update:start="(v) => { date = v }" inline/>
`.trim();

export default {
    data() {
        return {
            date: '2022-11-11',
            start: '2022-11-07',
            end: '2022-11-18',
            codeSingle,
            codeRange,
            codeInline,
            activeTab: 'single',
            tabs: [
                { id: 'single', title: 'Single Date', icon: 'calendar-days' },
                { id: 'range', title: 'Date Range', icon: 'calendar-range' },
                { id: 'inline', title: 'Inline', icon: 'pencil' },
            ],
        }
    }
}
</script>
