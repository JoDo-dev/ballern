<template>
    <component v-if="iconName" :is="iconName" />
</template>
<script>

import icons from './icons';

export default {
  components: {
    ...icons,
  },
  props: {
    iconName: {
      type: String,
      default: '',
    },
  },

};
</script>
