<template>
    <div class="lv-file-input">
        <div class="lv-file-input__container">
            <lv-button
                class="lv-file-input__button"
                color="solid-primary"
                :label="buttonText"
                size="small"
                @click="onClickSelectFile"
            />
            <div class="lv-file-input__files">
                <template v-if="hasFiles">
                    <lv-badge
                        v-for="(file, index) in modelValue"
                        :key="index"
                        class="lv-file-input__file"
                        :text="file.name"
                        color="solid-dimmed-primary"
                    />
                </template>
            </div>
        </div>
        <input ref="input" type="file" class="lv-file-input__real" :multiple="multiple" @change="onFileChange" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: FileList,
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
    },
    computed: {
        hasFiles() {
            return this.modelValue?.length > 0;
        }
    },
    methods: {
        onClickSelectFile() {
            this.$refs.input.click();
        },
        onFileChange(event) {
            // Check to see if there has been a file actually uploaded
            if (event.target.files) {
                this.$emit('update:modelValue', event.target.files);
            }
        },
    },
};
</script>

<style lang="scss">
.lv-file-input {
    position: relative;
    width: 100%;
    overflow: hidden;
    &__button {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: 0.5rem;
    }
    &__container {
        display: flex;
        align-items: flex-start;
    }
    &__files {
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
    }
    &__file {
        flex-shrink: 0;
    }
    &__real {
        position: absolute;
        opacity: 0;
        height: 0;
    }
}
</style>
