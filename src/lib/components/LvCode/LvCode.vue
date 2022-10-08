<template>
    <div
        class="lv-code"
        :class="{
            'lv-code--titled': title,
        }"
    >
        <div v-if="title" class="lv-code__title">
            {{ title }}
            <lv-icon class="lv-code__title-copy" :name="copyIcon" @click="copyCodeToClipboard" />
        </div>
        <div class="lv-code__content">
            <pre class="lv-code__code" v-html="html" />
            <lv-icon v-if="!title" class="lv-code__content-copy" :name="copyIcon" @click="copyCodeToClipboard" />
        </div>
    </div>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/atelier-cave-light.css';
import useCopyToClipboard from '../../composables/clipboard';

export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        code: {
            type: String,
            default: '...',
        },
        lang: {
            type: String,
            default: 'shell',
            required: false,
            validator: (value) =>
                ['js', 'vue', 'html', 'php', 'bash', 'shell', 'typescript', 'blade', 'scss'].includes(value),
        },
    },
    data() {
        return {
            copyIcon: 'copy',
        };
    },
    computed: {
        html() {
            return hljs.highlightAuto(this.code, [this.lang]).value;
        },
    },
    methods: {
        copyCodeToClipboard() {
            this.copyIcon = 'check';
            setTimeout(() => {
                this.copyIcon = 'copy';
            }, 1000);
            useCopyToClipboard(this.code);
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

$code-padding: 14px;

.lv-code {
    $self: &;
    width: 100%;

    &__title {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0;
        border-radius: $border-radius $border-radius 0 0;
        background-color: darken($code-background-color, 2);
        padding: 0.5rem ($padding * 1.5);
        color: $text-color-dimmed;
        font-weight: 500;
        font-size: $font-size-small;
        font-family: $font-family;

        &-copy {
            cursor: pointer;
            margin-left: auto;
            color: $text-color;
            font-size: $font-size;
        }
    }

    &__content {
        position: relative;
        border-radius: $border-radius;
        background-color: $code-background-color;
        padding: $padding ($padding * 1.5);
        padding-right: 35px;
        color: $text-color;
        font-size: $font-size;
        line-height: 24px;
        font-family: $font-family-monospace;

        &-copy {
            position: absolute;
            top: 14px;
            right: 14px;
            cursor: pointer;
        }
    }

    &--titled {
        #{$self}__content {
            border-radius: 0 0 $border-radius $border-radius;
            padding-right: $code-padding;
        }
    }

    &__code {
        margin: 0;
        padding: 0;
        overflow-x: auto;
    }
}
</style>
