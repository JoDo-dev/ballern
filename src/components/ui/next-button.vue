<template>
    <div class="nextbutton_container">
        <button
          class="nextbutton"
          :type="type"
          @click="clicked"
        >
            <slot />
        </button>
    </div>
</template>
<script>
export default {
  name: 'NextButton',
  props: {
    type: {
      type: String,
      default: () => 'button',
    },
  },
  methods: {
    clicked() {
      this.$emit('clicked');
    },
  },
};
</script>
<style scoped>
  .nextbutton {
    background-color: #444444;
    color: #f3f3f3;
    border-radius: 20px;
    padding: 16px;
    text-align: center;
    width: 100%;
    height: auto;
    border: none;
    box-shadow: 0px 2px 5px 2px rgba(120,120,120,0.3);
    font-size: 16px;
  }
</style>
