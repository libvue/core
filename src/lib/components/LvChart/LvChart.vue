<template>
    <div class="lv-chart" :style="`height: ${height}; width: ${width}`">
        <canvas
            v-if="hasDatasets && hasLabels"
            ref="canvas"
            :height="height"
            :style="`height: ${height}; width: ${width}`"
        ></canvas>
        <lv-paragraph v-else class="lv-chart__message">
            <lv-icon class="lv-chart__message-icon" name="alert-circle" /> No data found
        </lv-paragraph>
    </div>
</template>

<script>
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
import LvParagraph from "../LvParagraph/LvParagraph.vue";
import LvIcon from "../LvIcon/LvIcon.vue";

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
    Tooltip,
);

export default {
    components: { LvIcon, LvParagraph },
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
        parsedDataSets() {
            const parsedDataSets = [];
            // Clone the dataset to avoid reference collisions when having more then one chart in use!
            const clonedDatasets = JSON.parse(JSON.stringify(this.datasets));
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
                            display: this.showAxis,
                            grid: {
                                display: this.showGrid,
                            },
                        },
                        y: {
                            type: this.logarithmic ? 'logarithmic' : 'linear',
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
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            if (this.hasLabels && this.hasDatasets) {
                this.chart = new Chart(this.canvas, this.config);
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
        },
    },
};
</script>

<style lang="scss">
.lv-chart {
    display: flex;
    justify-content: center;
    align-items: center;

    &__message {
        display: flex;
        align-items: center;
        &-icon {
            margin-right: 10px;
        }
    }
}
</style>
