<template>
    <lv-heading :level="3" v-space-after="0.5">Input</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">An multi-typed input for your fancy forms</lv-heading>
    <lv-heading :level="5" v-space-after="1">Types</lv-heading>
    <lv-heading :level="6" v-space-after="0.75">Text</lv-heading>
    <lv-group direction="column" v-space-after="1">
        <lv-input type="text" v-model="username" placeholder="Enter your username" />
    </lv-group>
    <lv-heading :level="6" v-space-after="0.75">Password</lv-heading>
    <lv-group direction="column" v-space-after="1">
        <lv-input type="password" placeholder="Enter your password" />
    </lv-group>
    <lv-heading :level="6" v-space-after="0.75">Date & Time & Datetime-local</lv-heading>
    <lv-group direction="column" v-space-after="1">
        <lv-input type="date" />
        <lv-input type="time" />
        <lv-input type="datetime-local" />
    </lv-group>
    <lv-heading :level="6" v-space-after="0.75">E-mail</lv-heading>
    <lv-group direction="column" v-space-after="1">
        <lv-input type="email" placeholder="Enter your e-mail" />
    </lv-group>
    <lv-heading :level="6" v-space-after="0.75">Tel</lv-heading>
    <lv-group direction="column" v-space-after="1">
        <lv-input type="tel" placeholder="Enter your phonenumber" />
    </lv-group>
    <lv-heading :level="6" v-space-after="0.75">Number</lv-heading>
    <lv-group direction="column" v-space-after="1">
        <lv-input type="number" placeholder="Pick a number" />
    </lv-group>
    <lv-heading :level="6" v-space-after="0.75">Range</lv-heading>
    <lv-group direction="column" v-space-after="1">
        <lv-input type="range" placeholder="Pick a number" min="5" max="60" step="5" />
    </lv-group>
    <lv-heading :level="6" v-space-after="0.75">File</lv-heading>
    <lv-group direction="column" v-space-after="1">
        <lv-input type="file" placeholder="Select a file" />
    </lv-group>
    <lv-heading :level="5" v-space-after="1">States</lv-heading>
    <lv-group direction="column" v-space-after="1">
        <lv-input icon="user" placeholder="Enter your username" />
        <lv-input icon="user" readonly placeholder="Enter your username" />
        <lv-input icon="user" disabled placeholder="Enter your username" />
        <lv-input icon="user" loading placeholder="Enter your username" />
        <lv-input icon="user" error placeholder="Enter your username" />
    </lv-group>
    <lv-code v-space-after="1" title="code" lang="html" :code="code" />
</template>

<script>
export default {
    data() {
        return {
            username: '',
            code: `<lv-input icon="user" placeholder="Enter your username" required/>\n<lv-input icon="user" readonly placeholder="Enter your username" required/>\n<lv-input icon="user" disabled placeholder="Enter your username" required/>\n<lv-input icon="user" loading placeholder="Enter your username" required/>\n<lv-input icon="user" error placeholder="Enter your username" required/>`,
        };
    },
};
</script>
