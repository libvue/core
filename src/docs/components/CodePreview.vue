<template>
    <div class="code-preview" :class="classObject">
        <div v-if="hasFiles" class="code-preview__header">
            <div
                v-for="(file, index) in files"
                :key="index"
                tabindex="0"
                class="code-preview__file-button"
                :class="{ 'code-preview__file-button--active': active === file.id }"
                @click="onClickFile(file.id)"
                @keydown.space.enter="onClickFile(file.id)"
            >
                {{ file.filename }}
            </div>
        </div>
        <div class="code-preview__content">
            <template v-if="hasFiles">
                <div v-for="(file, index) in files" v-show="active === file.id" :key="index" class="code-preview__file-code">
                    <highlightjs class="code-preview__code" :code="file.code" :language="file.lang"></highlightjs>
                    <lv-icon
                        v-if="!inline"
                        class="code-preview__content-copy"
                        :name="copyIcon"
                        @click="copyCodeToClipboard(file.code)"
                    />
                </div>
            </template>
            <template v-else>
                <highlightjs class="code-preview__code" :code="code" :language="lang"></highlightjs>
                <lv-icon
                    v-if="!inline"
                    class="code-preview__content-copy"
                    :name="copyIcon"
                    @click="copyCodeToClipboard(code)"
                />
            </template>
        </div>
    </div>
</template>

<script>
import useCopyToClipboard from '../../lib/composables/useCopyToClipboard';
import LvIcon from '../../lib/components/LvIcon/LvIcon.vue';

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
            default: 'javascript',
            required: false,
            validator: (value) => ['javascript', 'shell', 'html', 'scss'].includes(value),
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
                'code-preview--header': !!this.hasFiles,
                'code-preview--inline': !!this.inline,
            };
        },
    },
    methods: {
        getHtml(lang, code) {
            return code;
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

<style>
// If no [data-theme] is set, and the user prefers dark, we load dark mode
@media (prefers-color-scheme: dark) {
    :root {
        --code-preview-background-color: #090909;;
        --code-preview-header-color: #171717;
        --code-preview-button-color: #090909;
    }
}

// If no [data-theme] is set, and the user prefers light, we load light mode
@media (prefers-color-scheme: light) {
    :root {
        --code-preview-background-color: #f2f0fd;;
        --code-preview-header-color: #fff;
        --code-preview-button-color: #e8e8e8;
    }
}

[data-theme="light"] {
    --code-preview-background-color: #f6f5f8;;
    --code-preview-header-color: #fff;
    --code-preview-button-color: #e8e8e8;
}
[data-theme="dark"] {
    --code-preview-background-color: #090909;;
    --code-preview-header-color: #171717;
    --code-preview-button-color: #090909;
}
</style>

<style lang="scss">
.code-preview {
    $self: &;
    width: 100%;
    --code-preview-text-color: var(--text-color);

    &__header {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        background-color: var(--code-preview-header-color);
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
        position: relative;

        &--active {
            font-weight: bold;
            &:after {
                content: '';
                border-bottom: 3px solid var(--color-primary);
                position: absolute;
                width: 100%;
                height: 0;
                bottom: -8px;
                left: 0;
            }
        }

        &:hover {
            background-color: var(--code-preview-button-color);
        }
    }

    &__content {
        position: relative;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--code-preview-background-color);
        color: var(--code-preview-text-color);
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
        }
    }

    &--inline {
        display: inline-block;
        vertical-align: middle;
        width: auto;

        #{$self}__content {
            &-copy {
                top: 10px;
                right: 11px;
            }
        }
    }
}
</style>


<style lang="scss">
.hljs {
    background: none;
    color: var(--text-color);
}
.lv-code-doctag,
.lv-code-keyword,
.lv-code-meta .lv-code-keyword,
.lv-code-template-tag,
.lv-code-template-variable,
.lv-code-type,
.lv-code-variable.language_ {
    color: var(--color-warning);
}
.lv-code-title,
.lv-code-title.class_,
.lv-code-title.class_.inherited__,
.lv-code-title.function_ {
    color: var(--color-info);
}
.lv-code-attr,
.lv-code-attribute,
.lv-code-literal,
.lv-code-meta,
.lv-code-number,
.lv-code-operator,
.lv-code-selector-attr,
.lv-code-selector-class,
.lv-code-selector-id,
.lv-code-variable {
    color: var(--color-primary);
}
.lv-code-meta .lv-code-string,
.lv-code-regexp,
.lv-code-string {
    color: var(--color-secondary);
}
.lv-code-built_in,
.lv-code-symbol {
    color: var(--color-warning);
}
.lv-code-code,
.lv-code-comment,
.lv-code-formula {
    color: var(--text-color);
}
.lv-code-name,
.lv-code-quote,
.lv-code-selector-pseudo,
.lv-code-selector-tag {
    color: var(--color-info);
}
.lv-code-subst {
    color: #c9d1d9;
}
.lv-code-section {
    color: #1f6feb;
    font-weight: 700;
}
.lv-code-bullet {
    color: #f2cc60;
}
.lv-code-emphasis {
    color: #c9d1d9;
    font-style: italic;
}
.lv-code-strong {
    color: #c9d1d9;
    font-weight: 700;
}
.lv-code-addition {
    background-color: #033a16;
    color: #aff5b4;
}
.lv-code-deletion {
    background-color: #67060c;
    color: #ffdcd7;
}
</style>