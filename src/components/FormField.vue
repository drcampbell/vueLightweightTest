<script>
// import { mdc } from '@/lib/material-components-web';
import TextField from '@/components/TextField';
import EnumerationField from '@/components/EnumerationField';

export default {
  name: 'FormField',
  functional: true,
  render(createElement, context) {
    function getInput() {
      const input = context.props.field;
      if (input.type === 'Enumeration') {
        return EnumerationField;
      }
      return TextField;
    }
    return createElement(
      getInput(), {
        props: {
          field: context.props.field,
        },
      });
  },
  props: ['field'],
  data() {
    return {
    };
  },
  // mounted() {
  //   this.mdComponent = new mdc.textField.MDCTextField(this.$el);
  // },
  // beforeDestroy() {
  //   this.mdComponent();
  // },
};
</script>
