<template>
    <lv-heading :level="3" v-space-after="0.5">Code</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">A code component with highlighting</lv-heading>
    <lv-code code="npm ruin build" lang="bash" />
    <lv-code code="console.log('this is a code component');" title="index.js" lang="javascript" />
</template>
