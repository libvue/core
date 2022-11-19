<template>
    <lv-heading v-space-after="0.5" :level="3">Select</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Select a single or multiple items</lv-heading>


    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #single>
            <lv-card v-space-after="1">
                <lv-select :value="modelSingle">
                    <lv-select-option
                            v-for="(option, index) in options"
                            :key="index"
                            :option="option"
                            @click="(v) => { modelSingle = v }"
                    >
                        <lv-group>
                            <lv-icon :name="option.icon"/> {{ option.label }}
                        </lv-group>
                    </lv-select-option>

                    <template #value="{ value }">
                        <lv-group>
                            <lv-icon :name="value.icon"/> {{ value.label }}
                        </lv-group>
                    </template>
                </lv-select>
            </lv-card>
            <lv-code :code="codeSingle" v-space-after="1" lang="html"/>
        </template>
        <template #multiple>
            <lv-card v-space-after="1">
                <lv-select :value="modelMultiple" multiple>
                    <lv-select-option
                            v-for="(option, index) in options"
                            :key="index"
                            :option="option"
                            @click="(v) => { modelMultiple = v }"
                    >
                        <lv-group>
                            <lv-icon :name="option.icon"/> {{ option.label }}
                        </lv-group>
                    </lv-select-option>
                    <template #value="{ value }">
                        <lv-group>
                            <lv-icon :name="value.icon"/> {{ value.label }}
                        </lv-group>
                    </template>
                </lv-select>
            </lv-card>
            <lv-code :code="codeMultiple" v-space-after="1" lang="html"/>
        </template>
        <template #groups>
            <lv-card v-space-after="1">
                <lv-select :value="modelOptGroup">
                    <lv-select-option-group title="Option Group">
                        <lv-select-option
                                v-for="(option, index) in options.slice(0,4)"
                                :key="index"
                                :option="option"
                                @click="(v) => { modelOptGroup = v }"
                        >
                            {{ option.label }}
                        </lv-select-option>
                    </lv-select-option-group>
                    <lv-select-option-group title="Option Group">
                        <lv-select-option
                                v-for="(option, index) in options.slice(4)"
                                :key="index"
                                :option="option"
                                @click="(v) => { modelOptGroup = v }"
                        >
                            {{ option.label }}
                        </lv-select-option>
                    </lv-select-option-group>
                </lv-select>
            </lv-card>
            <lv-code :code="codeOptGroup" v-space-after="1" lang="html"/>
        </template>
        <template #search>
            <lv-card v-space-after="1">
                <lv-select :value="modelSearch" searchable placeholder="Search for an option">
                    <lv-select-option
                            v-for="(option, index) in options"
                            :key="index"
                            :option="option"
                            @click="(v) => { modelSearch = v }"
                    >
                        <lv-group>
                            <lv-icon :name="option.icon"/> {{ option.label }}
                        </lv-group>
                    </lv-select-option>
                    <template #value="{ value }">
                        <lv-group>
                            <lv-icon :name="value.icon"/> {{ value.label }}
                        </lv-group>
                    </template>
                </lv-select>
            </lv-card>
            <lv-code :code="codeSearchable" v-space-after="1" lang="html"/>
        </template>
        <template #sizes>
            <lv-card v-space-after="1">
                <lv-group direction="column">
                    <lv-select placeholder="Large size" size="large">
                        <lv-select-option
                                v-for="(option, index) in options"
                                :key="index"
                                :option="option"
                                @click="(v) => { modelSearch = v }"
                        >
                            <lv-group>
                                <lv-icon :name="option.icon"/> {{ option.label }}
                            </lv-group>
                        </lv-select-option>
                    </lv-select>
                    <lv-select placeholder="Default size">
                        <lv-select-option
                                v-for="(option, index) in options"
                                :key="index"
                                :option="option"
                                @click="(v) => { modelSearch = v }"
                        >
                            <lv-group>
                                <lv-icon :name="option.icon"/> {{ option.label }}
                            </lv-group>
                        </lv-select-option>
                    </lv-select>
                    <lv-select placeholder="Small size" size="small">
                        <lv-select-option
                                v-for="(option, index) in options"
                                :key="index"
                                :option="option"
                                @click="(v) => { modelSearch = v }"
                        >
                            <lv-group>
                                <lv-icon :name="option.icon"/> {{ option.label }}
                            </lv-group>
                        </lv-select-option>
                    </lv-select>
                    <lv-select placeholder="Tiny size" size="tiny">
                        <lv-select-option
                                v-for="(option, index) in options"
                                :key="index"
                                :option="option"
                                @click="(v) => { modelSearch = v }"
                        >
                            <lv-group>
                                <lv-icon :name="option.icon"/> {{ option.label }}
                            </lv-group>
                        </lv-select-option>
                    </lv-select>
                </lv-group>
            </lv-card>
            <lv-code :code="codeSizes" v-space-after="1" lang="html"/>
        </template>
    </lv-tabs>
</template>

<script>
const codeOptGroup = `
<lv-select :value="modelOptGroup">
    <lv-select-option-group title="Option Group">
        <lv-select-option
            v-for="(option, index) in options.slice(0,4)"
            :key="index"
            :option="option"
            @click="(v) => { modelOptGroup = v }"
        >
            {{ option.label }}
        </lv-select-option>
    </lv-select-option-group>
    <lv-select-option-group title="Option Group">
        <lv-select-option
            v-for="(option, index) in options.slice(4)"
            :key="index"
            :option="option"
            @click="(v) => { modelOptGroup = v }"
        >
            {{ option.label }}
        </lv-select-option>
    </lv-select-option-group>
</lv-select>
`.trim();

const codeSingle = `
<lv-select :value="modelSingle">
    <!-- Options in slot:default -->
    <lv-select-option
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        @click="(v) => { modelSingle = v }"
    >
        <lv-group>
            <lv-icon :name="option.icon"/> {{ option.label }}
        </lv-group>
    </lv-select-option>
    <!-- Format the value in slot:value -->
    <template #value="{ value }">
        <lv-group>
            <lv-icon :name="value.icon"/> {{ value.label }}
        </lv-group>
    </template>
</lv-select>
`.trim();

const codeMultiple = `
<lv-select :value="modelMultiple" multiple>
    <!-- Options in slot:default -->
    <lv-select-option
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        @click="(v) => { modelMultiple = v }"
    >
        <lv-group>
            <lv-icon :name="option.icon"/> {{ option.label }}
        </lv-group>
    </lv-select-option>
    <!-- Format the value in slot:value (values available for all values) -->
    <template #value="{ value }">
        <lv-group>
            <lv-icon :name="value.icon"/> {{ value.label }}
        </lv-group>
    </template>
</lv-select>
`.trim();

const codeSearchable = `
<lv-select :value="modelSearch" searchable placeholder="Search for an option">
    <lv-select-option
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        @click="(v) => { modelSearch = v }"
    >
        <lv-group>
            <lv-icon :name="option.icon"/> {{ option.label }}
        </lv-group>
    </lv-select-option>
    <template #value="{ value }">
        <lv-group>
            <lv-icon :name="value.icon"/> {{ value.label }}
        </lv-group>
    </template>
</lv-select>
`.trim();

const codeSizes = `
<lv-group direction="column">
    <lv-select placeholder="Large size" size="large">
        <lv-select-option
                v-for="(option, index) in options"
                :key="index"
                :option="option"
                @click="(v) => { modelSearch = v }"
        >
            <lv-group>
                <lv-icon :name="option.icon"/> {{ option.label }}
            </lv-group>
        </lv-select-option>
    </lv-select>
    <lv-select placeholder="Default size">
        <lv-select-option
                v-for="(option, index) in options"
                :key="index"
                :option="option"
                @click="(v) => { modelSearch = v }"
        >
            <lv-group>
                <lv-icon :name="option.icon"/> {{ option.label }}
            </lv-group>
        </lv-select-option>
    </lv-select>
    <lv-select placeholder="Small size" size="small">
        <lv-select-option
                v-for="(option, index) in options"
                :key="index"
                :option="option"
                @click="(v) => { modelSearch = v }"
        >
            <lv-group>
                <lv-icon :name="option.icon"/> {{ option.label }}
            </lv-group>
        </lv-select-option>
    </lv-select>
    <lv-select placeholder="Tiny size" size="tiny">
        <lv-select-option
                v-for="(option, index) in options"
                :key="index"
                :option="option"
                @click="(v) => { modelSearch = v }"
        >
            <lv-group>
                <lv-icon :name="option.icon"/> {{ option.label }}
            </lv-group>
        </lv-select-option>
    </lv-select>
</lv-group>
`.trim();

export default {
    components: {},
    data() {
        return {
            codeSingle,
            codeMultiple,
            codeSearchable,
            codeOptGroup,
            codeSizes,
            modelSingle: null,
            modelMultiple: [],
            modelSearch: null,
            modelOptGroup: null,
            activeTab: 'single',
            tabs: [
                { id: 'single', title: 'Single', icon: 'box' },
                { id: 'multiple', title: 'Multiple', icon: 'tags' },
                { id: 'groups', title: 'Groups', icon: 'boxes' },
                { id: 'search', title: 'Search', icon: 'search' },
                { id: 'sizes', title: 'Sizes', icon: 'scaling' },
            ],
            options: [
                { label: 'Bomb', value: 1, icon: 'bomb' },
                { label: 'Bookmark', value: 2, icon: 'bookmark' },
                { label: 'Bot', value: 3, icon: 'bot' },
                { label: 'Citrus', value: 4, icon: 'citrus' },
                { label: 'Cookie', value: 5, icon: 'cookie' },
                { label: 'Croissant', value: 6, icon: 'croissant' },
                { label: 'Disc', value: 7, icon: 'disc' },
            ],
        };
    },
};
</script>
