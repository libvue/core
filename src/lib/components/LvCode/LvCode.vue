<template>
  <div
    class="lv-code"
    :class="{
      'lv-code--titled': title,
    }"
  >
    <div
      v-if="title"
      class="lv-code__title"
    >
      {{ title }}
      <lv-icon
        class="lv-code__title-copy"
        name="copy"
        @click="copyCodeToClipboard"
      />
    </div>
    <div class="lv-code__content">
      <pre
        class="lv-code__code"
        v-html="html"
      />
      <lv-icon
        v-if="!title"
        class="lv-code__content-copy"
        name="copy"
        @click="copyCodeToClipboard"
      />
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/agate.css';
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
        return ['js', 'vue', 'html', 'php', 'bash', 'shell', 'typescript', 'blade'].includes(value);
      }
    }
  },
  computed: {
    html() {
      return hljs.highlightAuto(this.code, [this.lang]).value;
    },
  },
  methods: {
    copyCodeToClipboard() {
      return copyToClipboard(this.code);
    },
  },
};
</script>

<style lang="scss">
@import '../../scss/core';

$code-padding: 14px;
$code-background-color: lighten($color-default, 12);

.lv-code {
  $self: &;
  width: 100%;
  margin-bottom: 20px;

  &__title {
    display: flex;
    flex-direction: row;
    background-color: lighten($code-background-color, 4);
    border-bottom: 1px solid lighten($code-background-color, 4);
    color: $text-color-inverted;
    font-family: $font-family;
    border-radius: $border-radius $border-radius 0 0;
    font-size: $font-size;
    margin-bottom: 0;
    padding: 14px;

    &-copy {
      margin-left: auto;
      cursor: pointer;
    }
  }

  &__content {
    position: relative;
    background-color: $code-background-color;
    color: $text-color-inverted;
    padding: $padding ;
    border-radius: $border-radius;
    font-family: $font-family-monospace;
    font-size: $font-size;
    padding-right: 35px;

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