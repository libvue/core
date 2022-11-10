<template>
    <div class="lv-code" :class="classObject">
        <div v-if="title" class="lv-code__header">
            {{ title }}
            <lv-icon class="lv-code__header-copy" :name="copyIcon" @click="copyCodeToClipboard" />
        </div>
        <div class="lv-code__content">
            <pre class="lv-code__code" v-html="html" />
            <lv-icon v-if="!title" class="lv-code__content-copy" :name="copyIcon" @click="copyCodeToClipboard" />
        </div>
    </div>
</template>

<script>
import Prism from 'prismjs';
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
            validator: (value) => ['javascript', 'html', 'shell', 'css', 'scss'].includes(value),
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
        grammarByLang() {
            if (this.lang === 'javascript') {
                return Prism.languages.javascript;
            }
            if (this.lang === 'html') {
                return Prism.languages.html;
            }
            if (this.lang === 'css') {
                return Prism.languages.css;
            }
            if (this.lang === 'scss') {
                return Prism.languages.css;
            }
            return Prism.languages.javascript;
        },
        html() {
            return Prism.highlight(this.code, this.grammarByLang, this.lang);
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

    &__header {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0;
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        background-color: var(--code-header-color);
        padding: 0.5rem calc(var(--padding) * 1.5);
        color: var(--text-color);
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

<style>
code[class*='language-'],
pre[class*='language-'] {
    word-wrap: normal;
    background: 0 0;
    color: #ccc;
    font-size: 1em;
    line-height: 1.5;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    text-align: left;
    white-space: pre;
    word-break: normal;
    word-spacing: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
}
pre[class*='language-'] {
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
}
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
    background: #2d2d2d;
}
:not(pre) > code[class*='language-'] {
    border-radius: 0.3em;
    padding: 0.1em;
    white-space: normal;
}
.token.block-comment,
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
    color: #999;
}
.token.punctuation {
    color: #ccc;
}
.token.attr-name,
.token.deleted,
.token.namespace,
.token.tag {
    color: var(--color-info);
}
.token.function-name {
    color: #6196cc;
}
.token.boolean,
.token.function,
.token.number {
    color: #f08d49;
}
.token.class-name,
.token.constant,
.token.property,
.token.symbol {
    color: var(--color-secondary);
}
.token.atrule,
.token.builtin,
.token.important,
.token.keyword,
.token.selector {
    color: var(--color-primary);
}
.token.attr-value,
.token.char,
.token.regex,
.token.string,
.token.variable {
    color: var(--color-primary);
}
.token.entity,
.token.operator,
.token.url {
    color: var(--color-warning);
}
.token.bold,
.token.important {
    font-weight: 700;
}
.token.italic {
    font-style: italic;
}
.token.entity {
    cursor: help;
}
.token.inserted {
    color: green;
}
</style>
