<template>
    <div class="lv-text-editor">
        <div class="lv-text-editor__buttons">
            <slot name="buttons" :editor="editor">
                <lv-flex direction="row">
                    <lv-toggle-group v-if="bold || italic || underline">
                        <lv-toggle
                            v-if="bold"
                            :model-value="!!(editor && editor.isActive('bold'))"
                            @click="editor.chain().focus().toggleBold().run()"
                        >
                            <lv-icon name="bold" />
                        </lv-toggle>
                        <lv-toggle
                            v-if="italic"
                            :model-value="!!(editor && editor.isActive('italic'))"
                            @click="editor.chain().focus().toggleItalic().run()"
                        >
                            <lv-icon name="italic" />
                        </lv-toggle>
                        <lv-toggle
                            v-if="underline"
                            :model-value="!!(editor && editor.isActive('underline'))"
                            @click="editor.chain().focus().toggleUnderline().run()"
                        >
                            <lv-icon name="underline" />
                        </lv-toggle>
                    </lv-toggle-group>

                    <lv-toggle-group v-if="bulletList || orderedList">
                        <lv-toggle
                            v-if="bulletList"
                            :model-value="!!(editor && editor.isActive('bulletList'))"
                            @click="editor.chain().focus().toggleBulletList().run()"
                        >
                            <lv-icon name="list" />
                        </lv-toggle>
                        <lv-toggle
                            v-if="orderedList"
                            :model-value="!!(editor && editor.isActive('orderedList'))"
                            @click="editor.chain().focus().toggleOrderedList().run()"
                        >
                            <lv-icon name="list-ordered" />
                        </lv-toggle>
                    </lv-toggle-group>

                    <lv-toggle-group v-if="heading1 || heading2 || heading3 || heading4">
                        <lv-toggle
                            v-if="heading1"
                            :model-value="!!(editor && editor.isActive('heading', { level: 1 }))"
                            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                        >
                            h1
                        </lv-toggle>
                        <lv-toggle
                            v-if="heading2"
                            :model-value="!!(editor && editor.isActive('heading', { level: 2 }))"
                            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                        >
                            h2
                        </lv-toggle>
                        <lv-toggle
                            v-if="heading3"
                            :model-value="!!(editor && editor.isActive('heading', { level: 3 }))"
                            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                        >
                            h3
                        </lv-toggle>
                        <lv-toggle
                            v-if="heading4"
                            :model-value="!!(editor && editor.isActive('heading', { level: 4 }))"
                            @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                        >
                            h4
                        </lv-toggle>
                    </lv-toggle-group>

                    <lv-toggle
                        v-if="code"
                        :model-value="!!(editor && editor.isActive('code'))"
                        @click="editor.chain().focus().toggleCode().run()"
                    >
                        <lv-icon name="code" />
                    </lv-toggle>
                    <lv-toggle
                        v-if="link"
                        :model-value="!!(editor && editor.isActive('link'))"
                        @click="onClickToggleLink"
                    >
                        <lv-icon name="link" />
                    </lv-toggle>
                </lv-flex>
            </slot>
        </div>
        <div class="lv-text-editor__content">
            <editor-content :editor="editor" />
        </div>
        <lv-dialog :show="showLinkDialog" @click-overlay="showLinkDialog = false">
            <lv-heading v-space-after="1" :level="5">Add link</lv-heading>
            <lv-input v-model="linkHrefModel" v-space-after="1" placeholder="Enter link" />
            <lv-switch v-model="linkTargetModel" v-space-after="1" label="New window" />
            <lv-flex fill>
                <lv-button :disabled="!linkHrefModel" label="Add" color="solid-primary" @click="onClickAddLink" />
                <lv-button label="Cancel" color="solid-dimmed-primary" @click="onClickCancelAddLink" />
            </lv-flex>
        </lv-dialog>
    </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3';
import { Underline } from '@tiptap/extension-underline';
import { Link } from '@tiptap/extension-link';
import StarterKit from '@tiptap/starter-kit';
import LvFlex from '../LvFlex/LvFlex.vue';
import LvToggleGroup from '../LvToggleGroup/LvToggleGroup.vue';
import LvToggle from '../LvToggle/LvToggle.vue';
import LvIcon from '../LvIcon/LvIcon.vue';
import LvDialog from '../LvDialog/LvDialog.vue';
import LvHeading from '../LvHeading/LvHeading.vue';
import LvInput from '../LvInput/LvInput.vue';
import LvSwitch from '../LvSwitch/LvSwitch.vue';
import LvButton from '../LvButton/LvButton.vue';

Link.configure({
    openOnClick: false,
});

export default {
    components: {
        LvButton,
        LvSwitch,
        LvInput,
        LvHeading,
        LvDialog,
        LvIcon,
        LvToggle,
        LvToggleGroup,
        LvFlex,
        EditorContent,
    },
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        bold: {
            type: Boolean,
            default: true,
        },
        italic: {
            type: Boolean,
            default: true,
        },
        underline: {
            type: Boolean,
            default: true,
        },
        bulletList: {
            type: Boolean,
            default: true,
        },
        orderedList: {
            type: Boolean,
            default: true,
        },
        heading1: {
            type: Boolean,
            default: true,
        },
        heading2: {
            type: Boolean,
            default: true,
        },
        heading3: {
            type: Boolean,
            default: true,
        },
        heading4: {
            type: Boolean,
            default: true,
        },
        code: {
            type: Boolean,
            default: false,
        },
        link: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            editor: null,
            showLinkDialog: false,
            linkHrefModel: '',
            linkTargetModel: true,
        };
    },
    watch: {
        modelValue(val) {
            const { from, to } = this.editor.state.selection;
            this.editor.commands.setContent(val, false, {preserveWhitespace: "full"});
            this.editor.commands.setTextSelection({ from, to });
        },
    },
    mounted() {
        this.editor = new Editor({
            extensions: [StarterKit, Underline, Link],
            content: this.modelValue,
            parseOptions: {
                preserveWhitespace: 'full',
            },
            onUpdate: ({ editor }) => {
                this.$emit('update:modelValue', editor.getHTML());
            },
        });
    },
    beforeUnmount() {
        this.editor.destroy();
    },
    methods: {
        onClickToggleLink() {
            if (this.editor.isActive('link')) {
                this.editor.commands.unsetLink();
            } else {
                // Open dialog where user can input link
                this.showLinkDialog = true;
            }
        },
        onClickAddLink() {
            if (this.linkHrefModel) {
                this.editor.commands.setLink({
                    href: this.linkHrefModel,
                    target: this.linkTargetModel,
                });
                this.showLinkDialog = false;
                this.linkHrefModel = '';
                this.linkTargetModel = true;
            }
        },
        onClickCancelAddLink() {
            this.showLinkDialog = false;
            this.linkHrefModel = '';
            this.linkTargetModel = true;
        },
    },
};
</script>

<style lang="scss">
.lv-text-editor {
    &__buttons {
        margin-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1rem;
    }
    &__content {
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        padding: var(--padding);
        color: var(--text-color);
    }
}
.ProseMirror {
    outline: 0;
    min-height: 100px;
    max-height: 320px;
    overflow-y: auto;

    p {
        margin-top: 0;
    }
    a {
        pointer-events: none;
    }
    h1,
    h2,
    h3,
    h4 {
        margin-top: 0;
    }
}
</style>
