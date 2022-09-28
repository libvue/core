<template>
    <lv-heading :level="3" v-space-after="0.5">Input</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">An multi-typed input for your fancy forms</lv-heading>
    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => onChangeTab(v)">
        <template #types>
            <lv-heading :level="6" v-space-after="0.75">Text</lv-heading>
            <lv-card v-space-after="1">
                <lv-input type="text" placeholder="Enter your username" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeText" />

            <lv-heading :level="6" v-space-after="0.75">Password</lv-heading>
            <lv-card v-space-after="1">
                <lv-input type="password" placeholder="Enter your password" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codePassword" />

            <lv-heading :level="6" v-space-after="0.75">Date</lv-heading>
            <lv-card v-space-after="1">
                <lv-input type="date" v-model="models.date" v-space-after="1" />
                <lv-paragraph>
                    v-model: {{ models.date }}
                </lv-paragraph>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeDate" />

            <lv-heading :level="6" v-space-after="0.75">Time</lv-heading>
            <lv-card v-space-after="1">
                <lv-input type="time" v-model="models.time" v-space-after="1" />
                <lv-paragraph>
                    v-model: {{ models.time }}
                </lv-paragraph>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeTime" />

            <lv-heading :level="6" v-space-after="0.75">Datetime-local</lv-heading>
            <lv-card v-space-after="1">
                <lv-input type="datetime-local" v-model="models.dateTimeLocal" v-space-after="1"  />
                <lv-paragraph>
                    v-model: {{ models.dateTimeLocal }}
                </lv-paragraph>
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeDateTimeLocal" />

            <lv-heading :level="6" v-space-after="0.75">E-mail</lv-heading>
            <lv-card v-space-after="1">
                <lv-input type="email" placeholder="Enter your e-mail" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeEmail" />

            <lv-heading :level="6" v-space-after="0.75">Tel</lv-heading>
            <lv-card v-space-after="1">
                <lv-input type="tel" placeholder="Enter your phonenumber" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeTel" />

            <lv-heading :level="6" v-space-after="0.75">File</lv-heading>
            <lv-card v-space-after="1">
                <lv-input type="file" placeholder="Select a file"  />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeFile" />
        </template>
        <template #states>
            <lv-heading :level="6" v-space-after="0.75">Default</lv-heading>
            <lv-card v-space-after="1">
                <lv-input icon="user" placeholder="Enter your username" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeDefault" />

            <lv-heading :level="6" v-space-after="0.75">Readonly</lv-heading>
            <lv-card v-space-after="1">
                <lv-input icon="user" readonly placeholder="Enter your username" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeReadOnly" />

            <lv-heading :level="6" v-space-after="0.75">Disabled</lv-heading>
            <lv-card v-space-after="1">
                <lv-input icon="user" disabled placeholder="Enter your username" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeDisabled" />

            <lv-heading :level="6" v-space-after="0.75">Loading</lv-heading>
            <lv-card v-space-after="1">
                <lv-input icon="user" loading placeholder="Enter your username" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeLoading" />

            <lv-heading :level="6" v-space-after="0.75">Error</lv-heading>
            <lv-card v-space-after="1">
                <lv-input icon="user" error placeholder="Enter your username" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeError" />

            <lv-heading :level="6" v-space-after="0.75">Success</lv-heading>
            <lv-card v-space-after="1">
                <lv-input icon="user" success placeholder="Enter your username" />
            </lv-card>
            <lv-code v-space-after="1" lang="html" :code="codeSuccess" />
        </template>
    </lv-tabs>
</template>

<script>
const codeText = `<lv-input type="text" placeholder="Enter your username" />`.trim();
const codePassword = `<lv-input type="password" placeholder="Enter your password" />`.trim();
const codeDate = `<lv-input type="date" v-model="models.date" />`.trim();
const codeTime = `<lv-input type="time" v-modes="models.time" />`.trim();
const codeDateTimeLocal = `<lv-input type="datetime-local" v-model="models.dateTimeLocal" />`.trim();
const codeEmail = `<lv-input type="email" placeholder="Enter your e-mail" />`.trim();
const codeTel = ` <lv-input type="tel" placeholder="Enter your phonenumber" />`.trim();
const codeFile = `<lv-input type="file" placeholder="Select a file" />`.trim();

const codeDefault = `<lv-input icon="user" placeholder="Enter your username" />`.trim();
const codeReadOnly = `<lv-input icon="user" readonly placeholder="Enter your username" />`.trim();
const codeDisabled = `<lv-input icon="user" disabled placeholder="Enter your username" />`.trim();
const codeLoading = `<lv-input icon="user" loading placeholder="Enter your username" />`.trim();
const codeError = `<lv-input icon="user" error placeholder="Enter your username" />`.trim();
const codeSuccess = `<lv-input icon="user" success placeholder="Enter your username" />`.trim();

export default {
    data() {
        return {
            codeText,
            codePassword,
            codeDate,
            codeTime,
            codeDateTimeLocal,
            codeEmail,
            codeTel,
            codeFile,
            codeDefault,
            codeReadOnly,
            codeDisabled,
            codeLoading,
            codeError,
            codeSuccess,
            activeTab: 'types',
            tabs: [
                { id: 'types', title: 'Types', icon: 'type' },
                { id: 'states', title: 'States', icon: 'loader-2' },
            ],
            models: {
                date: '',
                time: '',
                dateTimeLocal: '',
            }
        };
    },
    methods: {
        onChangeTab(tab) {
            this.activeTab = tab;
        }
    }
};
</script>
