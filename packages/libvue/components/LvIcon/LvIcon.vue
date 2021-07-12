<template>
  <svg
    class="lv-icon"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
  >
    <use :href="`${spritePath}#${name}`" />
  </svg>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: 'exclamation-triangle',
    },
    size: {
      type: Number,
      default: 16,
    },
    type: {
      type: String,
      default: 'line',
      validator: (value) => ['line', 'solid', 'thinline'].includes(value),
    },
  },
  computed: {
    spritePath() {
      return require(`@iconscout/unicons/sprite/${this.type}/unicons.svg`);
    },
  },
};
</script>
