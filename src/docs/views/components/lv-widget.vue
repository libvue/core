<template>
    <lv-heading :level="3" v-space-after="0.5">Widget</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">Stats for nerds</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #number="{ tab }">
            <lv-group v-space-after="1">
                <lv-widget title="Avg. Revenue" amount="1.239,21" prefix="$" :diff="-10" type="number" />
                <lv-widget title="Total Payout" amount="632,37" prefix="€" :diff="75" type="number" />
            </lv-group>
            <lv-code lang="html" :code="codeNumberWidget" v-space-after="1"/>
        </template>
        <template #chart="{ tab }">
            <lv-group v-space-after="1">
                <lv-widget title="Followers" amount="2,530" :diff="10" type="chart" :labels="labels" :datasets="followersDatasets"/>
                <lv-widget title="Subscribers" chart-type="bar" amount="3,122" :diff="-2" type="chart" :labels="labels" :datasets="subscribersDatasets"/>
            </lv-group>
            <lv-code lang="html" :code="codeChartWidget" v-space-after="1"/>
            <lv-code lang="js" :code="codeChartWidgetScript" v-space-after="1"/>
        </template>
    </lv-tabs>
</template>

<script>
const codeNumberWidget = `<lv-widget title="Avg. Revenue" amount="1.239,21" prefix="$" :diff="-10" type="number" />\n<lv-widget title="Total Payout" amount="632,37" prefix="€" :diff="75" type="number" />`.trim();
const codeChartWidget = `<lv-widget title="Followers" amount="2,530" :diff="10" type="chart" :labels="labels" :datasets="followersDatasets"/>\n<lv-widget title="Subscribers" chart-type="bar" amount="3,122" :diff="-2" type="chart" :labels="labels" :datasets="subscribersDatasets"/>`.trim();
const codeChartWidgetScript = `
export default {
    data() {
        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            followersDatasets: [
                {
                    label: 'Followers',
                    hue: 24,
                    data: [55, 12, 20, 34, 7, 4],
                },
            ],
            subscribersDatasets: [
                {
                    label: 'Subscribers',
                    hue: 36,
                    data: [20, 34, 6, 4,55, 12],
                },
            ],
        }
    }
}
`.trim();
export default {
    data() {
        return {
            codeNumberWidget,
            codeChartWidget,
            codeChartWidgetScript,
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            followersDatasets: [
                {
                    label: 'Followers',
                    hue: 24,
                    data: [55, 12, 20, 34, 7, 4],
                },
            ],
            subscribersDatasets: [
                {
                    label: 'Subscribers',
                    hue: 36,
                    data: [20, 34, 6, 4,55, 12],
                },
            ],
            activeTab: 'number',
            tabs: [
                { id: 'number', title: 'Number Widget', icon: 'hash' },
                { id: 'chart', title: 'Chart Widget', icon: 'line-chart' },
            ],
        }
    }
}
</script>
