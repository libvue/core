<template>
    <lv-heading :level="3" v-space-after="0.5">Theming</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">Customize this crap!</lv-heading>
    <lv-paragraph v-space-after="1">
        All these variables below can be overridden in your own .scss files.
    </lv-paragraph>
    <lv-heading :level="6" v-space-after="1">Color Variables</lv-heading>
    <lv-code v-space-after="1" :code="globalVariables" lang="scss" />
</template>

<script>
export default {
    data() {
        return {
            globalVariables: `/* Background */\n$background-color: #ffffff !default;\n\n/* Tint */\n$color-primary: #4637f3 !default;\n$color-info: #3f8cff !default;\n$color-success: #00ca99 !default;\n$color-warning: #ff5427 !default;\n$color-ghost: $background-color !default;\n\n/* Text */\n$text-color: #0b0b0c !default;\n$text-color-dimmed: lighten($text-color, 60) !default;\n$text-color-inverted: invert($text-color) !default;\n\n/* Borders */\n$border-color: #e0e0e0 !default;\n$border-color-focus: lighten($text-color, 50) !default;\n\n/* Placeholders */\n$placeholder-color-primary: lighten($color-primary, 30) !default;\n$placeholder-color-success: lighten($color-success, 30) !default;\n$placeholder-color-info: lighten($color-info, 30) !default;\n$placeholder-color-warning: lighten($color-warning, 30) !default;\n$placeholder-color: lighten($text-color, 40) !default;\n\n/* Shadows */\n$shadow-focus-primary: 0px 0px 0px 3px rgba($color-primary, 0.23) !default;\n$shadow-focus-success: 0px 0px 0px 3px rgba($color-success, 0.27) !default;\n$shadow-focus-warning: 0px 0px 0px 3px rgba($color-warning, 0.24) !default;\n$shadow-focus-info: 0px 0px 0px 3px rgba($color-info, 0.23) !default;\n$shadow-focus-ghost: 0px 0px 0px 3px rgba(darken($color-ghost, 26), 0.23) !default;\n$shadow-focus: 0px 0px 0px 3px rgba($text-color, 0.2) !default;\n\n/* Code */\n$code-background-color: #f9f9f9;`,
        };
    },
};
</script>
