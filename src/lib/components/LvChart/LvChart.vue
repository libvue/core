<template>
    <div class="lv-chart" :style="`height: ${height}; width: ${width}`">
        <lv-flex v-if="loading" class="lv-chart__loading"> <lv-spinner /> {{ loadingText }} </lv-flex>
        <canvas v-show="hasDatasets" ref="canvas" :height="height" :style="`height: ${height}; width: ${width}`"></canvas>
        <lv-flex v-if="!hasDatasets" class="lv-chart__no-data">
            <lv-icon name="alert-circle" /> {{ noDataText }}
        </lv-flex>
    </div>
</template>

<script>
import { shallowRef } from 'vue';

import {
    Chart,
    LineElement,
    PointElement,
    BarElement,
    BarController,
    LineController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    Filler, // Used for the gradients
    Tooltip,
} from 'chart.js';
import LvFlex from '../LvFlex/LvFlex.vue';
import LvIcon from '../LvIcon/LvIcon.vue';

Chart.register(
    LineElement,
    BarElement,
    PointElement,
    BarController,
    LineController,
    CategoryScale,
    LogarithmicScale,
    LinearScale,
    Filler,
    Tooltip
);

export default {
    components: { LvIcon, LvFlex },
    props: {
        labels: {
            type: Array,
            default: () => [],
        },
        datasets: {
            type: Array,
            default: () => [],
            validator: (datasets) => {
                let valid = true;
                datasets.forEach((dataset) => {
                    if (!dataset.label || !dataset.hue || !dataset.data) {
                        valid = false;
                    }
                });
                return valid;
            },
        },
        type: {
            type: String,
            default: 'line',
            validator: (val) => ['line', 'bar'].includes(val),
        },
        showGrid: {
            type: Boolean,
            default: false,
        },
        showLegend: {
            type: Boolean,
            default: false,
        },
        showAxis: {
            type: Boolean,
            default: true,
        },
        showDots: {
            type: Boolean,
            default: true,
        },
        showTooltip: {
            type: Boolean,
            default: true,
        },
        height: {
            type: String,
            default: '400px',
        },
        width: {
            type: String,
            default: '100%',
        },
        logarithmic: {
            type: Boolean,
            default: false,
        },
        beginAtZero: {
            type: Boolean,
            default: true
        },
        noDataText: {
            type: String,
            default: 'No data available',
        },
        loadingText: {
            type: String,
            default: 'Loading',
        },
        loading: {
            type: Boolean,
            default: false,
        },
        tension: {
            type: Number,
            default: 0.3,
            validator: (val) => val >= 0 && val <= 1,
        },
    },
    data() {
        return {
            chart: null,
        };
    },
    computed: {
        canvas() {
            return this.$el.querySelector('canvas');
        },
        hasDatasets() {
            return this.datasets.length > 0;
        },
        hasLabels() {
            return this.labels.length > 0;
        },
        config() {
            return {
                type: this.type,
                data: {
                    labels: this.labels,
                    datasets: this.parseDatasets(this.datasets),
                },
                options: {
                    animations: false,
                    plugins: {
                        legend: {
                            display: this.showLegend,
                        },
                    },
                    elements: {
                        point: {
                            backgroundColor: Chart.borderColor,
                            radius: this.showDots ? 3 : 1,
                            hoverRadius: this.showDots ? 4 : 4,
                            hitRadius: this.showDots ? 8 : 5,
                        },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: this.beginAtZero,
                            display: this.showAxis,
                            grid: {
                                display: this.showGrid,
                                color: () => {
                                    const style = getComputedStyle(document.body);
                                    const borderColor = style.getPropertyValue('--border-color-light');
                                    return borderColor
                                }
                            },
                        },
                        y: {
                            beginAtZero: this.beginAtZero,
                            type: this.logarithmic ? 'logarithmic' : 'linear',
                            display: this.showAxis,
                            grid: {
                                display: this.showGrid,
                                color: () => {
                                    const style = getComputedStyle(document.body);
                                    const borderColor = style.getPropertyValue('--border-color-light');
                                    return borderColor
                                }
                            },
                        },
                    },
                },
            };
        },
    },
    watch: {
        datasets(newVal, oldVal) {
            if(JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
                this.updateDatasets();
            }
        },
        labels() {
            this.updateLabels();
        },
        showGrid() {
            this.updateOptions();
        },
        showLegend() {
            this.updateOptions();
        },
        showDots() {
            this.updateOptions();
        },
        showAxis() {
            this.updateOptions();
        },
    },
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            if (this.hasLabels && this.hasDatasets) {
                this.chart = shallowRef(new Chart(this.canvas, this.config));
            }
        },
        updateOptions() {
            if (!this.chart) this.createChart();
            this.chart.options = this.config.options;
            this.chart.update();
        },
        updateDatasets() {
            if (!this.chart) {
                this.createChart();
                this.chart.data.datasets = this.parseDatasets(this.datasets);
            } else {
                this.chart.data.datasets = this.parseDatasets(this.datasets);
                this.chart.update();
            }
        },
        updateLabels() {
            if (!this.chart) this.createChart();
            this.chart.data.labels = this.labels;
            this.chart.update();
        },
        parseDatasets(datasets) {
            const parsedDataSets = [];
            if (this.canvas) {
                // Clone the dataset to avoid reference collisions when having more then one chart in use!
                const clonedDatasets = JSON.parse(JSON.stringify(datasets));
                clonedDatasets.forEach((dataset) => {
                    const ctx = this.canvas.getContext('2d');
                    const gradientBackground = ctx.createLinearGradient(0, 0, 0, parseInt(this.height, 10));
                    gradientBackground.addColorStop(0, `hsla(${dataset.hue}, 100%, 60%, 0.2)`);
                    gradientBackground.addColorStop(1, `hsla(${dataset.hue}, 100%, 60%, 0)`);

                    if (this.type === 'line') {
                        dataset.backgroundColor = gradientBackground;
                    }
                    if (this.type === 'bar') {
                        dataset.backgroundColor = `hsla(${dataset.hue}, 100%, 60%, 1)`;
                    }

                    dataset.borderColor = `hsla(${dataset.hue}, 100%, 60%, 1)`;
                    dataset.pointBackgroundColor = `hsla(${dataset.hue}, 100%, 60%, 1)`;
                    dataset.fill = true;
                    dataset.tension = this.tension;
                    parsedDataSets.push(dataset);
                });
            }
            return parsedDataSets;
        },
    },
};
</script>

<style lang="scss">
.lv-chart {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    &__loading {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        background: var(--background-color);
        width: 100%;
        height: 100%;
    }
}
</style>
