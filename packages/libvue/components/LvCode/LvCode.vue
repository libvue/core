<template>
  <div
    class="lv-code"
    :class="{
      'lv-code--title': title,
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
      <div
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
import 'highlight.js/styles/darcula.css';
import copyToClipboard from '../../utils/copyToClipboard';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
      default: '<span>Hello World</span>',
    },
  },
  computed: {
    html() {
      return hljs.highlightAuto(this.code).value;
    },
  },
  methods: {
    copyCodeToClipboard() {
      return copyToClipboard(this.code);
    },
  },
};
</script>
