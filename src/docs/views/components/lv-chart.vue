<template>
    <lv-heading :level="3" v-space-after="0.5">Chart</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">Just a chart</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #line="{ tab }">
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-chart :datasets="datasets" :labels="labels" height="300px" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeLineChartTemplate" />
            <lv-code v-space-after="1" lang="js" :code="codeChartScript" />
        </template>
        <template #bar="{ tab }">
            <lv-card v-space-after="1">
                <lv-group>
                    <lv-chart :datasets="datasets" :labels="labels" type="bar" height="300px" />
                </lv-group>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeBarChartTemplate" />
            <lv-code v-space-after="1" lang="js" :code="codeChartScript" />
        </template>
    </lv-tabs>
</template>

<script>
const codeBarChartTemplate = `<lv-chart :datasets="datasets" type="bar" :labels="labels" height="300px" />`.trim();
const codeLineChartTemplate = `<lv-chart :datasets="datasets" :labels="labels" height="300px" />`.trim();
const codeChartScript = `
export default {
    data() {
        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Temperature',
                    hue: 24,
                    data: [55, 12, 20, 34, 1, 4],
                },
                {
                    label: 'Ice Days',
                    hue: 11,
                    data: [1, 4, 55, 12, 20, 34],
                },
            ],
        };
    },
};
`.trim();
export default {
    data() {
        return {
            codeChartScript,
            codeLineChartTemplate,
            codeBarChartTemplate,
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            activeTab: 'line',
            tabs: [
                { id: 'line', title: 'Line Chart', icon: 'line-chart' },
                { id: 'bar', title: 'Bar Chart', icon: 'bar-chart-3' },
            ],
            datasets: [
                {
                    label: 'Temperature',
                    hue: 24,
                    data: [55, 12, 20, 34, 11, 4],
                },
                {
                    label: 'Ice Days',
                    hue: 11,
                    data: [1, 4, 55, 12, 20, 34],
                },
            ],
        };
    },
};
</script>
