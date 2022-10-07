<template>
    <lv-heading v-space-after="0.5" :level="3">Theming</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Customize this crap!</lv-heading>
    <lv-paragraph v-space-after="1">
        All these variables below can be overridden in your own .scss files.
    </lv-paragraph>
    <lv-heading v-space-after="1" :level="6">Color Variables</lv-heading>
    <lv-code v-space-after="1" :code="codeVariables" lang="scss" />
</template>

<script>
const codeVariables = `
// Background
$background-color: #ffffff !default;

// Colors
$color-default: #0b0b0c !default;
$color-default-light: lighten($color-default, 85) !default;
$color-primary: #5937f3 !default;
$color-primary-light: lighten($color-primary, 30) !default;
$color-info: #3f8cff !default;
$color-info-light: lighten($color-info, 25) !default;
$color-success: #13c083 !default;
$color-success-light: lighten($color-success, 40) !default;
$color-warning: #ff7a27 !default;
$color-warning-light: lighten($color-warning, 30) !default;
$color-danger: #ff2740 !default;
$color-danger-light: lighten($color-danger, 35) !default;
$color-ghost: $background-color !default;

// Text
$text-color: #0b0b0c !default;
$text-color-dimmed: lighten($text-color, 40) !default;
$text-color-inverted: invert($text-color) !default;

// Borders
$border-color: #e0e0e0 !default;
$border-color-focus: lighten($text-color, 50) !default;

// Placeholders
$placeholder-color-primary: lighten($color-primary, 30) !default;
$placeholder-color-success: lighten($color-success, 10) !default;
$placeholder-color-info: lighten($color-info, 30) !default;
$placeholder-color-warning: lighten($color-warning, 30) !default;
$placeholder-color-danger: lighten($color-danger, 30) !default;
$placeholder-color: lighten($text-color, 40) !default;

// Shadows
$shadow: 0 12px 8px -8px rgba(0,0,0,0.05);

// Shadow Focus
$shadow-focus-default: 0px 0px 0px 3px rgba($color-default, 0.06) !default;
$shadow-focus-primary: 0px 0px 0px 3px rgba($color-primary, 0.12) !default;
$shadow-focus-success: 0px 0px 0px 3px rgba($color-success, 0.12) !default;
$shadow-focus-warning: 0px 0px 0px 3px rgba($color-warning, 0.14) !default;
$shadow-focus-danger: 0px 0px 0px 3px rgba($color-danger, 0.24) !default;
$shadow-focus-info: 0px 0px 0px 3px rgba($color-info, 0.23) !default;
$shadow-focus-ghost: 0px 0px 0px 3px rgba(darken($color-ghost, 56), 0.23) !default;

// Code
$code-background-color: #f9f9f9;
`.trim();
export default {
    data() {
        return {
            codeVariables,
        };
    },
};
</script>
