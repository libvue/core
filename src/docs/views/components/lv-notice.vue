<template>
    <lv-heading :level="3" sticky>Notice</lv-heading>
    <lv-heading sub :level="6">Just a notice</lv-heading>
    <lv-group direction="column">
        <lv-notice icon="bell">Hello Im a notice!</lv-notice>
        <lv-notice icon="bell" type="info">Hello Im a notice!</lv-notice>
        <lv-notice icon="bell" type="success">Hello Im a notice!</lv-notice>
    </lv-group>
    <lv-code title="code" lang="html" :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: `<lv-notice icon="bell">Hello Im a notice!</lv-notice>\n<lv-notice icon="bell" type="info">Hello Im a notice!</lv-notice>\n<lv-notice icon="bell" type="success">Hello Im a notice!</lv-notice>`,
        };
    },
};
</script>
