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
                    <pre class="lv-code__code" v-html="getHtml(file.lang, file.code)"></pre>
                    <lv-icon
                        v-if="!inline"
                        class="lv-code__content-copy"
                        :name="copyIcon"
                        @click="copyCodeToClipboard(file.code)"
                    />
                </div>
            </template>
            <template v-else>
                <pre class="lv-code__code" v-html="getHtml(lang, code)"></pre>
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
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import useCopyToClipboard from '../../composables/useCopyToClipboard';
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
            default: 'javascript',
            required: false,
            validator: (value) => ['javascript', 'markup', 'html', 'css'].includes(value),
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
            return Prism.highlight(code, Prism.languages[lang], lang);
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
.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {
    background: none;
}
</style>
