<template>
    <div class="lv-chart" :style="`height: ${height}; width: ${width}`">
        <canvas v-if="hasDatasets && hasLabels" ref="canvas" :height="height" :style="`height: ${height}; width: ${width}`"></canvas>
        <lv-paragraph class="lv-chart__message" v-else>
            <lv-icon class="lv-chart__message-icon" name="alert-circle"/> No data found
        </lv-paragraph>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
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
    },
    data() {
        return {
            chart: null,
        };
    },
    computed: {
        hasDatasets() {
            return this.datasets.length > 0;
        },
        hasLabels() {
            return this.labels.length > 0;
        },
        parsedDataSets() {
            const parsedDataSets = [];
            this.datasets.forEach((dataset) => {
                if(this.type === 'line') {
                    const ctx = this.$refs.canvas.getContext('2d');
                    const gradientBackground = ctx.createLinearGradient(0, 0, 0, parseInt(this.height, 10));
                    gradientBackground.addColorStop(0, 'hsla(' + dataset.hue + ', 100%, 60%, 0.2)');
                    gradientBackground.addColorStop(1, 'hsla(' + dataset.hue + ', 100%, 60%, 0)');
                    dataset.backgroundColor = gradientBackground;
                }
                if(this.type === 'bar') {
                    dataset.backgroundColor = 'hsla(' + dataset.hue + ', 100%, 60%, 1)';
                }
                dataset.borderColor = 'hsla(' + dataset.hue + ', 100%, 60%, 1)';
                dataset.pointBackgroundColor = 'hsla(' + dataset.hue + ', 100%, 60%, 1)';
                dataset.fill = true;
                dataset.tension = 0.4;
                parsedDataSets.push(dataset);
            });
            return parsedDataSets;
        },
        config() {
            return {
                type: this.type,
                data: {
                    labels: this.labels,
                    datasets: this.parsedDataSets,
                },
                options: {
                    animations: false,
                    plugins: {
                        legend: {
                            display: this.showLegend,
                        },
                    },
                    elements: {
                        point:{
                            backgroundColor: Chart.borderColor,
                            radius: this.showDots ? 3 : 1,
                            hoverRadius: this.showDots ? 4 : 4,
                            hitRadius: this.showDots ? 8 : 5,
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            display: this.showAxis,
                            grid: {
                                display: this.showGrid,
                            },
                        },
                        y: {
                            display: this.showAxis,
                            grid: {
                                display: this.showGrid,
                            },
                        },
                    },
                },
            };
        },
    },
    mounted() {
        this.createChart();
    },
    watch: {
        datasets() {
            this.updateDatasets();
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
    methods: {
        createChart() {
            if(this.hasLabels && this.hasDatasets) {
                this.chart = new Chart(this.$refs.canvas, this.config);
            }
        },
        updateOptions() {
            this.chart.options = this.config.options;
            this.chart.update();
        },
        updateDatasets() {
            this.chart.data.datasets = this.datasets;
            this.chart.update();
        },
        updateLabels() {
            this.chart.data.labels = this.labels;
            this.chart.update();
        }
    },
};
</script>

<style lang="scss">
.lv-chart {
    display: flex;
    align-items: center;
    justify-content: center;

    &__message {
        display: flex;
        align-items: center;
        &-icon {
            margin-right: 10px;
        }
    }
}
</style>