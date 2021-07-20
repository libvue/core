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
    </div>
    <div class="lv-code__content">
      <pre
        v-if="inline"
        class="lv-code__pre"
      ><code class="lv-code__code lv-code__code--inline"><slot /></code></pre>
      <code
        v-else
        class="lv-code__code"
      ><slot /></code>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
