<template>
    <lv-heading v-space-after="0.5" :level="3">Chart</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Visualize your data in a chart</lv-heading>

    <lv-tabs v-space-after="1" :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #line>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-chart :datasets="defaultDataSets" :labels="labels" height="300px" show-grid />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeLineChartTemplate" />
            <code-preview v-space-after="1" lang="javascript" :code="codeChartScript" />
        </template>
        <template #bar>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-chart :datasets="defaultDataSets" :labels="labels" type="bar" height="300px" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeBarChartTemplate" />
            <code-preview v-space-after="1" lang="javascript" :code="codeChartScript" />
        </template>
        <template #combined>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-chart :datasets="combinedDataSets" :labels="labels" height="300px" />
                </lv-flex>
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="codeCombinedChartTemplate" />
            <code-preview v-space-after="1" lang="javascript" :code="codeCombinedScript" />
        </template>
    </lv-tabs>
    <component-details component="LvChart"></component-details>
</template>

<script>
const codeBarChartTemplate = `
<lv-chart :loading="loading" :datasets="datasets" :labels="labels" height="300px" type="bar" show-grid />
`.trim();
const codeLineChartTemplate = `
<lv-chart :loading="loading" :datasets="datasets" :labels="labels" height="300px" />
`.trim();
const codeCombinedChartTemplate = `
<lv-chart :loading="loading" :datasets="datasets" :labels="labels" height="300px" />
`.trim();
const codeChartScript = `
export default {
    data() {
        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Ice Days',
                    hue: 200,
                    data: [10, 50, 90, 30, 40, 50],
                },
                {
                    label: 'Temperature',
                    hue: 250,
                    data: [50, 90, 30, 40, 50, 10],
                },
            ],
        };
    },
};
`.trim();
const codeCombinedScript = `
export default {
    data() {
        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Ice Days',
                    hue: 200,
                    type: 'bar',
                    data: [10, 50, 90, 30, 40, 50],
                },
                {
                    label: 'Temperature',
                    hue: 250,
                    type: 'line',
                    data: [50, 90, 30, 40, 50, 10],
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
            codeCombinedChartTemplate,
            codeBarChartTemplate,
            codeCombinedScript,
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            activeTab: 'line',
            tabs: [
                { id: 'line', title: 'Line Chart', icon: 'line-chart' },
                { id: 'bar', title: 'Bar Chart', icon: 'bar-chart-3' },
                { id: 'combined', title: 'Combined Chart', icon: 'blend' },
            ],
            defaultDataSets: [
                {
                    label: 'Ice Days',
                    hue: 200,
                    data: [10, 50, 90, 30, 40, 50],
                },
                {
                    label: 'Temperature',
                    hue: 250,
                    data: [50, 90, 30, 40, 50, 10],
                },
            ],
            combinedDataSets: [
                {
                    label: 'Ice Days',
                    hue: 200,
                    type: 'line',
                    data: [10, 50, 90, 30, 40, 50],
                },
                {
                    label: 'Temperature',
                    hue: 250,
                    type: 'bar',
                    data: [50, 90, 30, 40, 50, 10],
                },
            ],
        };
    },
};
</script>
