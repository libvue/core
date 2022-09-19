<template>
    <lv-heading :level="3" v-space-after="0.5">Spacing</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">All of our components are margin-less.</lv-heading>

    <lv-heading :level="6"  v-space-after="1">Use v-space-after directive</lv-heading>
    <lv-paragraph>
        For all of the components we don't know the spacing we should apply after, so we don't apply any. Use the v-space-after directive to apply
        styling to the components. This directive automatically checks for the direction if you are using flex.
    </lv-paragraph>
</template>

<script></script>
