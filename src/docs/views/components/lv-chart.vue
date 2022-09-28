<template>
    <lv-heading :level="3" v-space-after="0.5">Chart</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">Just a chart</lv-heading>

    <lv-heading :level="6" v-space-after="1">Line Chart</lv-heading>
    <lv-card v-space-after="1">
        <lv-group>
            <lv-chart :datasets="datasets" :labels="labels" height="300px" />
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeLineChartTemplate" />
    <lv-code v-space-after="1" lang="js" :code="codeLineChartScript" />
</template>

<script>
const codeLineChartTemplate = `<lv-chart :datasets="datasets" :labels="labels" height="300px" />`.trim();
const codeLineChartScript = `
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
            codeLineChartScript,
            codeLineChartTemplate,
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
</script>
