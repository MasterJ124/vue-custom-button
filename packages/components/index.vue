<template>
  <button class="vue-custom-button-primary" @click="emit('click')">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
// $emit
const emit = defineEmits(["click"]);
</script>

<style lang="less" scoped>
.vue-custom-button-primary {
  @text-color: #fff;
  @color: #1890ff;
  @color-hover: #40a9ff;
  @color-active: #096db9;

  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  color: @text-color;
  border: 1px solid transparent;
  border-color: @color;
  background: @color;
  height: 32px;
  font-size: 14px;
  border-radius: 2px;
  padding: 4px 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:not(disabled):hover,
  &:not(disabled):focus {
    text-decoration: none;
    color: @text-color;
    border-color: @color-hover;
    background: @color-hover;
  }

  &:not(disabled):active {
    outline: 0;
    box-shadow: none;
    color: @text-color;
    border-color: @color-active;
    background: @color-active;
  }
}
</style>
