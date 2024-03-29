<template>
    <div class="lv-file-input" :class="classObject">
        <div class="lv-file-input__container">
            <lv-button
                class="lv-file-input__button"
                color="solid-primary"
                :label="buttonText"
                size="small"
                :loading="loading"
                :icon="multiple ? 'files' : 'file'"
                @click="onClickSelectFile"
            />
            <div class="lv-file-input__files">
                <template v-if="hasModelValue">
                    <template v-if="hasFileList">
                        <lv-pill
                            v-for="(file, index) in modelValue"
                            :key="file.name"
                            class="lv-file-input__file"
                            size="small"
                            closable
                            :text="file.name"
                            color="solid-dimmed-primary"
                            @close="onClickRemoveFile(index)"
                        />
                    </template>
                    <template v-else>
                        <template v-if="hasString">
                            <lv-pill
                                class="lv-file-input__file"
                                size="small"
                                closable
                                :text="modelValue"
                                color="solid-dimmed-primary"
                                @close="onClickRemoveString"
                            />
                        </template>
                        <template v-else-if="hasArrayWithStrings">
                            <lv-pill
                                v-for="(name, index) in modelValue"
                                :key="`${name}${index}`"
                                class="lv-file-input__file"
                                size="small"
                                closable
                                :text="name"
                                color="solid-dimmed-primary"
                                @close="onClickRemoveStringFromArray(index)"
                            />
                        </template>
                    </template>
                </template>
                <template v-else>
                    <div class="lv-file-input__no-files">
                        {{ noFilesText }}
                    </div>
                </template>
            </div>
        </div>
        <lv-notice v-if="showInfo" class="lv-file-input__info" icon="info" color="solid-dimmed-info">Accept: {{ accept }}</lv-notice>
        <input ref="input" type="file" class="lv-file-input__real" :accept="accept" :multiple="multiple" @change="onFileChange" />
    </div>
</template>

<script>
import LvButton from "../LvButton/LvButton.vue";
import LvPill from '../LvPill/LvPill.vue';

export default {
    components: { LvButton, LvPill },
    props: {
        modelValue: {
            type: [FileList, String, Array],
            default: null,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        buttonText: {
            type: String,
            default: (props) => (props.multiple ? 'Select files' : 'Select a file'),
        },
        noFilesText: {
            type: String,
            default: (props) => (props.multiple ? 'Select files' : 'Select a file'),
        },
        accept: {
            type: String,
            default: '.png, .jpg, .jpeg, .svg'
        },
        showInfo: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        hasModelValue() {
            return this.modelValue?.length > 0;
        },
        hasFileList() {
            return typeof this.modelValue !== 'string' && !Array.isArray(this.modelValue) && this.modelValue !== null;
        },
        hasString() {
            return typeof this.modelValue === 'string';
        },
        hasArrayWithStrings() {
            return Array.isArray(this.modelValue);
        },
        classObject() {
            return {
                'lv-file-input--has-files': !!this.hasModelValue,
                'lv-file-input--loading': !!this.loading,
            }
        }
    },
    methods: {
        onClickSelectFile() {
            this.$refs.input.click();
        },
        onFileChange(event) {
            // Check to see if there has been a file actually uploaded
            if (event.target.files && event.target.files.length > 0) {
                this.$emit('update:modelValue', event.target.files);
            } else {
                this.$refs.input.value = '';
                this.$emit('update:modelValue', null);
            }
        },
        onClickRemoveString() {
            this.$emit('update:modelValue', null);
        },
        onClickRemoveStringFromArray(index) {
            const newArray = Array.from(this.modelValue);
            newArray.splice(index, 1);
            if(newArray.length > 0) {
                this.$emit('update:modelValue', newArray);
            } else {
                this.$emit('update:modelValue', null);
            }
        },
        onClickRemoveFile(index) {
            const newFiles = Array.from(this.modelValue);
            newFiles.splice(index, 1);

            if(newFiles.length > 0) {
                const dt = new DataTransfer();
                newFiles.forEach((file) => {
                    dt.items.add(file);
                })
                this.$refs.input.files = dt.files;
                this.$emit('update:modelValue', dt.files);
            } else {
                this.$refs.input.value = '';
                this.$emit('update:modelValue', null);
            }
        }
    },
};
</script>

<style lang="scss">
.lv-file-input {
    $self: &;
    position: relative;
    width: 100%;
    &__button {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: 0.5rem;
        margin-bottom: auto;
    }
    &__container {
        display: flex;
        align-items: center;
    }
    &__files {
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        overflow-x: auto;
    }
    &__no-files {
        line-height: var(--line-height-small);
        font-size: var(--font-size-small);
        height: calc(var(--font-size-small) + 1px);
    }
    &__info {
        margin-top: .5rem;
    }
    &__file {
        flex-shrink: 0;
    }
    &__real {
        position: absolute;
        opacity: 0;
        height: 0;
    }
    &--loading {
        #{$self}__files {
            opacity: 0.5;
            pointer-events: none;
            user-select: none;
        }
    }
}
</style>
