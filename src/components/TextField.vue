<template>
  <div class="pan-field mdc-text-field mdc-text-field--upgraded">
    <input
        :name="field.keyName"
        type="text"
        class="mdc-text-field__input"
        v-model="field.value"
        />
    <label class="mdc-text-field__label">{{field.label}}</label>
    <div class="mdc-text-field__bottom-line"></div>
  </div>
</template>

<script>
import { mdc } from '@/lib/material-components-web';

export default {
  name: 'TextField',
  props: ['field'],
  data() {
    return {
    };
  },
  mounted() {
    this.mdComponent = new mdc.textField.MDCTextField(this.$el);
  },
  beforeDestroy() {
    this.mdComponent();
  },
};
</script>
