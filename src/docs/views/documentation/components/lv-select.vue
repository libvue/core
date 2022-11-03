<template>
    <lv-heading v-space-after="0.5" :level="3">Select</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Select a single or multiple items</lv-heading>

    <lv-heading v-space-after="1" :level="6">Single Select</lv-heading>
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

    <lv-heading v-space-after="1" :level="6">Multiple Select</lv-heading>
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

    <lv-heading v-space-after="1" :level="6">Searchable</lv-heading>
    <lv-card v-space-after="1">
        <lv-select :value="modelSearch" searchable placeholder="Search for an option">
            <lv-select-option
                v-for="(option, index) in options"
                :key="index"
                :option="option"
                @click="(v) => { modelSearch = v }"
            >
                {{ option.label }}
            </lv-select-option>
        </lv-select>
    </lv-card>
    <lv-code :code="codeSingle" v-space-after="1" lang="html"/>
</template>

<script>
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
export default {
    components: {},

    data() {
        return {
            codeSingle,
            codeMultiple,
            modelSingle: null,
            modelMultiple: [],
            modelSearch: null,
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
