<template>
    <div class="component-details">
        <div v-if="props" v-space-after="1" class="props-table">
            <lv-heading v-space-after="1" :level="6">{{ title }} Props</lv-heading>
            <lv-card>
                <lv-table :rows="rowsProps" :columns="columnsProps"></lv-table>
            </lv-card>
        </div>
        <div v-if="emits" class="emits-table">
            <lv-heading v-space-after="1" :level="6">{{ title }} Emits</lv-heading>
            <lv-card>
                <lv-table :rows="rowsEmits" :columns="columnsEmits" />
            </lv-card>
        </div>
        <div v-if="slots.length > 0" class="slots-table">
            <lv-heading v-space-after="1" :level="6">{{ title }} Slots</lv-heading>
            <lv-card>
                <lv-table :rows="rowsSlots" :columns="columnsSlots" />
            </lv-card>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        component: {
            type: String,
            default: '',
        },
        slots: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            componentData: {},
        };
    },
    computed: {
        props() {
            const props = {};
            if(this.componentData.mixins) {
                this.componentData.mixins.forEach((mixin) => {
                    if(mixin.props) {
                        Object.assign(props, mixin.props);
                    }
                })
            }
            Object.assign(props, this.componentData.props)
            return props;
        },
        emits() {
            return this.componentData.emits;
        },
        rowsProps() {
            if(!this.props) {
                return [];
            }
            const rowsProps = [];
            Object.entries(this.props).forEach(([key, value]) => {

                let def = '';
                let type = '';

                // Customize the default values
                if(typeof value.default === 'function') {
                    def = value.default;
                } else if (typeof value.default === 'object' && value.default !== null) {
                    def = value.default.constructor.name;
                } else if(typeof value.default !== 'undefined') {
                    def = JSON.stringify(value.default)
                } else {
                    def = '-'
                }

                if (typeof value.type === 'function') {
                    type = value.type.name;
                } else if (Array.isArray(value.type)) {
                    value.type.forEach((t, i) => {
                        type += t.name;
                        if (i !== value.type.length -1) {
                            type += ', '
                        }
                    })
                } else {
                    type = '-';
                }

                rowsProps.push({
                    name: key,
                    type,
                    default: def,
                    validator: value.validator ? value.validator : '-',
                    required: value.required ? value.required : '-',
                })
            })
            return rowsProps;
        },
        columnsProps() {
            const columnObject = {
                name: {
                    title: 'Name'
                },
                type: {
                    title: 'Type'
                },
                default: {
                    title: 'Default'
                },
            };

            // Check if any required
            if(this.props) {
                Object.entries(this.props).forEach(([key, value]) => {
                    if(value && value.required) {
                        columnObject.required = {
                            title: 'Required'
                        };
                    }
                    if(value && value.validator) {
                        columnObject.validator = {
                            title: 'Validator'
                        };
                    }
                })
            }

            return columnObject;
        },
        rowsEmits() {
            if(!this.emits) {
                return [];
            }
            const rowsEmits = [];
            this.emits.forEach((event) => {
                rowsEmits.push({
                    event,
                })
            })
            return rowsEmits;
        },
        columnsEmits() {
            const columnObject = {
                event: {
                    title: 'Event'
                },
            };
            return columnObject;
        },
        columnsSlots() {
            const columnObject = {
                name: {
                    title: 'Name'
                },
            };
            return columnObject;
        },
        rowsSlots() {
            if(!this.slots) {
                return [];
            }
            const rowsSlots = [];
            this.slots.forEach((slot) => {
                rowsSlots.push({
                    name: slot,
                })
            })
            return rowsSlots;
        },
    },
    mounted() {
        this.getComponent();
    },
    methods: {
        async getComponent() {
            // https://vitejs.dev/guide/features.html#dynamic-import
            // Note that variables only represent file names one level deep.
            // If file is 'foo/bar', the import would fail.
            if(this.component) {
                await import(`../../lib/components/${this.component}/${this.component}.vue`).then((data) => {
                    this.componentData = data.default;
                });
            }
        }
    }
};
</script>

<style lang="scss"></style>
