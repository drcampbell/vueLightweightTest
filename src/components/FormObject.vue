<template>
    <section v-if="fobject.type === 'Object'">
        <div
            v-for="(field, key) in fobject.fields"
            v-bind:key="key">
            <form-field :field="field" v-if="field.type !== 'Object'"></form-field>
            <form-object :fobject="field" v-if="field.type === 'Object'"></form-object>
        </div>
    </section>
    <!-- <div>{{myobject}}</div> -->
</template>

<script>
import FormField from '@/components/FormField';

export default {
  name: 'FormObject',
  props: ['fobject'],
  data() {
    return {
      myobject: this.fobject,
    };
  },
  components: {
    FormField,
  },
};
</script>
