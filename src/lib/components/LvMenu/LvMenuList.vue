<template>
  <div class="lv-menu-list">
    <div
      class="lv-menu-list__label"
      @click="toggleState"
    >
      <lv-icon
        v-if="icon"
        :name="icon"
        class="lv-menu-list__icon"
      /> {{ label }}
      <lv-icon class="lv-menu-list__label-icon" :name="iconName"></lv-icon>
    </div>
    <div class="lv-menu-list__dropdown" v-show="isOpen">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.open,
    };
  },
  computed: {
    iconName() {
      return this.isOpen ? 'angle-up' : 'angle-down';
    },
  },
  methods: {
    toggleState() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
