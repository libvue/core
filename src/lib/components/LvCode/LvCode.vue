<template>
    <div class="lv-code" :class="classObject">
        <div v-if="hasFiles" class="lv-code__header">
            <div
                v-for="(file, index) in files"
                :key="index"
                class="lv-code__file-button"
                :class="{ 'lv-code__file-button--active': active === file.id }"
                @click="onClickFile(file.id)"
            >
                {{ file.filename }}
            </div>
        </div>
        <div class="lv-code__content">
            <template v-if="hasFiles">
                <div  v-for="(file, index) in files" v-show="active === file.id" :key="index" class="lv-code__file-code">
                    <pre class="lv-code__code">{{ file.code }}</pre>
                    <lv-icon
                        v-if="!inline"
                        class="lv-code__content-copy"
                        :name="copyIcon"
                        @click="copyCodeToClipboard(file.code)"
                    />
                </div>
            </template>
            <template v-else>
                <pre class="lv-code__code">{{ code }}</pre>
                <lv-icon
                    v-if="!inline"
                    class="lv-code__content-copy"
                    :name="copyIcon"
                    @click="copyCodeToClipboard(code)"
                />
            </template>
        </div>
    </div>
</template>

<script>
import useCopyToClipboard from '../../composables/clipboard';
import LvIcon from '../LvIcon/LvIcon.vue';

export default {
    components: { LvIcon },
    props: {
        files: {
            type: Array,
            default: () => [],
        },
        active: {
            type: String,
            default: null,
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
    emits: ['change-file'],
    data() {
        return {
            copyIcon: 'copy',
        };
    },
    computed: {
        hasFiles() {
            return this.files.length > 0;
        },
        classObject() {
            return {
                'lv-code--header': !!this.hasFiles,
                'lv-code--inline': !!this.inline,
            };
        },
    },
    methods: {
        getHtml(lang, code) {
            return JSON.stringify(code);
        },
        copyCodeToClipboard(code) {
            this.copyIcon = 'check';
            setTimeout(() => {
                this.copyIcon = 'copy';
            }, 1000);
            useCopyToClipboard(code);
        },
        onClickFile(id) {
            this.$emit('change-file', id);
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
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        background-color: var(--code-header-color);
        padding: 0.5rem;
        color: var(--text-color);
        font-weight: 500;
        font-size: var(--font-size-small);
        line-height: var(--line-height-small);
        font-family: var(--font-family);
    }

    &__file-button {
        cursor: pointer;
        border-radius: var(--border-radius);
        padding: 0.25rem 0.5rem;
        &--active {
            background-color: var(--code-button-color);
        }
    }

    &__content {
        position: relative;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--code-background-color);
        padding: var(--padding) calc(var(--padding) * 1.5);
        padding-right: 35px;
        color: var(--text-color);
        font-size: var(--font-size);
        line-height: var(--line-height-large);
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

    &--header {
        #{$self}__content {
            border-top: 1px solid transparent;
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

            &-copy {
                top: 10px;
                right: 11px;
            }
        }
    }
}
</style>

<style lang="scss">
code[class*='language-'],
pre[class*='language-'] {
    word-wrap: normal;
    background: 0 0;
    color: #ccc;
    font-size: 1em;
    line-height: var(--line-height);
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
