<template>
    <lv-heading v-space-after="0.5" :level="3">Date Picker</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Used to pick a date or date range</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #single>
            <lv-card v-space-after="1">
                <lv-date-picker :start="date" @update:start="(v) => { date = v }" />
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeSingle" />
        </template>
        <template #range>
            <lv-card v-space-after="1">
                <lv-date-picker :start="start" :end="end" @update:start="(v) => { start = v }" @update:end="(v) => { end = v }" range/>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeRange" />
        </template>
        <template #inline>
            <lv-card v-space-after="1">
                <lv-date-picker :start="date" @update:start="(v) => { date = v }" inline/>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeInline" />
        </template>
        <template #states>
            <lv-card v-space-after="1">
                <lv-flex direction="column">
                    <lv-date-picker :start="date" @update:start="(v) => { date = v }" />
                    <lv-date-picker :start="date" @update:start="(v) => { date = v }" disabled />
                    <lv-date-picker :start="date" @update:start="(v) => { date = v }" loading />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeStates" />
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

const codeStates = `
<lv-date-picker :start="date" @update:start="(v) => { date = v }" />
<lv-date-picker :start="date" @update:start="(v) => { date = v }" disabled />
<lv-date-picker :start="date" @update:start="(v) => { date = v }" loading />
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
            codeStates,
            activeTab: 'single',
            tabs: [
                { id: 'single', title: 'Single Date', icon: 'calendar-days' },
                { id: 'range', title: 'Date Range', icon: 'calendar-range' },
                { id: 'inline', title: 'Inline', icon: 'pencil' },
                { id: 'states', title: 'States', icon: 'loader-circle' },
            ],
        }
    }
}
</script>
