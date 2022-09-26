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
import copyToClipboard from '../../utils/copyToClipboard';

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
            validator: (value) => {
                return ['js', 'vue', 'html', 'php', 'bash', 'shell', 'typescript', 'blade', 'scss'].includes(value);
            },
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
            copyToClipboard(this.code);
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
        background-color: darken($code-background-color, 4);
        color: $text-color;
        font-family: $font-family;
        border-radius: $border-radius $border-radius 0 0;
        font-size: $font-size;
        margin-bottom: 0;
        padding: 14px;
        align-items: center;

        &-copy {
            margin-left: auto;
            cursor: pointer;
        }
    }

    &__content {
        position: relative;
        background-color: $code-background-color;
        color: $text-color;
        padding: $padding ($padding * 1.5);
        border-radius: $border-radius;
        font-family: $font-family-monospace;
        font-size: $font-size;
        padding-right: 35px;
        line-height: 24px;

        &-copy {
            cursor: pointer;
            position: absolute;
            top: 14px;
            right: 14px;
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
