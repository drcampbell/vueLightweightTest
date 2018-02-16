<template>
    <div style="width: 50%" class="pan-field mdc-select" enter-as-tab role="listbox">
        <div
            class="mdc-select__surface"
            tabindex="0"
            ng-focus="$ctrl.focus()"
            ng-blur="$ctrl.blur()">
            <div class="mdc-select__label">{{field.label}}</div>
            <div class="mdc-select__selected-text"></div>
            <div class="mdc-select__bottom-line"></div>
        </div>
        <div class="mdc-simple-menu mdc-select__menu">
            <ul class="mdc-list mdc-simple-menu__items">
                <li
                    class="mdc-list-item"
                    role="option"
                    v-if="!option.hide"
                    v-for="option in field.values"
                    :data-code="option.code"
                    :key="option.code">
                    {{option.value}}
                </li>
            </ul>
        </div>
        <input
            :name="field.keyName"
            v-model="field.value"
            ng-required="field.required"
            ng-disabled="field.disabled || field.readOnly"
            ng-focus="onFocus()"
            hidden/>
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
    this.$nextTick(() => {
      this.mdComponent = new mdc.select.MDCSelect(this.$el);
    });
  },
  beforeDestroy() {
    this.mdComponent();
  },
};
</script>
