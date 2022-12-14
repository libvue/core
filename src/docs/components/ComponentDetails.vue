<template>
    <div class="component-details">
        <div class="props-table" v-space-after="1" v-if="props">
            <lv-heading v-space-after="1" :level="6">{{ title }} Props</lv-heading>
            <lv-card>
                <lv-table :rows="rowsProps" :columns="columnsProps"></lv-table>
            </lv-card>
        </div>
        <div class="emits-table" v-if="emits">
            <lv-heading v-space-after="1" :level="6">{{ title }} Emits</lv-heading>
            <lv-card>
                <lv-table :rows="rowsEmits" :columns="columnsEmits" />
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
        componentPath: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            componentData: {},
        };
    },
    computed: {
        props() {
            return this.componentData.props;
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
        }
    },
    mounted() {
        this.getComponent();
    },
    methods: {
        async getComponent() {
            if(this.component) {
                await import(`../../lib/components/${this.component}/${this.component}.vue`).then((data) => {
                    this.componentData = data.default;
                });
            } else if(this.componentPath) {
                await import(`./../lib/${this.componentPath}.vue`).then((data) => {
                    this.componentData = data.default;
                });
            }

        }
    }
};
</script>

<style lang="scss"></style>
