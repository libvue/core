<template>
    <lv-heading v-space-after="0.5" :level="3">Widget</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Visualize your data in a widget</lv-heading>

    <lv-tabs v-space-after="1" :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #number>
            <lv-grid v-space-after="1">
                <lv-grid-row gap="1rem">
                    <lv-grid-column :width="6">
                        <lv-widget title="Avg. Revenue" amount="1.239,21" prefix="$" :diff="-10" type="number" />
                    </lv-grid-column>
                    <lv-grid-column :width="6">
                        <lv-widget title="Total Payout" amount="632,37" prefix="€" :diff="75" type="number" />
                    </lv-grid-column>
                </lv-grid-row>
            </lv-grid>
            <lv-code v-space-after="1" lang="html" :code="codeNumberWidget" />
            <component-details component="LvWidget" title="LvWidget"></component-details>
            <component-details component="LvWidgetNumber" title="Extra"></component-details>
        </template>
        <template #chart>
            <lv-grid v-space-after="1">
                <lv-grid-row gap="1rem">
                    <lv-grid-column :width="6">
                        <lv-widget
                            title="Followers"
                            amount="2,530"
                            :diff="10"
                            type="chart"
                            :labels="labels"
                            :datasets="followersDatasets"
                        />
                    </lv-grid-column>
                    <lv-grid-column :width="6">
                        <lv-widget
                            title="Subscribers"
                            chart-type="bar"
                            amount="3,122"
                            :diff="-2"
                            type="chart"
                            :labels="labels"
                            :datasets="subscribersDatasets"
                        />
                    </lv-grid-column>
                </lv-grid-row>
            </lv-grid>
            <lv-code v-space-after="1" lang="html" :code="codeChartWidget" />
            <lv-code v-space-after="1" lang="javascript" :code="codeChartWidgetScript" />
            <component-details component="LvWidget" title="LvWidget"></component-details>
            <component-details component="LvWidgetChart" title="Extra"></component-details>
        </template>
    </lv-tabs>
</template>

<script>
const codeNumberWidget =
    `<lv-widget title="Avg. Revenue" amount="1.239,21" prefix="$" :diff="-10" type="number" />\n<lv-widget title="Total Payout" amount="632,37" prefix="€" :diff="75" type="number" />`.trim();
const codeChartWidget =
    `<lv-widget title="Followers" amount="2,530" :diff="10" type="chart" :labels="labels" :datasets="followersDatasets"/>\n<lv-widget title="Subscribers" chart-type="bar" amount="3,122" :diff="-2" type="chart" :labels="labels" :datasets="subscribersDatasets"/>`.trim();
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
                    data: [20, 34, 6, 4, 55, 12],
                },
            ],
            activeTab: 'number',
            tabs: [
                { id: 'number', title: 'Number Widget' },
                { id: 'chart', title: 'Chart Widget'},
            ],
        };
    },
};
</script>
