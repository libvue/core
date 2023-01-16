<template>
    <lv-heading v-space-after="0.5" :level="3">Chart</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Just a chart</lv-heading>

    <lv-tabs v-space-after="1" :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #line>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-chart :loading="loading" :datasets="datasets" :labels="labels" height="300px" show-grid />
                    <lv-button label="Randomize" color="solid-dimmed-primary" icon="rotate-cw" @click="onClickRandomize"/>
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeLineChartTemplate" />
            <lv-code v-space-after="1" lang="javascript" :code="codeChartScript" />
        </template>
        <template #bar>
            <lv-card v-space-after="1">
                <lv-flex>
                    <lv-chart :loading="loading" :datasets="datasets" :labels="labels" type="bar" height="300px" />
                    <lv-button label="Randomize" color="solid-dimmed-primary" icon="rotate-cw" @click="onClickRandomize"/>
                </lv-flex>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeBarChartTemplate" />
            <lv-code v-space-after="1" lang="javascript" :code="codeChartScript" />
        </template>
    </lv-tabs>
    <component-details component="LvChart"></component-details>
</template>

<script>
const codeBarChartTemplate = `
<lv-chart :loading="loading" :datasets="datasets" :labels="labels" height="300px" show-grid />
`.trim();
const codeLineChartTemplate = `
<lv-chart :loading="loading" :datasets="datasets" :labels="labels" type="bar" height="300px" />
`.trim();
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
            datasets: [],
            loading: true,
        };
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
            this.datasets = this.getRandomDatasets();
        }, 1000);
    },
    methods: {
        getRandomDatasets() {
            return [
                {
                    label: 'Temperature',
                    hue: 24,
                    data: [this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber()],
                },
                {
                    label: 'Ice Days',
                    hue: 11,
                    data: [this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber(), this.getRandomNumber()],
                },
            ];
        },
        getRandomNumber() {
            return Math.floor(Math.random() * 101);
        },
        onClickRandomize() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.datasets = this.getRandomDatasets();
            }, 300);
        }
    }
};
</script>
