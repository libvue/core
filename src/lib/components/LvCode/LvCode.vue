<template>
    <div class="lv-code" :class="classObject">
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
        inline: {
            type: Boolean,
            default: false,
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
        classObject() {
            return {
                'lv-code--titled': !!this.title,
                'lv-code--inline': !!this.inline,
            };
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
.lv-code {
    --code-padding: 14px;
    $self: &;
    width: 100%;

    &__title {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0;
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 0.5rem calc(var(--padding) * 1.5);
        color: var(--text-color-dimmed);
        font-weight: 500;
        font-size: var(--font-size-small);
        font-family: var(--font-family);

        &-copy {
            cursor: pointer;
            margin-left: auto;
            color: var(--text-color);
            font-size: var(--font-size);
        }
    }

    &__content {
        position: relative;
        border-radius: var(--border-radius);
        background-color: var(--code-background-color);
        padding: var(--padding) calc(var(--padding) * 1.5);
        padding-right: 35px;
        color: var(--text-color);
        font-size: var(--font-size);
        line-height: 24px;
        font-family: var(--font-family-monospace);

        &-copy {
            position: absolute;
            top: 14px;
            right: 14px;
            cursor: pointer;
        }
    }

    &__code {
        margin: 0;
        padding: 0;
        overflow-x: auto;
    }

    &--titled {
        #{$self}__content {
            border-radius: 0 0 var(--border-radius) var(--border-radius);
            padding-right: var(--code-padding);
        }
    }

    &--inline {
        display: inline-block;
        vertical-align: middle;
        width: auto;

        #{$self}__content {
            padding: calc(var(--padding) * 0.2) calc(var(--padding) * 0.8);
            padding-right: 35px;

            &-copy {
                top: 10px;
                right: 11px;
            }
        }
    }
}
</style>
