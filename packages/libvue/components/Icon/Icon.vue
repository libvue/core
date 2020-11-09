<script>
import { h } from 'vue';

export default {
  props: {
    name: {
      type: String,
      default: 'AlertTriangle',
    },
    size: {
      type: Number,
      default: 16
    }
  },
   setup(props) {
    const Icon = require('vue-feather-icon')[props.name].default;
    return () => h(Icon, {
      class: ['lv-icon'],
      width: props.size,
      height: props.size,
      stroke: 'currentColor'
    })
  }
}
</script>

<style lang="scss">
.lv-icon {
  color: red;
}
</style>